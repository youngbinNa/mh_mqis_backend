var express = require('express');
var router = express.Router();
var sql = require('mssql');

var strSql = "";


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /club
*/

/**
* 실제 업무처리 로직이 명시된 router import
*/
var clubList = require('./clubList');    //클럽목록

/* clubList 출력. 담당개발자 A */
router.get('/list', function (req, res) {
    clubList.list(req, res);
    //res.send(res);
});

router.get('/user/:date', function (req, res) {
        
        sql.on('error', err => {
            // ... error handler
            console.log(err)
        })

        sql.connect(doonpo1config).then(pool => {
    
            // Stored procedure
            
            return pool.request()
            .input('WORK_DATE', sql.NVarChar(20),req.params.date)
            // .input('p_FAC_ID', sql.NVarChar(20),'*')
            // .input('P_BAN_ID', sql.NVarChar(30),'*')
            // .input('P_WORK_SHOP_ID', sql.NVarChar(30),'*')
            // .input('P_LINE_GROUP', sql.NVarChar(30),'*')
            // .input('P_save_by', sql.NVarChar(30),'JIYOON')
                .execute('MPS_WORK_SHOP_PLAN_QTY_VS_TR_QTY')
        }).then(result => {
            console.log(result)
            res.send(result.recordset);
        }).catch(err => {
            // ... error checks
            console.log(err)
        })
});

module.exports = router;