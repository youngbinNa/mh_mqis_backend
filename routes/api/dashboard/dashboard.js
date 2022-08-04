var express = require('express');
var router = express.Router();
var sql = require('mssql');

var strSql = "";


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /GetDoList
*/



router.get('/get1', function (req, res) {
        
        sql.on('error', err => {
            // ... error handler
            console.log(err)
        })

        sql.connect(d2hqmsconfig).then(pool => {
    
            // Stored procedure
            //if(typeof req.query.paramA !== 'undefined' && typeof req.query.paramB !== 'undefined') {
             //   let paramA = req.query.paramA;
             //   let paramB = req.query.paramB;
           // }
            return pool.request()
            .input('pWORK_DATE', sql.NVarChar(20),req.query.date)
            .input('pTIME_ZONE_ID', sql.NVarChar(20),req.query.zone)
            //.input('pWORK_DATE', sql.NVarChar(20),'20210303')
           // .input('pTIME_ZONE_ID', sql.NVarChar(20), '주간')

                .execute('MPS_PATROL_GET_INSPECTION_DASHBOARD_1')

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

router.get('/get2', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure
        //if(typeof req.query.paramA !== 'undefined' && typeof req.query.paramB !== 'undefined') {
         //   let paramA = req.query.paramA;
         //   let paramB = req.query.paramB;
       // }
        return pool.request()
        .input('pWORK_DATE', sql.NVarChar(20),req.query.date)
        .input('pTIME_ZONE_ID', sql.NVarChar(20),req.query.zone)
        //.input('pWORK_DATE', sql.NVarChar(20),'20210303')
       // .input('pTIME_ZONE_ID', sql.NVarChar(20), '주간')

            .execute('MPS_PATROL_GET_INSPECTION_DASHBOARD_2')

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

router.get('/get3', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure
        //if(typeof req.query.paramA !== 'undefined' && typeof req.query.paramB !== 'undefined') {
         //   let paramA = req.query.paramA;
         //   let paramB = req.query.paramB;
       // }
        return pool.request()
        .input('pWORK_DATE_FROM', sql.NVarChar(20),req.query.from)
        .input('pWORK_DATE_TO', sql.NVarChar(20),req.query.to)
        .input('pTIME_ZONE_ID', sql.NVarChar(20),req.query.zone)
        //.input('pWORK_DATE', sql.NVarChar(20),'20210303')
       // .input('pTIME_ZONE_ID', sql.NVarChar(20), '주간')

            .execute('MPS_PATROL_GET_INSPECTION_DASHBOARD_3')

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

router.get('/get3/week', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure
        //if(typeof req.query.paramA !== 'undefined' && typeof req.query.paramB !== 'undefined') {
         //   let paramA = req.query.paramA;
         //   let paramB = req.query.paramB;
       // }
        return pool.request()
        .input('pWORK_DATE_FROM', sql.NVarChar(20),req.query.from)
        .input('pWORK_DATE_TO', sql.NVarChar(20),req.query.to)
        .input('pTIME_ZONE_ID', sql.NVarChar(20),req.query.zone)
        //.input('pWORK_DATE', sql.NVarChar(20),'20210303')
       // .input('pTIME_ZONE_ID', sql.NVarChar(20), '주간')

            .execute('MPS_PATROL_GET_INSPECTION_DASHBOARD_3_WEEK')

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

router.get('/get4', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {
/*
        var txt = "select CD.INDEX_KEY,CD.WORK_DATE,CD.TIME_ZONE_ID AS ZONE,WTR.WORK_SHOP_NAME AS SHOPNM,WTR.PART_NAME AS PARTNM,CD.PSNM+CD.MANM AS PSNM,CD.COND,CD.JGCD,CD.INSP_RESULT AS RSLT,case when CD.IS_OK>0 then '불합격' else '합격' end AS IS_OK "
        txt=txt+" from TB_PATROL_SPC_INSPECTION_DO AS CD LEFT JOIN TB_PATROL_WORK_TICKET_TARGET_LINE_MASTER AS WTR"
        txt=txt+" ON WTR.WORK_SHOP_ID = CD.WCEN AND WTR.PART_ID = CD.MACO AND WTR.WORK_DATE = CD.WORK_DATE AND WTR.TIME_ZONE_ID= CD.TIME_ZONE_ID"
        txt=txt+" where CD.WORK_DATE like '"+req.query.date+"%' AND CD.IS_OK=1 "
        return pool.request()
        .query(txt)
*/
        return pool.request()
        .input('pWORK_DATE', sql.NVarChar(20), (req.query.date+'%'))
        .execute('MPS_PATROL_GET_INSPECTION_DASHBOARD_4')

    }).then(result => {
        //console.log(result.recordset)
        res.send(result.recordset);
    }).catch(err => {
        // ... error checks
        console.log(err)
    }).then(() => {
        return sql.close()
      })

});

module.exports = router;