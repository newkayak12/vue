const passport = require('passport');
const db = require("../models")
const local = require('./local')

module.exports=()=>{
    passport.serializeUser((user, done)=>{
        return done(null, user.id);
    })

    passport.deserializeUser(async(id,done)=>{
        try {
            const user = await db.User.findOne({
                where: { id },
                attributes: ['id', 'nickname'],
                include: [{
                    model: db.Post,
                    attributes: ['id'],
                }, {
                    model: db.User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: db.User,
                    as: 'Followers',
                    attributes: ['id'],
                }],
            });
            // 이 부분을 redis로 바꿔주면 된다.
            // deserializeUser는 페이지 이동마다 여기에 오고
            // 그러면 결국 DB에 계속 접속하니까 캐싱으로 극복한다 .
            return done(null,user);
        } catch(err){
            return done(err)
        }
    })
    local();
}