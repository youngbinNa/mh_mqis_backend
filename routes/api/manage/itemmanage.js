var router = require('express').Router();
var sql = require('mssql');
const multer = require('multer');
const fs = require('fs');

var strSql = "";


/**
* BaseUrl : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
*  : /getInpectionTargetList
*/
router.get('/list/step1', function (req, res) {
    
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure 
        var txt = 'select distinct WCEN,MACO,B.WORK_SHOP_NAME,C.PART_NAME from HQMS.dbo.TB_PATROL_SPC_TARGET_INSPECTION_MASTER'
        txt=txt+' inner join DABOM41_MYUNGHWA.dbo.TB_WORK_SHOP B on wcen =B.WORK_SHOP_ID'
        txt=txt+' inner join DABOM41_MYUNGHWA.dbo.TB_PART C on maco =C.PART_ID'

        return pool.request()
        .query(txt)

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

router.get('/list/:pWCEN/:pMACO', function (req, res) {
    
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure 
        var txt = 'SELECT INDEX_KEY,WCEN,MACO,PSNO,PSNM,MANM,NAM1,NAM2,SCGU,COND,CKCD,SIZE,POINT,JGCD,REM1'
        txt=txt+' ,REM2,CENT,LCLQ,UCLQ,UNIT,IS_INPUT,REG_DATE,IMAGE,USE_YN,ORDR'
        txt=txt+' FROM dbo.TB_PATROL_SPC_TARGET_INSPECTION_MASTER'
        txt=txt+" where WCEN='"+req.params.pWCEN+"'and MACO='"+req.params.pMACO+"'"
        
        return pool.request()
        .query(txt)

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
        
        var image=''
        if(req.body.image){
            image = req.body.WCEN+'/'+req.body.MACO+'/'+req.body.INDEX_KEY
        }
        else{
            image=null
        }
        console.log('--body image--')
        console.log(req.body.image)
        console.log(image)
        var cent=''
        if(!req.body.CENT){
            cent = null
        }
        else{
            cent=req.body.CENT
        }
        var uclq=''
        if(!req.body.UCLQ){
            uclq = null
        }
        else{
            uclq=req.body.UCLQ
        }
        var lclq=''
        if(!req.body.LCLQ){
            lclq = null
        }
        else{
            lclq=req.body.LCLQ
        }
        return pool.request()
        .input('mode', sql.VarChar(10),req.params._mode)
        .input('INDEX_KEY', sql.Int, req.body.INDEX_KEY)
        .input('WCEN', sql.NVarChar(10),req.body.WCEN)
        .input('MACO', sql.NVarChar(20),req.body.MACO)
        .input('PSNO', sql.NVarChar(10),req.body.PSNO)
        .input('PSNM', sql.NVarChar(50), req.body.PSNM)
        .input('MANM', sql.NVarChar(50),req.body.MANM)
        .input('NAM1', sql.NVarChar(100), req.body.NAM1)
        .input('NAM2', sql.NVarChar(100),req.body.NAM2)
        .input('SCGU', sql.NVarChar(10), req.body.SCGU)
        .input('COND', sql.NVarChar(100),req.body.COND)
        .input('CKCD', sql.NVarChar(100),req.body.CKCD)
        .input('SIZE', sql.Int,req.body.SIZE)
        .input('JGCD', sql.NVarChar(100),req.body.JGCD)
        .input('REM1', sql.NVarChar(200),req.body.REM1)
        .input('REM2', sql.NVarChar(200),req.body.REM2)
        .input('CENT', sql.Numeric (10,3),cent)
        .input('LCLQ', sql.Numeric (8,3),lclq)
        .input('UCLQ', sql.Numeric (8,3),uclq)
        .input('UNIT', sql.NVarChar(10),req.body.UNIT)
        .input('IS_INPUT', sql.Char(1),req.body.IS_INPUT)
        .input('POINT', sql.Int,req.body.POINT)
        .input('ORDR', sql.NVarChar(10),req.body.ORDR)
        .input('IMAGE', sql.NVarChar(100), image)
        .output('outNo', sql.Int)
        .output('outmsg', sql.NVarChar(4000))
        .execute('PATROL_INSP_MASTER_C_U_D')

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

router.get('/part/list', function (req, res) {
    
    sql.on('error', err => {
        // ... error handler
        console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure 
        var txt = 'select DISTINCT A.WORK_SHOP_ID,A.PART_ID,B.PART_NAME'
        txt=txt+' FROM DABOM41_MYUNGHWA.dbo.TB_WORK_TICKET AS A'
        txt=txt+' INNER JOIN DABOM41_MYUNGHWA.dbo.TB_PART AS B ON A.PART_ID=B.PART_ID'
        txt=txt+" ORDER BY WORK_SHOP_ID"
        
        return pool.request()
        .query(txt)

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

router.patch('/active', (req, res) => {
    sql.on('error', err => {
      // ... error handler
      console.log(err)
    })

    sql.connect(d2hqmsconfig).then(pool => {

        // Stored procedure 
        var txt = 'update TB_PATROL_SPC_TARGET_INSPECTION_MASTER'
        txt=txt+" set USE_YN='Y'"
        txt=txt+" where INDEX_KEY='"+req.body.INDEX_KEY+"'"
        
        return pool.request()
        .query(txt)

    }).then(result => {
        //console.log(result)
        res.send("해당 기준정보가 사용 처리 되었습니다.");
    }).catch(err => {
        // ... error checks
        console.log(err)
    }).then(() => {
        return sql.close()
    })
})

router.post('/path', (req, res) => {
    const { SEQ, WCEN, MACO } = req.body
    console.log(req.body)
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            const { SEQ, WCEN, MACO } = req.body
            const path = 'public/images/'+WCEN
            //fs.existsSync(path)
            fs.mkdirSync(path, { recursive: true })
            cb(null, path)
        },
        /*
        filename: function (req, file, cb) {
            var mimeType;
    
            switch (file.mimetype) {
            case "image/jpeg":
                mimeType = "jpg";
            break;
            case "image/png":
                mimeType = "png";
            break;
            case "image/gif":
                mimeType = "gif";
            break;
            case "image/bmp":
                mimeType = "bmp";
            break;
            default:
                mimeType = "jpg";
            break;
            }
            console.log(file)
          //cb(null, file.originalname+"."+mimeType)
          //cb(null, file.filename+"."+mimeType)
          
        }
        */
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
        }   
    })

    res.status(204).send()
});
/*
var storage

router.post('/path', (req, res) => {
    const { SEQ, WCEN, MACO } = req.body
    console.log(req.body)
    res.status(204).send(req.body)
});


var upload = multer({ storage: storage })

router.post('/upload', upload.single('Image') ,(req, res) => {
    console.log(req.body)
    //console.log(req.file)
    res.status(204).send()
 });
*/
/** 
var upload = multer({ storage: storage })

router.post('/upload', upload.single('Image') ,(req, res) => {
    console.log(req.file)
    //console.log(req.file)
    res.status(204).send()
 });
**/
 

router.post('/upload/:SEQ/:WCEN/:MACO',function (req, res, next) {
    //const now = new Date(Date.now()).toLocaleString().slice(0,23);
    //const { SEQ,WCEN,MACO } = req.body
    //console.log(req.body)
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
                console.log(req.params)
                //const { SEQ,WCEN,MACO } = req.body
                //const WCEN = req.params.WCEN
                const path = `public/images/${req.params.WCEN}`+'/'+req.params.MACO
                //console.log(path)
                //fs.existsSync(path)
                fs.mkdirSync(path, { recursive: true })
                cb(null, path)
            },
            /*
            filename: function (req, file, cb) {
                var mimeType;

                switch (file.mimetype) {
                case "image/jpeg":
                    mimeType = "jpg";
                break;
                case "image/png":
                    mimeType = "png";
                break;
                case "image/gif":
                    mimeType = "gif";
                break;
                case "image/bmp":
                    mimeType = "bmp";
                break;
                default:
                    mimeType = "jpg";
                break;
                }
                console.log(file)
            //cb(null, file.originalname+"."+mimeType)
            //cb(null, file.filename+"."+mimeType)
            
            }
           */
           filename: function (req, file, cb) {
            cb(null, req.params.SEQ)
        }   
        
    })

    var upload = multer({ storage: storage }).single('Image')

    upload(req,res,function(err) {
        //console.log(req.body)
        if(err) {
            //return handleError(err, res);
            return console.log(err)
        }
        console.log("done upload---")
        //res.json({"status":"completed"});
        res.status(204).send()
    });
//console.log(req.body)
//console.log(req.file)
//res.status(204).send()
});

module.exports = router;