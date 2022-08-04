var router = require('express').Router();
var sql = require('mssql');
/*
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

router.use('/api/line', require('./routes/api/master/getLineMaster'));    //기준정보/라인마스터

router.use('/api/inspection', require('./routes/api/inspection/getLineTargetList'));    //기준정보/라인마스터

router.use('/api/inspection/target', require('./routes/api/inspection/getInspectionTargetList'));    //순회검사/조회,수정-검사대상spc기준정보
*/
router.get('/', function (req, res, next) {  
    
  sql.on('error', err => {
      // ... error handler
      console.log(err)
  })

  sql.connect(d2hqmsconfig).then(pool => {

      // Stored procedure
      //const txt= "'%명화공업%'"
      return pool.request()
      //.input('pCPID', sql.Numeric ([20], [0]),req.params.pCPID)
      //.input('pWORK_DATE', sql.NVarChar(20),req.params.pWORK_DATE)
      //.input('pTIME_ZONE_ID', sql.NVarChar(20),req.params.pTIME_ZONE_ID)
      
      .query('select id,name,parent FROM TB_PATROL_GW_ORGAN')

  }).then(result => {
      //console.log(result.recordset)
      var root = arrayToTree(result.recordset, {
          parentProperty: 'parent',
          customID: 'id'
        });
        //console.log(root) 
      res.send(root);
  }).catch(err => {
      // ... error checks
      console.log(err)
  }).then(() => {
      return sql.close()
    })
});

router.post('/', function(req, res, next) {  
  const { name } = req.body
  Page.findOne({ name })
    .then((r) => {
      if (!r) {
        if (req.user.lv) throw new Error(`페이지 ${name} 생성이 안되었습니다.`) // req.user.lv > 0
        return Page.create({ name })
      }
      if (r.lv < req.user.lv) throw new Error(`페이지 ${name} 이용 자격이 없습니다.`)
      return Page.updateOne({ _id: r._id }, { $inc: { inCnt: 1 } })
    })
    .then(() => {
    //   return Page.find()
    // })
    // .then((rs) => {
    //   console.log(rs)
      res.send({ success: true, d: req.user })
    })
    .catch((e) => {
      res.send({ success: false, msg: e.message })
    })
});

//router.all('*', function(req, res, next) {
 // next(createError(404, '그런 api 없어'));
//});
 
module.exports = router;