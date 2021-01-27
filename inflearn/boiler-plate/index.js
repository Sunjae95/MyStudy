const express = require('express'); //express 모듈을 가져옴
const app = express();
const port = 3000;  //port는 아무거나 해도 상관없음
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/user');

app.use(bodyParser.urlencoded({extended: true}));   //application/x-www-form-urlencoded 처럼 된 것을 분석하여 가져와줌
app.use(bodyParser.json());   //applicatoin/json 으로 된것을 분석해서 가져와주게 도와주는것

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

app.post('/register', (req, res) => {
  //회원 가입시 필요한 정보들을 client에서 가져오면 
  //그것을 데이터베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err});
    return res.status(200).json({ success: true });
  });    //mongoDB method
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});