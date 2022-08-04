//필요한 모듈 선언
var express = require('express');
var cors = require('cors');
var http = require('http');
const hostname='192.168.56.17';

var bodyParser  = require('body-parser');
const jwt = require('jsonwebtoken');


var app = express();


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


app.use('/api/line', require('./routes/api/master/getLineMaster'));    //기준정보/라인마스터
app.use('/api/inspection', require('./routes/api/inspection/getLineTargetList'));    //기준정보/라인마스터
app.use('/api/inspection/target', require('./routes/api/inspection/getInspectionTargetList'));    //순회검사/조회,수정-검사대상spc기준정보
app.use('/api/inspection/todo', require('./routes/api/inspection/getInspectionSheetDo'));
app.use('/api/dashboard', require('./routes/api/dashboard/dashboard'));
app.use('/api/approval', require('./routes/api/approval/approval'));

app.use(express.static('public'));


