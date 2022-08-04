var express = require('express');
var router = express.Router();
var sql = require('mssql');

var strSql = "";


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /getInpectionTargetList
*/



router.get('/spclist/:pWCEN/:pMACO/:pCPCU', function (req, res) {
        
        sql.on('error', err => {
            // ... error handler
            console.log(err)
        })

        sql.connect(d2hqmsconfig).then(pool => {
    
            // Stored procedure
            
            return pool.request()
            .input('pWCEN', sql.NVarChar(50),req.params.pWCEN)
            .input('pMACO', sql.NVarChar(50),req.params.pMACO)
            .input('pCPCU', sql.NVarChar(50),req.params.pCPCU)
            //.input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
            //.input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
                .execute('MPS_PATROL_SPC_GET_INSPECTION_TARGET')

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


router.get('/percent/:pWCEN/:pMACO/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure
        
        return pool.request()
        .input('pWCEN', sql.NVarChar(50),req.params.pWCEN)
        .input('pMACO', sql.NVarChar(50),req.params.pMACO)
        .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
        .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
            .execute('MPS_PATROL_SPC_GET_IS_DONE_TOTAL')

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

router.patch('/starttime/:pCPID/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure
        
        return pool.request()
        .input('pCPID', sql.Numeric ([20], [0]),req.params.pCPID)
        .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
        .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
        .query('UPDATE TB_PATROL_SPC_INSPECTION_DO  SET START_TIME=GETDATE() WHERE WORK_DATE=@pWORK_DATE AND TIME_ZONE_ID=@pTIME_ZONE_ID AND CPID=@pCPID')

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

router.patch('/endtime/:pCPID/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
    
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure
        
        return pool.request()
        .input('pCPID', sql.Numeric ([20], [0]),req.params.pCPID)
        .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
        .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
        .input('pINPUT', sql.Numeric ([8], [3]),req.query.pINPUT)
        .input('pTOGGLE', sql.NVarChar(10),req.query.pTOGGLE)
        .input('pETC', sql.NVarChar(200),req.query.pETC)
        .query('UPDATE TB_PATROL_SPC_INSPECTION_DO  SET END_TIME=GETDATE(), INSP_RESULT=@pINPUT, IS_OK=@pTOGGLE, IS_DONE=1, ETCTXT=@pETC  WHERE WORK_DATE=@pWORK_DATE AND TIME_ZONE_ID=@pTIME_ZONE_ID AND CPID=@pCPID')

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