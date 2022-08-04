var router = require('express').Router();
var sql = require('mssql');
var arrayToTree = require('array-to-tree');

var strSql = "";


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /getInpectionTargetList
*/
async function connectDB() {
    const pool = new sql.ConnectionPool(d2hqmsconfig);

    try {
        await pool.connect();
        //console.log('Connected to database');

        return pool;
    }
    catch(err) {
        //console.log('Database connection failed!', err);

        return err;
    }
}

router.get('/menu', function (req, res) {
    
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })
  
    sql.connect(d2hqmsconfig).then(pool => {
  
        var txt = "SELECT CONVERT(INT,CONVERT(VARCHAR, GETDATE(), 112)+CAST(a.pplace_seq as varchar)+CAST(a.menu_seq as varchar)) as id,c.menu_name as name"
        txt=txt+" ,CASE WHEN c.parent=0 then CONVERT(INT,CONVERT(VARCHAR, GETDATE(), 112)+CAST(a.pplace_seq as varchar))"
        txt=txt+" else CONVERT(INT,CONVERT(VARCHAR, GETDATE(), 112)+CAST(a.pplace_seq as varchar)+CAST(c.parent as varchar)) end as parent"
        txt=txt+" ,'/'+b.pplace_code+c.menu_path as real_path FROM TB_PATROL_MENUS_AUTH as a"
        txt=txt+" inner join TB_PATROL_MENUS_PLACE as b on a.pplace_seq=b.pplace_seq inner join TB_PATROL_MENUS as c on a.menu_seq=c.menu_seq"
        txt=txt+" where a.user_seq=247 and a.pplace_seq is not null"
        txt=txt+" union all select CONVERT(INT,CONVERT(VARCHAR, GETDATE(), 112)+CAST(ma.pplace_seq as varchar)),ma.pplace_name,0,null"
        txt=txt+" FROM (select distinct a.pplace_seq,b.pplace_name from TB_PATROL_MENUS_AUTH as a inner join TB_PATROL_MENUS_PLACE as b on a.pplace_seq=b.pplace_seq " 
        txt=txt+" where a.user_seq=247 and a.pplace_seq is not null) as ma"
  
        return pool.request()
        .query(txt)
  
    }).then(result => {
        res.send(result.recordset);
        //console.log(result.recordset)
        const data=result.recordset

        const idMapping = data.reduce((acc, el, i) => {
            acc[el.id] = i;
            return acc;
          }, {});
          
          
          let root;
          data.forEach(el => {
            // Handle the root element
            if (el.parent === 0) {
              root = el;
              return;
            }
            // Use our mapping to locate the parent element in our data array
            const parentEl = data[idMapping[el.parent]];
            // Add our current el to its parent's `children` array
            parentEl.children = [...(parentEl.children || []), el];
          });
          /*
        var root = arrayToTree(result.recordset, {
            parentProperty: 'parent',
            customID: 'id'
          });*/
          //console.log(root) 
        
    }).catch(err => {
        // ... error checks
        console.log(err)
    }).then(() => {
        return sql.close()
      })
  });
  

router.get('/list', function (req, res) {
    
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure
        const txt= "'%명화공업%'"
        return pool.request()
        //.input('pCPID', sql.Numeric ([20], [0]),req.params.pCPID)
        //.input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
        //.input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
        
        .query('select id,name,parent FROM TB_PATROL_GW_ORGAN')

    }).then(result => {
        //console.log(result.recordset)
        var root = arrayToTree(result.recordset, {
            parentProperty: 'parent',
            customID: 'id'
          });
          //console.log(root) 
        res.send(root);
    }).catch(err => {
        // ... error checks
        console.log(err)
    }).then(() => {
        return sql.close()
      })
});

router.get('/list/:_organseq', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })
  
    sql.connect(d2hqmsconfig).then(pool => {
  
        // Stored procedure 
        var txt = 'select a.user_seq,corp_name,place_name,organ_name,a.kname,b.level'
        txt=txt+' from tb_patrol_gw_users as a'
        txt=txt+' full outer join TB_PATROL_AUTH as b'
        txt=txt+' on a.user_seq=b.user_seq'
        txt=txt+' where organ_seq='+req.params._organseq+'order by kname'

        return pool.request()
        .query(txt)
  
    }).then(result => {
        //console.log(result)
        res.send(result.recordset);
    }).catch(err => {
        // ... error checks
        console.log(err)
    }).then(() => {
        return sql.close()
      })
  });

router.get('/userlv', function (req, res) {
    
    async function getAll() {
      const DB = await connectDB();
  
          try {
            var txt = 'select b.corp_name,b.place_name,b.organ_name,a.user_seq,a.kname'
                txt=txt+' ,level,reg_kname,a.reg_date from TB_PATROL_AUTH as a'
                txt=txt+' left join tb_patrol_gw_users as b'
                txt=txt+' on a.user_seq=b.user_seq'

              const result = await DB.request()
              .query(txt)
  
              return result.recordset;
          }
          catch (err) {
              console.log('Error querying database', err);
  
              return err;
          }
          finally {
              DB.close();
          }
      }
  
      async function execute() {
          let result = await getAll();
          //console.dir(JSON.stringify(result));
  
          return result;
      }
  
      execute()
          .then(result => {
              //console.log(result)
              res.send(result);
          }).catch(err => {
              // ... error checks
              console.log("percent error: "+err)
              //reject(err)
          }).then(() => {
              return sql.close()
          })
});

  router.get('/gwuser', function (req, res) {
    
    async function getAll() {
      const DB = await connectDB();
  
          try {
            var txt = 'select a.user_seq,corp_name,place_name,organ_name,a.kname,b.level'
            txt=txt+' from tb_patrol_gw_users as a'
            txt=txt+' full outer join TB_PATROL_AUTH as b'
            txt=txt+' on a.user_seq=b.user_seq order by organ_seq'

              const result = await DB.request()
              .query(txt)
  
              return result.recordset;
          }
          catch (err) {
              console.log('Error querying database', err);
  
              return err;
          }
          finally {
              DB.close();
          }
      }
  
      async function execute() {
          let result = await getAll();
          //console.dir(JSON.stringify(result));
  
          return result;
      }
  
      execute()
          .then(result => {
              //console.log(result)
              res.send(result);
          }).catch(err => {
              // ... error checks
              console.log("percent error: "+err)
              //reject(err)
          }).then(() => {
              return sql.close()
          })
});

router.get('/place', function (req, res) {
    
    async function getAll() {
      const DB = await connectDB();
  
          try {
              const result = await DB.request()
              .query('SELECT pplace_seq,pplace_name,pplace_code,is_place FROM TB_PATROL_MENUS_PLACE')
  
              return result.recordset;
          }
          catch (err) {
              console.log('Error querying database', err);
  
              return err;
          }
          finally {
              DB.close();
          }
      }
  
      async function execute() {
          let result = await getAll();
          //console.dir(JSON.stringify(result));
  
          return result;
      }
  
      execute()
          .then(result => {
              //console.log(result)
              res.send(result);
          }).catch(err => {
              // ... error checks
              console.log("percent error: "+err)
              //reject(err)
          }).then(() => {
              return sql.close()
          })
});

router.patch('/mymenu', function (req, res) {
    const { place_seq, user_seq } = req.body
    console.log(req.body)
    var txt = "SELECT a.menu_seq as id,b.menu_name as name,b.parent,b.is_level FROM TB_PATROL_MENUS_AUTH as a"
    txt=txt+" inner join TB_PATROL_MENUS as b ON a.menu_seq=b.menu_seq"
    txt=txt+" where user_seq="+user_seq+" and use_yn='Y' and a.pplace_seq="+place_seq
    //console.log(req.body) 
    async function getAll() {
      const DB = await connectDB();
  
          try {
            
              const result = await DB.request()
              .query(txt)
  
              return result;
          }
          catch (err) {
              console.log('Error querying database', err);
  
              return err;
          }
          finally {
              DB.close();
          }
      }
  
      async function execute() {
          let result = await getAll();
          //console.dir(JSON.stringify(result));
  
          return result;
      }
  
      execute()
          .then(result => {
              //console.log(result)
              /*
              var root = arrayToTree(result.recordset, {
                parentProperty: 'parent',
                customID: 'id'
              });
              */
              //console.log(result.recordset) 
            //res.send(root);
            res.send(result.recordset);
          }).catch(err => {
              // ... error checks
              console.log("percent error: "+err)
              //reject(err)
          }).then(() => {
              return sql.close()
          })
});   

router.get('/menus', function (req, res) {
    
    async function getAll() {
      const DB = await connectDB();
  
          try {
              const result = await DB.request()
              .query('SELECT menu_seq as id ,menu_name as name,parent,is_level FROM TB_PATROL_MENUS order by menu_seq')
  
              return result;
          }
          catch (err) {
              console.log('Error querying database', err);
  
              return err;
          }
          finally {
              DB.close();
          }
      }
  
      async function execute() {
          let result = await getAll();
          //console.dir(JSON.stringify(result));
  
          return result;
      }
  
      execute()
          .then(result => {
              //console.log(result)
              var root = arrayToTree(result.recordset, {
                parentProperty: 'parent',
                customID: 'id'
              });
              //console.log(root) 
            res.send(root);
          }).catch(err => {
              // ... error checks
              console.log("percent error: "+err)
              //reject(err)
          }).then(() => {
              return sql.close()
          })
});

router.patch('/save', function (req, res) {
    
    //var _input
    //if(!isNaN(req.query.pINPUT)) _input='NULL'
    //else _input=req.query.pINPUT
    const { place_seq, user_seq, tree } = req.body
    //console.log(tree.length)
    var tree_id=[]
    for (key in tree) {
        tree_id.push(tree[key].id)
    }
    console.log(tree_id.join())
    sql.on('error', err => {
        // ... error handler
        console.log(err)
        //reject(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {
        sql.removeListener();
        // Stored procedure
        
        return pool.request()
        .input('user_seq', sql.Int, user_seq)
        .input('place_seq', sql.Int, place_seq)
        .input('menu_seq_array', sql.NVarChar(sql.MAX), tree_id.join())
        //.output('outNo', sql.Int)
        //.output('outmsg', sql.VarChar(100))
        .execute('PATROL_MENUS_AUTH_C_U_D') 

    }).then(result => {
        //console.log(result)
        //res.send(result.recordset);
        res.send({ success: true, authsave: result.recordset})
        //console.log(result.output.outmsg);
    }).catch(err => {
        // ... error checks
        res.send({ success: false, authsave: null})
        console.log(err)
        //reject(err)
    }).then(() => {
        // return sql.close()
 })
    

    
});
module.exports = router;