var express = require('express');
var router = express.Router();
var sql = require('mssql');

var strSql = "";


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /GetDoList
*/

async function connectDB() {
    const pool = new sql.ConnectionPool(d2hqmsconfig);

    try {
        await pool.connect();
        console.log('결재대기 DB 연결');

        return pool;
    }
    catch(err) {
        console.log('결재대기 DB 연결 에러', err);

        return err;
    }
}

router.get('/wait', function (req, res) {
        
    async function getAll() {
        const DB = await connectDB();
            try {
                const result = await DB.request()
                .input('pWORK_DATE_FROM_N', sql.NVarChar(20),req.query.from)
                .input('pWORK_DATE_TO', sql.NVarChar(20),req.query.to)
                .execute('MPS_PATROL_GET_APPROVAL')
    
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
            //console.log(result.output.outmsg);
            res.send(result);
        }).catch(err => {
            // ... error checks
            console.log("spclist error: "+err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
});
router.get('/done', function (req, res) {
        
    async function getAll() {
        const DB = await connectDB();
            try {
                const result = await DB.request()
                .input('pWORK_DATE_FROM_N', sql.NVarChar(20),req.query.from)
                .input('pWORK_DATE_TO', sql.NVarChar(20),req.query.to)
                .execute('MPS_PATROL_GET_APPROVAL_DONE')
    
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
            //console.log(result.output.outmsg);
            res.send(result);
        }).catch(err => {
            // ... error checks
            console.log("spclist error: "+err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
});

router.get('/doc', function (req, res) {
        
    async function getAll() {
        const DB = await connectDB();
            try {
                const result = await DB.request()
                .input('pWORK_DATE', sql.NVarChar(20),req.query.date)
                .input('pJGCD', sql.NVarChar(20),req.query.jgcd)
                .query('SELECT INDEX_KEY,WORK_DATE,TIME_ZONE_ID,JGCD,OK_NUM,YET_NUM,OK_ITEMS,DEF_ITEMS,STATUS,REG_DATE,LOGIN_OPTION,USER_SEQ,APPR_DATE,user_id,kname,rank_name,place_code FROM TB_PATROL_APPROVAL_DOC WHERE WORK_DATE=@pWORK_DATE and JGCD=@pJGCD')
    
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
            //console.log(result.output.outmsg);
            res.send(result);
        }).catch(err => {
            // ... error checks
            console.log("spclist error: "+err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
});

router.patch('/all/wait', function (req, res) {
    const { seqArray,user_seq,kname,rank_name } = req.body
    //console.log(seqArray.join())
    //var seq = JSON.stringify(seqArray)
    //seq = seq.replace('[', '')
    //seq = seq.replace(']', '')
    var seq=[];
/*
    for (const [key] of Object.entries(seqArray)) {
        //console.log(this.selectedRows[key].INDEX_KEY);
        seq.push(seqArray[key].INDEX_KEY)
    }*/
    for (key in seqArray) {
        seq.push(seqArray[key].INDEX_KEY)
    }
    
        sql.on('error', err => {
            // ... error handler
            console.log(err)
            //reject(err)
        })
    
        sql.connect(d2hqmsconfig).then(pool => {
            sql.removeListener();
            // Stored procedure
            
            return pool.request()
            .input('index_array', sql.NVarChar(sql.MAX),seq.join())
            .input('user_seq', sql.Int,user_seq)
            .input('kname', sql.NVarChar(64),kname)
            .input('rank_name', sql.NVarChar(64),rank_name)
            .output('outNo', sql.Int)
            .output('outmsg', sql.NVarChar(4000))
            .execute('MPS_PATROL_SET_APPROVAL_ALL')
    
        }).then(result => {
            console.log(result.output)
            if(result.output.outNo) res.send({ success: true, msg:'일괄결재가 정상 처리 되었습니다.'})
            else res.send({ success: false, msg:'형식 오류로 일괄결재에 실패하였습니다.'})
            //console.log(result.recordset)
        }).catch(err => {
            // ... error checks
            res.send({ success: false, msg:'API 요청에 실패하였습니다.'})
            console.log(err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
});

router.patch('/all/doc', function (req, res) {
    const { index,user_seq,kname,rank_name } = req.body

        sql.on('error', err => {
            // ... error handler
            console.log(err)
            //reject(err)
        })
    
        sql.connect(d2hqmsconfig).then(pool => {
            sql.removeListener();
            // Stored procedure
            
            return pool.request()
            .input('index_array', sql.NVarChar(sql.MAX),index)
            .input('user_seq', sql.Int,user_seq)
            .input('kname', sql.NVarChar(64),kname)
            .input('rank_name', sql.NVarChar(64),rank_name)
            .output('outNo', sql.Int)
            .output('outmsg', sql.NVarChar(4000))
            .execute('MPS_PATROL_SET_APPROVAL_ALL')
    
        }).then(result => {
            console.log(result.output)
            if(result.output.outNo) res.send({ success: true, msg:'일괄결재가 정상 처리 되었습니다.'})
            else res.send({ success: false, msg:'형식 오류로 일괄결재에 실패하였습니다.'})
            //console.log(result.recordset)
        }).catch(err => {
            // ... error checks
            res.send({ success: false, msg:'API 요청에 실패하였습니다.'})
            console.log(err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
});

router.patch('/detail/doc', function (req, res) {
    const { index,user_seq,kname,rank_name } = req.body

        sql.on('error', err => {
            // ... error handler
            console.log(err)
            //reject(err)
        })
    
        sql.connect(d2hqmsconfig).then(pool => {
            sql.removeListener();
            // Stored procedure
            
            return pool.request()
            .input('index_key', sql.VarChar(16),index)
            .input('user_seq', sql.Int,user_seq)
            .input('kname', sql.NVarChar(64),kname)
            .input('rank_name', sql.NVarChar(64),rank_name)
            .output('outNo', sql.Int)
            //.output('outmsg', sql.NVarChar(4000))
            .execute('MPS_PATROL_SET_APPROVAL_DETAIL')
    
        }).then(result => {
            //console.log(result.output)
            if(result.output.outNo) res.send({ success: true, msg:'결재가 정상 처리 되었습니다.'})
            else res.send({ success: false, msg:'형식 오류로 결재에 실패하였습니다.'})
            //console.log(result.recordset)
        }).catch(err => {
            // ... error checks
            res.send({ success: false, msg:'API 요청에 실패하였습니다.'})
            console.log(err)
            //reject(err)
        }).then(() => {
            //return sql.close()
        })
});

module.exports = router;