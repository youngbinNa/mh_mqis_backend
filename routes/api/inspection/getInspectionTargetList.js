var express = require('express');
var router = express.Router();
var sql = require('mssql');

var strSql = "";

require('events').EventEmitter.prototype._maxListeners = 100;
/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /getInpectionTargetList
*/


/*
router.get('/spclist/:pWCEN/:pMACO/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
        
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
            //.input('pCPCU', sql.NVarChar(50),req.params.pCPCU)
            .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
            .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
                .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET')

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
        return sql.close()
      })
});

router.patch('/starttime/:pCPID/:pWORK_DATE/:pTIME_ZONE_ID/:pBOOL', function (req, res) {
    
    sql.on('error', err => {
        // ... error handler
        console.log(err)
        //reject(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {
        sql.removeListener();
        // Stored procedure
        if(req.params.pBOOL > 0){
            return pool.request()
            .input('pCPID', sql.Numeric ([20], [0]),req.params.pCPID)
            .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
            .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
            .query('UPDATE TB_PATROL_SPC_INSPECTION_DO  SET START_TIME=GETDATE() WHERE WORK_DATE=@pWORK_DATE AND TIME_ZONE_ID=@pTIME_ZONE_ID AND INDEX_KEY=@pCPID')
        }
        
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
        return sql.close()
    })
});

router.patch('/endtime/:pCPID/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
    
    //var _input
    //if(!isNaN(req.query.pINPUT)) _input='NULL'
    //else _input=req.query.pINPUT
    
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
        .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
        .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
        .input('pINPUT', sql.NVarChar(20),req.query.pINPUT)
        .input('pIS_OK', sql.NVarChar(10),req.query.pIS_OK)
        .input('pETC', sql.NVarChar(200),req.query.pETC)
        //.output('outmsg', sql.VarChar(100))
        .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET_SAVE')

    }).then(result => {
        console.log(result)
        res.send(result.recordset);
    }).catch(err => {
        // ... error checks
        console.log(err)
        //reject(err)
    }).then(() => {
        return sql.close()
      })
    
});
*/

async function connectDB() {
    const pool = new sql.ConnectionPool(d2hqmsconfig);

    try {
        await pool.connect();
        console.log('Connected to database');

        return pool;
    }
    catch(err) {
        console.log('Database connection failed!', err);

        return err;
    }
}

router.get('/spclist/:pWCEN/:pMACO/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
        
    async function getAll() {
        const DB = await connectDB();
    
            try {
                const result = await DB.request()
                .input('pWCEN', sql.NVarChar(50),req.params.pWCEN)
                .input('pMACO', sql.NVarChar(50),req.params.pMACO)
                //.input('pCPCU', sql.NVarChar(50),req.params.pCPCU)
                .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
                .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
                .output('DONE_CNT', sql.Int)
                .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET')
    
                return result;
            }
            catch (err) {
                console.log('Error querying database', err);
    
                return err;
            }
            finally {
                //DB.close();
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
            console.log("spclist error: "+err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
});


router.get('/percent/:pWCEN/:pMACO/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
    
  async function getAll() {
    const DB = await connectDB();

        try {
            const result = await DB.request()
            .input('pWCEN', sql.NVarChar(50),req.params.pWCEN)
            .input('pMACO', sql.NVarChar(50),req.params.pMACO)
            .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
            .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
            .execute('MPS_PATROL_SPC_GET_IS_DONE_TOTAL')

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

router.patch('/starttime/:pCPID/:pWORK_DATE/:pTIME_ZONE_ID/:pBOOL', function (req, res) {
    
    async function getAll() {
        const DB = await connectDB();
    
        try {
            const result = await DB.request()
            .input('pCPID', sql.Numeric ([20], [0]),req.params.pCPID)
            .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
            .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
            .query('UPDATE TB_PATROL_SPC_INSPECTION_DO  SET START_TIME=GETDATE() WHERE WORK_DATE=@pWORK_DATE AND TIME_ZONE_ID=@pTIME_ZONE_ID AND INDEX_KEY=@pCPID')
    
            return result.recordset;
        }
        catch (err) {
            console.log('Error querying database', err);
    
            return err;
        }
        //finally {
        //    DB.close();
        //}
    }
    
    async function execute() {
        let result = await getAll();
        //console.dir(JSON.stringify(result));
    
        return result;
    }
    
    execute()
        .catch(err => {
            // ... error checks
            console.log("starttime error: "+err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
    
});

router.patch('/endtime/:pCPID/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
    
    async function getAll() {
        const DB = await connectDB();
    
        try {
            const result = await DB.request()
                .input('pCPID', sql.Int,req.params.pCPID)
                .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
                .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
                .input('pINPUT', sql.NVarChar(20),req.query.pINPUT)
                .input('pIS_OK', sql.NVarChar(10),req.query.pIS_OK)
                .input('pETC', sql.NVarChar(200),req.query.pETC)
                .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET_SAVE')
    
            return result.recordset;
        }
        catch (err) {
            console.log('Error querying database', err);
    
            return err;
        }
        finally {
            //DB.close();
        }
    }
    
    async function execute() {
        let result = await getAll();
        //console.dir(JSON.stringify(result));
    
        return result;
    }
    
    execute()
        .catch(err => {
            // ... error checks
            console.log("endtime error: "+err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
    
});

router.get('/spclist/week/:pWCEN/:pMACO/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
        
    async function getAll() {
        const DB = await connectDB();
    
            try {
                const result = await DB.request()
                .input('pWCEN', sql.NVarChar(50),req.params.pWCEN)
                .input('pMACO', sql.NVarChar(50),req.params.pMACO)
                //.input('pCPCU', sql.NVarChar(50),req.params.pCPCU)
                .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
                .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
                .output('DONE_CNT', sql.Int)
                .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET_WEEK')
    
                return result;
            }
            catch (err) {
                console.log('Error querying database', err);
    
                return err;
            }
            finally {
                //DB.close();
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
            console.log("spclist error: "+err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
});


router.get('/percent/week/:pWCEN/:pMACO/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
    
  async function getAll() {
    const DB = await connectDB();

        try {
            const result = await DB.request()
            .input('pWCEN', sql.NVarChar(50),req.params.pWCEN)
            .input('pMACO', sql.NVarChar(50),req.params.pMACO)
            .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
            .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
            .execute('MPS_PATROL_SPC_GET_IS_DONE_TOTAL_WEEK')

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

router.patch('/starttime/week/:pCPID/:pWORK_DATE/:pTIME_ZONE_ID/:pBOOL', function (req, res) {
    
    async function getAll() {
        const DB = await connectDB();
    
        try {
            const result = await DB.request()
            .input('pCPID', sql.Numeric ([20], [0]),req.params.pCPID)
            .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
            .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
            .query('UPDATE TB_PATROL_SPC_INSPECTION_DO_WEEK  SET START_TIME=GETDATE() WHERE WORK_DATE=@pWORK_DATE AND TIME_ZONE_ID=@pTIME_ZONE_ID AND INDEX_KEY=@pCPID')
    
            return result.recordset;
        }
        catch (err) {
            console.log('Error querying database', err);
    
            return err;
        }
        //finally {
        //    DB.close();
        //}
    }
    
    async function execute() {
        let result = await getAll();
        //console.dir(JSON.stringify(result));
    
        return result;
    }
    
    execute()
        .catch(err => {
            // ... error checks
            console.log("starttime error: "+err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
    
});

router.patch('/endtime/week/:pCPID/:pWORK_DATE/:pTIME_ZONE_ID', function (req, res) {
    
    async function getAll() {
        const DB = await connectDB();
    
        try {
            const result = await DB.request()
                .input('pCPID', sql.Int,req.params.pCPID)
                .input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
                .input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
                .input('pINPUT', sql.NVarChar(20),req.query.pINPUT)
                .input('pIS_OK', sql.NVarChar(10),req.query.pIS_OK)
                .input('pETC', sql.NVarChar(200),req.query.pETC)
                .execute('MPS_PATROL_GET_INSPECTION_TARGET_SHEET_SAVE_WEEK')
    
            return result.recordset;
        }
        catch (err) {
            console.log('Error querying database', err);
    
            return err;
        }
        finally {
            //DB.close();
        }
    }
    
    async function execute() {
        let result = await getAll();
        //console.dir(JSON.stringify(result));
    
        //return result;
    }
    
    execute()
        .catch(err => {
            // ... error checks
            console.log("endtime error: "+err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
    
});

module.exports = router;