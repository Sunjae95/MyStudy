const express = require('express'); //express 모듈을 가져옴
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');

const { User } = require('./models/user');
const { auth } = require('./middleware/auth');
app.use(bodyParser.urlencoded({extended: true}));   //application/x-www-form-urlencoded 처럼 된 것을 분석하여 가져와줌
app.use(bodyParser.json());   //applicatoin/json 으로 된것을 분석해서 가져와주게 도와주는것
app.use(cookieParser());

const mongooose = require('mongoose');

//mongoDB 연결
mongooose.connect(config.mongoURI, {
  //에러를 안뜨게 하려고 사용함
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => console.log('mongo DB connected!!'))
.catch((err) => console.log('mongo DB not connected: '+ err ));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/hello', (req, res) => {
  res.send('Hello World~');
})

app.post('/api/users/register', (req, res) => {
  //회원 가입시 필요한 정보들을 client에서 가져오면 
  //그것을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err});
    return res.status(200).json({ success: true });
  });    //mongoDB method
});

app.post('/api/users/login', (req, res) => {
  //1. 요청된 이메일 데이터베이스에 있는지 찾기
  User.findOne({ email: req.body.email }, (err, user) => {    //mongo DB method
    if(!user) {  //해당 유저가 없다면
      return res.json({
        loginSuccess: false,
        message: "유저가 없음",
      });
    } else {   //요청된 이메일이 맞다면 데이터베이스에서 비밀번호 같은지 확인
      user.comparePassword(req.body.password, (err, isMatch) => {   //req.body.password = password / (err, isMatch) => {} = cb
      if(!isMatch)
      return res.json({ loginSuccess: false, message: "비밀번호 틀림"});
      
      //비밀번호까지 맞다면 token 생성
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);
        //토큰을 (쿠키, 로컬스토리지 등)저장 여기서는 쿠키에서 함
        res.cookie('user', user.token)
        .status(200)
        .json({ 
          loginSuccess: true,
          userId: user._id
        });
      });
    });
  }
});
});

app.get('/api/users/auth', auth, (req, res) => {
  //여기가 실행되는것은 authentication ture임
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,  //관리자인지 확인
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,   
  })
});

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "" },
    (err, user) => {
      if(err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      }); 
    });
  });

const port = 5000;  //port는 아무거나 해도 상관없음
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});