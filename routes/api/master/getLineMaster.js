var express = require('express');
var router = express.Router();
var sql = require('mssql');

var strSql = "";


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /GetLineMaster
*/


router.get('/GetLineMaster/:date', function (req, res) {
        
        sql.on('error', err => {
            // ... error handler
            console.log(err)
        })

        sql.connect(d2hqmsconfig).then(pool => {
    
            // Stored procedure
            
            return pool.request()
            .input('WORK_DATE', sql.NVarChar(20),req.params.date)
            // .input('p_FAC_ID', sql.NVarChar(20),'*')
            // .input('P_BAN_ID', sql.NVarChar(30),'*')
            // .input('P_WORK_SHOP_ID', sql.NVarChar(30),'*')
            // .input('P_LINE_GROUP', sql.NVarChar(30),'*')
            // .input('P_save_by', sql.NVarChar(30),'JIYOON')
                .execute('MPS_PATROL_LINEMASTER_FROM_MES')
                
        }).then(result => {
            console.log(result)
            res.send(result.recordset);
        }).catch(err => {
            // ... error checks
            console.log(err)
        }).then(() => {
            return sql.close()
          })
});

module.exports = router;