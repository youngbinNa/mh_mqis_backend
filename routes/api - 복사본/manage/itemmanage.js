var router = require('express').Router();
var sql = require('mssql');
const multer = require('multer');

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
    var txt = 'SELECT INDEX_KEY,WCEN,MACO,PSNO,PSNM,MANM,NAM1,NAM2,SCGU,COND,CKCD,JGCD,REM1'
    txt=txt+' ,CENT,LCLQ,UCLQ,UNIT,DECI,REG_DATE'
    txt=txt+' FROM dbo.TB_PATROL_SPC_TARGET_INSPECTION_MASTER'

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
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/')
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
})
var upload = multer({ storage: storage })

router.post('/upload', upload.single('Image') ,(req, res) => {
    //console.log(req.body)
    console.log(req.file)
    res.status(204).send()
 });

module.exports = router;