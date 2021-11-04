const passport = require('passport');
const db = require("../models")
const local = require('./local')

module.exports=()=>{
    passport.serializeUser((user, done)=>{
        return done(null, user.id);
    })

    passport.deserializeUser(async(id,done)=>{
        try {
            const user = await db.User.findOne({where: {id}, attributes:['id','nickname']})
            // 이 부분을 redis로 바꿔주면 된다.



            return done(null, user); // req.user에 넣어주고 req.isAuthenticated()를 true로 만들어준다.
            // deserializeUser는 페이지 이동마다 여기에 오고
            // 그러면 결국 DB에 계속 접속하니까 캐싱으로 극복한다 .
        } catch(err){
            console.err(err);
            return done(err)
        }
    })
    local();
}