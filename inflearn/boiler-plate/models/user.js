const mongoose = require('mongoose');

//스키마 정의
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
      type: String,
      trim: true,   //빈칸이 있더라도 없애줌 ex) Hel lo => Hello  
    },
    password: {
      type: String,
      minlength: 5, //최소자리 5이상
    },
    lastname: {
        type: String,
        maxlength:50
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
});
//모델 정의
const User = mongoose.model('User', userSchema);
//모델 모듈화
module.exports = { User } ;
