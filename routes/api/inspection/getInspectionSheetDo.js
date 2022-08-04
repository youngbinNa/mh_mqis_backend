var express = require('express');
var router = express.Router();
var sql = require('mssql');

var strSql = "";

require('events').EventEmitter.prototype._maxListeners = 100;
/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /getInpectionTargetList
*/


router.get('/list/:pCPID', function (req, res) {
        
        sql.on('error', err => {
            // ... error handler
            console.log(err)
            //reject(err)
        })

        sql.connect(d2hqmsconfig).then(pool => {
            sql.removeListener();
            // Stored procedure
            
            return pool.request()
            .input('pINDEX_KEY', sql.Numeric ([20], [0]),req.params.pCPID)
                .execute('MPS_PATROL_GET_INSPECTION_SHEET_DO')

        }).then(result => {
            //console.log(result)
            res.send(result.recordset);
        }).catch(err => {
            // ... error checks
            console.log(err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
});


router.get('/percent/:pWCEN/:pMACO/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
        //reject(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {
        sql.removeListener();
        // Stored procedure
        
        return pool.request()
        .input('pWCEN', sql.NVarChar(50),req.params.pWCEN)
        .input('pMACO', sql.NVarChar(50),req.params.pMACO)
        .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
        .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
            .execute('MPS_PATROL_SPC_GET_IS_DONE_TOTAL')

    }).then(result => {
        //console.log(result)
        res.send(result.recordset);
    }).catch(err => {
        // ... error checks
        console.log(err)
        //reject(err)
    }).then(() => {
        //return sql.close()
      })
});

router.patch('/starttime/:pCPID', function (req, res) {
    
    const { user_id, USER_SEQ, login_option } = req.body
    //console.log(req)
    sql.on('error', err => {
        // ... error handler
        console.log(err)
        //reject(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {
        sql.removeListener();
        // Stored procedure
        //if(req.params.pBOOL > 0){
            return pool.request()
            .input('pCPID', sql.Int,req.params.pCPID)
            //.input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
            //.input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
            .input('pINPUT', sql.NVarChar(20),'')
            .input('pIS_OK', sql.NVarChar(10),'')
            .input('pETC', sql.NVarChar(200),'')
            .input('pUser_Id', sql.VarChar(64),user_id)
            .input('pEdit_User_Seq', sql.Int,USER_SEQ)
            .input('pLogin_Option', sql.Int,login_option)
            .input('pMODE', sql.Bit, false)
            //.output('outmsg', sql.VarChar(100))
            .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET_SAVE')
        //}
        
        //else{
        //    return pool.request()
        //    .query('SET')
        //}

    })
    
    .then(result => {
        //console.log(result)
        res.send(result.recordset);
    })
    .catch(err => {
        // ... error checks
        console.log(err)
        //reject(err)
    }).then(() => {
        //return sql.close()
    })
});

router.patch('/endtime/:pCPID', function (req, res) {
    
    //var _input
    //if(!isNaN(req.query.pINPUT)) _input='NULL'
    //else _input=req.query.pINPUT
    const { user_id, USER_SEQ, login_option } = req.body
    
    sql.on('error', err => {
        // ... error handler
        console.log(err)
        //reject(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {
        sql.removeListener();
        // Stored procedure
        
        return pool.request()
        .input('pCPID', sql.Int,req.params.pCPID)
        //.input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
        //.input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
        .input('pINPUT', sql.NVarChar(20),req.query.pINPUT)
        .input('pIS_OK', sql.NVarChar(10),req.query.pIS_OK)
        .input('pETC', sql.NVarChar(200),req.query.pETC)
        .input('pUser_Id', sql.VarChar(64),user_id)
        .input('pEdit_User_Seq', sql.Int,USER_SEQ)
        .input('pLogin_Option', sql.Int,login_option)
        .input('pMODE', sql.Bit, true)
        //.output('outmsg', sql.VarChar(100))
        .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET_SAVE')

    }).then(result => {
        //console.log(result)
        res.send(result.recordset);
    }).catch(err => {
        // ... error checks
        console.log(err)
        //reject(err)
    }).then(() => {
       // return sql.close()
      })
    
});

router.get('/list/week/:pCPID', function (req, res) {
        
    sql.on('error', err => {
        // ... error handler
        console.log(err)
        //reject(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {
        sql.removeListener();
        // Stored procedure
        
        return pool.request()
        .input('pINDEX_KEY', sql.Numeric ([20], [0]),req.params.pCPID)
            .execute('MPS_PATROL_GET_INSPECTION_SHEET_DO_WEEK')

    }).then(result => {
        //console.log(result)
        res.send(result.recordset);
    }).catch(err => {
        // ... error checks
        console.log(err)
        //reject(err)
    }).then(() => {
       // return sql.close()
    })
});


router.get('/percent/week/:pWCEN/:pMACO/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
    
sql.on('error', err => {
    // ... error handler
    console.log(err)
    //reject(err)
})

sql.connect(d2hqmsconfig).then(pool => {
    sql.removeListener();
    // Stored procedure
    
    return pool.request()
    .input('pWCEN', sql.NVarChar(50),req.params.pWCEN)
    .input('pMACO', sql.NVarChar(50),req.params.pMACO)
    .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
    .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
        .execute('MPS_PATROL_SPC_GET_IS_DONE_TOTAL_WEEK')

}).then(result => {
    //console.log(result)
    res.send(result.recordset);
}).catch(err => {
    // ... error checks
    console.log(err)
    //reject(err)
}).then(() => {
    return sql.close()
  })
});

router.patch('/starttime/week/:pCPID', function (req, res) {

const { user_id, USER_SEQ, login_option } = req.body
//console.log(req)
sql.on('error', err => {
    // ... error handler
    console.log(err)
    //reject(err)
})

sql.connect(d2hqmsconfig).then(pool => {
    sql.removeListener();
    // Stored procedure
    //if(req.params.pBOOL > 0){
        return pool.request()
        .input('pCPID', sql.Int,req.params.pCPID)
        //.input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
        //.input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
        .input('pINPUT', sql.NVarChar(20),'')
        .input('pIS_OK', sql.NVarChar(10),'')
        .input('pETC', sql.NVarChar(200),'')
        .input('pUser_Id', sql.VarChar(64),user_id)
        .input('pEdit_User_Seq', sql.Int,USER_SEQ)
        .input('pLogin_Option', sql.Int,login_option)
        .input('pMODE', sql.Bit, false)
        //.output('outmsg', sql.VarChar(100))
        .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET_SAVE_WEEK')
    //}
    
    //else{
    //    return pool.request()
    //    .query('SET')
    //}

})

//.then(result => {
    //console.log(result)
//    res.send(result.recordset);
//})
.catch(err => {
    // ... error checks
    console.log(err)
    //reject(err)
}).then(() => {
    //return sql.close()
})
});

router.patch('/endtime/week/:pCPID', function (req, res) {

//var _input
//if(!isNaN(req.query.pINPUT)) _input='NULL'
//else _input=req.query.pINPUT
const { user_id, USER_SEQ, login_option } = req.body

sql.on('error', err => {
    // ... error handler
    console.log(err)
    //reject(err)
})

sql.connect(d2hqmsconfig).then(pool => {
    sql.removeListener();
    // Stored procedure
    
    return pool.request()
    .input('pCPID', sql.Int,req.params.pCPID)
    //.input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
    //.input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
    .input('pINPUT', sql.NVarChar(20),req.query.pINPUT)
    .input('pIS_OK', sql.NVarChar(10),req.query.pIS_OK)
    .input('pETC', sql.NVarChar(200),req.query.pETC)
    .input('pUser_Id', sql.VarChar(64),user_id)
    .input('pEdit_User_Seq', sql.Int,USER_SEQ)
    .input('pLogin_Option', sql.Int,login_option)
    .input('pMODE', sql.Bit, true)
    //.output('outmsg', sql.VarChar(100))
    .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET_SAVE_WEEK')

}).then(result => {
    //console.log(result)
    res.send(result.recordset);
}).catch(err => {
    // ... error checks
    console.log(err)
    //reject(err)
}).then(() => {
   // return sql.close()
  })

});

module.exports = router;