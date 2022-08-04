var router = require('express').Router();
const jwt = require('jsonwebtoken');

//router.use('/api/sign', require('./routes/api/sign/token'));    //jsonwebtoken
router.use('/sign', require('./sign'))


const verifyToken = (t) => {
  return new Promise((resolve, reject) => {
    jwt.verify(t, '어려운키', (err, v) => {
      if (err) reject(err)
      resolve(v)
    })
  })
}
router.all('*', function(req, res, next) {
  // 토큰 검사
  const token = req.headers.authorization
  verifyToken(token)
    .then(v => {
      console.log(v)
      next()
    })
    .catch(e => res.send({ success: false, msg: e.message }))  
});
//request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
//app.use('/', indexRouter);

//마스터

router.use('/api/page', require('./routes/api/page/pagecheck')); 

router.use('/api/line', require('./routes/api/master/getLineMaster'));    //기준정보/라인마스터

router.use('/api/inspection', require('./routes/api/inspection/getLineTargetList'));    //기준정보/라인마스터

router.use('/api/inspection/target', require('./routes/api/inspection/getInspectionTargetList'));    //순회검사/조회,수정-검사대상spc기준정보


 


module.exports = router;