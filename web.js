//필요한 모듈 선언
var express = require('express');
var cors = require('cors');
var http = require('http');
const hostname='192.168.56.17';

var bodyParser  = require('body-parser');
const jwt = require('jsonwebtoken');

// module.exports = () => {
//   const torage = multer.diskStorage({
//     desination : (req, file, cb) => {
//       cb(null,'./public/images/');
//     },
//     filename : (req, file, cb) => {
//       const originalFileName = file.originalname.split('.');
//       let fileName = 'none';
//       if(originalFileName.length > 0){
//         fileName = `${originalFileName[0]}-${Date.now()}.${originalFileName[1]}`;
//       }
//       cb(null, fileName);
//     }
//   })
// }

var app = express();

let d2simesconfig = {
    user: 'sa',
    password: 'Mic_7126',
    server: '192.168.56.23',
    database: 'DABOM41_MYUNGHWA',
    options: {
        enableArithAbort: true,
        encrypt: false
      },
}
global.d2simesconfig=d2simesconfig;

let d2hqmsconfig = {
    user: 'sa',
    password: 'Mic_7126',
    server: '192.168.56.23',
    database: 'HQMS',
    options: {
        enableArithAbort: true,
        encrypt: false
      },
}
global.d2hqmsconfig=d2hqmsconfig;

let gwconfig = {
    user: 'sa',
    password: 'mic953(%#',
    server: '192.0.1.242',
    database: 'WO2016',
    options: {
        enableArithAbort: true,
        encrypt: false
      },
}
global.gwconfig=gwconfig;

//app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true);
app.use(express.json());


// CORS 설정
app.use(cors());
//express 서버 포트 설정(cafe24 호스팅 서버는 8001 포트 사용)
app.set('port', process.env.PORT || 4000);

//html 템플릿 엔진 ejs 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//서버 생성
http.createServer(app).listen(app.get('port'),function(){
    console.log('Express server listening on port ' + app.get('port'));
});

//라우팅 모듈 선언
var indexRouter = require('./routes/index');

//app.use('/api', require('./routes/api'))



app.use('/api/sign', require('./routes/api/sign/token'));    //jsonwebtoken
app.use('/api/manage', require('./routes/api/manage/usermanage'));
app.use('/api/auth', require('./routes/api/manage/authmanage'));
app.use('/api/manage/item', require('./routes/api/manage/itemmanage'));

/*
const verifyToken = (t) => {
    return new Promise((resolve, reject) => {
      jwt.verify(t, '어려운키', (err, v) => {
        if (err) reject(err)
        resolve(v)
      })
    })
  }
app.all('*', function(req, res, next) {
    // 토큰 검사
    const token = req.headers.authorization
    verifyToken(token)
      .then(v => {
        console.log(v) //로그에 id,pwd,iat 띄움
        next()
      })
      .catch(e => res.send({ success: false, msg: e.message }))  
  });
*/

app.use('/api/line', require('./routes/api/master/getLineMaster'));    //기준정보/라인마스터
app.use('/api/inspection', require('./routes/api/inspection/getLineTargetList'));    //기준정보/라인마스터
app.use('/api/inspection/target', require('./routes/api/inspection/getInspectionTargetList'));    //순회검사/조회,수정-검사대상spc기준정보
app.use('/api/inspection/todo', require('./routes/api/inspection/getInspectionSheetDo'));
app.use('/api/dashboard', require('./routes/api/dashboard/dashboard'));
app.use('/api/approval', require('./routes/api/approval/approval'));

app.use(express.static('public'));


