var express = require('express');
var router = express.Router();
var sql = require('mssql');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
let nonce = crypto.randomBytes(16).toString('base64');
var arrayToTree = require('array-to-tree');

var strSql = "";

const signToken = (id, pwd) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id, pwd }, '어려운키', {
      algorithm: 'HS256',
      expiresIn: '1d' // expires in 1 minute
  }, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}


router.get('/token', function (req, res) {
    
    const key = '베리베리어려운키'
    const token = jwt.sign({ id: 'memi', email: 'memi@xxx.com' }, key);
    console.log("token: "+token)
    
    const decoded = jwt.verify(token, key, (err, r) => {
        if (err) return console.error(err.message) 
        // invalid signature
        console.log(r) // bar
        console.log("date: "+new Date(r.iat * 1000).toLocaleString())
      })
    
});

router.post('/in', (req, res) => {
  const { id, pwd, selected } = req.body
  /*
  let encpass
  if(selected.value==0){ //관리직
    encpass = crypto.createHash('sha512').update(pwd).digest("base64");
  } else{
    encpass = pwd
  }
  */
  //const ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;

  if (!id) return res.send({ success: false, msg: '아이디를 입력하세요.'})
  if (!pwd) return res.send({ success: false, msg: '비밀번호를 입력하세요.'})
  if (!selected) return res.send({ success: false, msg:'계정 유형을 선택하세요.'})
  
      sql.on('error', err => {
        // ... error handler
        console.log(err)
      })

      sql.connect(d2hqmsconfig).then(pool => {

          return pool.request()
          .input('USER_ID', sql.VarChar(64), id)
          .input('PASS', sql.NVarChar(256), pwd)
          .input('LOGIN_OPTION', sql.Int, selected.value) //0:관리직 1:검사원
        //  .input('USER_IP', sql.VarChar(15), '')
        // .input('IS_LOG_SAVE', sql.Char(1), 'N')
        // .input('IS_LOCK_CHECK', sql.Char(1), '')
              .execute('PATROL_USER_LOGIN')

      }).then(result => {
          //console.log(result.recordset[0].USER_SEQ)
          if(result.recordset[0].USER_SEQ > 0) {
            signToken(id,pwd).then((token) => {
              res.send({ success: true, token: token, user: result.recordset[0], loginType:selected.value})
            })
          } else {
            //res.send({ success: true, token: 'error token', user: result.recordset[0], id:id})
            res.send({ success: false, msg:'계정 유형/아이디/비밀번호를 확인해주세요.'})
          }
          //res.send({ success: true, token: token, rslt: result.recordset[0].USER_SEQ, id:id})
          //res.send(result.recordset);
      }).catch(err => {
          // ... error checks
          console.log(err)
      }).then(() => {
          return sql.close()
      })

})

router.post('/autoin', (req, res) => {
  var { P1, P2 } = req.body
  P2=P2.replace(/\s/g, "+")

  console.log(P2)
  sql.on('error', err => {
    // ... error handler
    console.log(err)
  })

  sql.connect(d2hqmsconfig).then(pool => {

      return pool.request()
      .input('USER_ID', sql.VarChar(64), P1)
      .input('PASS', sql.NVarChar(256), P2)
    //  .input('USER_IP', sql.VarChar(15), '')
    // .input('IS_LOG_SAVE', sql.Char(1), 'N')
    // .input('IS_LOCK_CHECK', sql.Char(1), '')
          .execute('PATROL_USER_LOGIN_SSO')

  }).then(result => {
    //console.log(result.recordset[0])
      //console.log(result.recordset[0].USER_SEQ)
      if(result.recordset[0].USER_SEQ > 0) {
        signToken(P1,P2).then((token) => {
          res.send({ success: true, token: token, user: result.recordset[0], loginType:0})
        })
      } else {
        //res.send({ success: true, token: 'error token', user: result.recordset[0], id:id})
        res.send({ success: false, msg:'로그인에 실패했습니다.'})
      }
      //res.send({ success: true, token: token, rslt: result.recordset[0].USER_SEQ, id:id})
      //res.send(result.recordset);
  }).catch(err => {
      // ... error checks
      console.log(err)
  }).then(() => {
      return sql.close()
  })

})

//var mymenuauth=[];
router.post('/mymenu', (req, res) => {
  const { user_seq } = req.body
  //console.log(req.query.user)
  
      sql.on('error', err => {
        // ... error handler
        console.log(err)
      })

      sql.connect(d2hqmsconfig).then(pool => {

        var txt = "select auth_seq,pplace_seq,menu_seq from TB_PATROL_MENUS_AUTH"
        txt=txt+" where user_seq="+user_seq+" and USE_YN='Y'"
  //console.log(txt)
        return pool.request()
        .query(txt)

      }).then(result => {
          //console.log(result.recordset[0].USER_SEQ)
          //console.log(result.recordset)
          //mymenuauth = result.recordset
          res.send({ success: true, menu: result.recordset})
          
          //res.send({ success: true, token: token, rslt: result.recordset[0].USER_SEQ, id:id})
          //res.send(result.recordset);
      }).catch(err => {
          // ... error checks
          console.log(err)
      }).then(() => {
          return sql.close()
      })
      
})

router.post('/menulist', function (req, res) {
  const { user_seq, login_option } = req.body
  console.log('------menulist-------')
console.log(req.body)
  sql.on('error', err => {
      // ... error handler
      console.log(err)
  })

  sql.connect(d2hqmsconfig).then(pool => {

      if(login_option==0){
          var txt = "DECLARE @year varchar(4)"
          txt=txt+" set @year= (select DATEPART(YEAR,GETDATE()))"

          txt=txt+" SELECT CONVERT(INT,@year+CAST(a.pplace_seq as varchar)+CAST(a.menu_seq as varchar)) as id,c.menu_name as name"
          txt=txt+" ,CASE WHEN c.parent=0 then CONVERT(INT,@year+CAST(a.pplace_seq as varchar))"
          txt=txt+" else CONVERT(INT,@year+CAST(a.pplace_seq as varchar)+CAST(c.parent as varchar)) end as parent"
          txt=txt+" ,'/'+b.pplace_code+c.menu_path as real_path FROM TB_PATROL_MENUS_AUTH as a"
          txt=txt+" inner join TB_PATROL_MENUS_PLACE as b on a.pplace_seq=b.pplace_seq inner join TB_PATROL_MENUS as c on a.menu_seq=c.menu_seq"
          txt=txt+" where a.user_seq="+user_seq+" and c.is_level<>1 and a.USE_YN='Y'"
          txt=txt+" union all select CONVERT(INT,@year+CAST(ma.pplace_seq as varchar)),ma.pplace_name,0,null "
          txt=txt+" FROM (select distinct a.pplace_seq,b.pplace_name from TB_PATROL_MENUS_AUTH as a inner join TB_PATROL_MENUS_PLACE as b on a.pplace_seq=b.pplace_seq  " 
          txt=txt+" where a.user_seq="+user_seq+" and a.USE_YN='Y') as ma"

          return pool.request()
          .query(txt)
      }else{
          var txt = "DECLARE @year varchar(4)"
          txt=txt+" DECLARE @pplace_seq int"
          txt=txt+" set @year= (select DATEPART(YEAR,GETDATE()))"
          txt=txt+" set @pplace_seq=(select case (select place_seq from TB_PATROL_INSP_USERS where user_seq="+user_seq+" and del_yn='N') when 21 then 1 when 19 then 2 when 20 then 3 end)"

          txt=txt+" SELECT CONVERT(INT,@year+CAST(@pplace_seq as varchar)+CAST(c.menu_seq as varchar)) as id, menu_name as name"
          txt=txt+" ,CASE WHEN c.parent=0 then CONVERT(INT,@year+CAST(@pplace_seq as varchar))"
          txt=txt+" else CONVERT(INT,@year+CAST(@pplace_seq as varchar)+CAST(c.parent as varchar)) end as parent"
          txt=txt+" ,'/'+b.pplace_code+c.menu_path as real_path FROM TB_PATROL_MENUS as c"
          txt=txt+" inner join TB_PATROL_MENUS_PLACE as b on @pplace_seq=b.pplace_seq where menu_seq in (3,4,5)"
          txt=txt+" union all select CONVERT(INT,@year+CAST(@pplace_seq as varchar)),b.pplace_name,0,null from TB_PATROL_INSP_USERS as a"
          txt=txt+" inner join TB_PATROL_MENUS_PLACE as b on @pplace_seq=b.pplace_seq" 
          txt=txt+" where user_seq="+user_seq+" and del_yn='N'"

          return pool.request()
          .query(txt)
      }

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


router.post('/page', (req, res) => {
  const { user_seq, place_seq, menu_seq,login_option } = req.body
  var text
  //console.log(req.body)
  sql.on('error', err => {
    // ... error handler
    console.log(err)
  })

  sql.connect(d2hqmsconfig).then(pool => {

    if(login_option==0){
      //var txt = "select auth_seq,pplace_seq,menu_seq from TB_PATROL_MENUS_AUTH"
      var txt = "select auth_seq from TB_PATROL_MENUS_AUTH"
      txt=txt+" where user_seq="+user_seq+" and pplace_seq="+place_seq+" and menu_seq="+menu_seq+" and USE_YN='Y'"
      //console.log(txt)
      text=txt
      return pool.request()
      .query(txt)
    }
    else{
      var txt = "select user_seq from TB_PATROL_INSP_USERS"
      txt=txt+" where place_seq=(case "+place_seq+" when 1 then 21 when 2 then 19 when 3 then 20 end) and user_seq="+user_seq+""
      //console.log(txt)
      text=txt
      return pool.request()
      .query(txt)
    }

  }).then(result => {
      //console.log(result.recordset[0].USER_SEQ)
      //console.log(result.recordset)
      //mymenuauth = result.recordset
      if(result.recordset[0]) res.send({ auth: true, type: login_option, txt: text})
      else res.send({ auth: false, type: login_option, txt: text})
      
      //res.send({ success: true, token: token, rslt: result.recordset[0].USER_SEQ, id:id})
      //res.send(result.recordset);
  }).catch(err => {
      // ... error checks
      console.log(err)
  }).then(() => {
      return sql.close()
  })
})

router.post('/out', (req, res) => {
  res.send({ success: false, msg: '아직 준비 안됨.'})
})


module.exports = router;