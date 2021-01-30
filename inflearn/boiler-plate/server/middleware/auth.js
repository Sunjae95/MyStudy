const { User } = require("../config/models/user");

let auth = (req, res, next) => {    //인증 처리
    // 1.클라이언트에서 토큰을 가져옴
    let token = req.cookies.user;
    
    // 2.토큰을 복호화 후 유저를 찾음
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true });
        
        //다음 단계에서 token과 user를 사용하기 위해
        req.token = token;
        req.user = user;
        next();
    });
    // 3-1. 유저가 있으면 인증
    // 3-2. 유저가 없으면 인증x
}

module.exports = { auth };