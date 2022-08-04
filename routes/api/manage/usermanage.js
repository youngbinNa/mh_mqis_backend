var router = require('express').Router();
var sql = require('mssql');

var strSql = "";


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /getInpectionTargetList
*/


router.get('/list', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure
        
        return pool.request()
        //.input('pCPID', sql.Numeric ([20], [0]),req.params.pCPID)
        //.input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
        //.input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
        .query('SELECT * FROM TB_PATROL_INSP_USERS')

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

router.patch('/list/:_mode', (req, res) => {
    sql.on('error', err => {
      // ... error handler
      console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {
        return pool.request()
        .input('mode', sql.VarChar(10),req.params._mode)
        .input('user_seq', sql.Int, req.body.items.user_seq)
        .input('user_id', sql.NVarChar(64),req.body.items.user_id)
        .input('passwd', sql.NVarChar(256),req.body.items.passwd)
        .input('kname', sql.NVarChar(64),req.body.items.kname)
        .input('corp_seq', sql.Int, req.body.items.corp_seq)
        .input('corp_name', sql.NVarChar(64),req.body.items.corp_name)
        .input('place_seq', sql.Int, req.body.items.place_seq)
        .input('place_name', sql.NVarChar(64),req.body.items.place_name)
        .input('organ_seq', sql.Int, req.body.items.organ_seq)
        .input('organ_name', sql.NVarChar(64),req.body.items.organ_name)
        .input('email', sql.VarChar(64),req.body.items.email)
        .input('cell_phone', sql.VarChar(32),req.body.items.cell_phone)
        .input('del_yn', sql.Char(1),'N')
        .output('outNo', sql.Int)
        .output('outmsg', sql.VarChar(100))
            .execute('PATROL_INSP_USER_C_U_D')

    }).then(result => {
        //console.log(result)
        //res.send(result.recordset);
        res.send(result);
        //console.log(result.output.outmsg);
    }).catch(err => {
        // ... error checks
        console.log(err)
    }).then(() => {
        return sql.close()
    })
})

router.get('/corp', function (req, res) {
        
  sql.on('error', err => {
      // ... error handler
      console.log(err)
  })

  sql.connect(d2hqmsconfig).then(pool => {

      // Stored procedure
      
      return pool.request()
      .query('select distinct corp_seq,corp_name from tb_patrol_gw_users order by corp_name')

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

router.get('/place/:_corpseq', function (req, res) {
        
  sql.on('error', err => {
      // ... error handler
      console.log(err)
  })

  sql.connect(d2hqmsconfig).then(pool => {

      // Stored procedure
      
      return pool.request()
      .query('select distinct place_seq,place_name from tb_patrol_gw_users where corp_seq='+req.params._corpseq+'order by place_name')

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

router.get('/organ/:_placeseq', function (req, res) {
        
  sql.on('error', err => {
      // ... error handler
      console.log(err)
  })

  sql.connect(d2hqmsconfig).then(pool => {

      // Stored procedure
      
      return pool.request()
      .query('select distinct organ_seq,organ_name from tb_patrol_gw_users where place_seq='+req.params._placeseq+'order by organ_name')

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

router.get('/place', function (req, res) {
        
  sql.on('error', err => {
      // ... error handler
      console.log(err)
  })

  sql.connect(d2hqmsconfig).then(pool => {

      // Stored procedure
      
      return pool.request()
      .query('select distinct place_seq,place_name from tb_patrol_gw_users order by place_name')

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


module.exports = router;