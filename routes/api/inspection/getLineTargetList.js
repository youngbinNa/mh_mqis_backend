var express = require('express');
var router = express.Router();
var sql = require('mssql');

var strSql = "";


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /GetDoList
*/



router.get('/getLineTargetList', function (req, res) {
        
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
            .input('WORK_DATE', sql.NVarChar(10),req.query.date)
            //.input('TIME_ZONE_ID', sql.NVarChar(20),req.query.zone)
            // .input('p_FAC_ID', sql.NVarChar(20),'*')
            // .input('P_BAN_ID', sql.NVarChar(30),'*')
            // .input('P_WORK_SHOP_ID', sql.NVarChar(30),'*')
            // .input('P_LINE_GROUP', sql.NVarChar(30),'*')
            // .input('P_save_by', sql.NVarChar(30),'JIYOON')
                .execute('MPS_PATROL_WORK_SHOP_INSPECTION_TARGET_LINE')

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

router.get('/getLineTargetListWeek', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        return pool.request()
        .input('WORK_DATE', sql.NVarChar(10),req.query.date)
            .execute('MPS_PATROL_WORK_SHOP_INSPECTION_TARGET_LINE_WEEK')

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

router.patch('/tl/manual', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        return pool.request()
        .input('pIS_MANUAL', sql.Char(1), req.query.pIS_MANUAL)
        .input('pINDEX_KEY', sql.Int,req.query.index_key)
        .query('UPDATE TB_PATROL_WORK_TICKET_TARGET_LINE_MASTER SET IS_MANUAL=@pIS_MANUAL WHERE INDEX_KEY=@pINDEX_KEY')

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

router.patch('/tl/manual/week', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        return pool.request()
        .input('pIS_MANUAL', sql.Char(1), req.query.pIS_MANUAL)
        .input('pINDEX_KEY', sql.Int,req.query.index_key)
        .query('UPDATE TB_PATROL_WORK_TICKET_TARGET_LINE_MASTER_WEEK SET IS_MANUAL=@pIS_MANUAL WHERE INDEX_KEY=@pINDEX_KEY')

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