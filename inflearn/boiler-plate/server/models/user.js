const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRound = 10;   //salt를 이용해서 비밀번호를 암호화시킨다

const userSchema = mongoose.Schema({    //스키마 정의
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

//arrow함수는 this를 바인딩을 못함 그렇기에 여기서는 function으로함 ES5문법
userSchema.pre('save', function (next) {  //mongoDB method ''하기전에 pre실행 후 next함수로 넘김
    var user = this;        
    
    if(user.isModified('password')){    //비밀번호 바꿀시 암호화
        bcrypt.genSalt(saltRound, function (err, salt) {
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hash) {
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else {    //바꾸지않는다면 next 만약 이게 없으면 if문에서 계속 머물것임
        next();
    }
});

userSchema.methods.comparePassword = function(password, cb){
    //password => 암호화
    bcrypt.compare(password, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    });
}

userSchema.methods.generateToken = function(cb){
    var user = this;
    const token = jwt.sign(user._id.toHexString(), 'secretToken');
    
    user.token = token;
    user.save(function(err, user){
       if(err) return cb(err); 
       cb(null, user);
   });   
}

userSchema.statics.findByToken = function(token, cb) {  //statics를 사용하면 객체를 안만들고 바로 사용가능
    var user = this;
    // token decode (jwt method)
    jwt.verify(token, 'secretToken', function(err, decoded) {
        if(err) return cb(err);
        //유저 아이디를 이용해 유저 찾기
        // 클라이언트 token 과 DB token이 같은지 비교
        user.findOne({ "_id": decoded, "token": token }, function(err, user) {
            if(err) return cb(err);
            cb(null, user);
        });
    })
}
//모델 정의
const User = mongoose.model('User', userSchema);
//모델 모듈화
module.exports = { User } ;
