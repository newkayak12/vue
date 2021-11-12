const express = require('express');
const cors = require('cors')
const db = require('./models')
const passport = require('passport')
const app = express();

//bcrypt
//scrypt 등이 있음
const passportConfig = require('./passport')
const session = require('express-session')
const cookie = require('cookie-parser')
const morgan = require('morgan')
const prod = process.env.NODE_ENV == 'production'
const usersRouter = require('./routes/user')
const postRouter = require("./routes/post")
const postsRouter = require("./routes/posts")
const hashtagRouter = require("./routes/hashtag")
const helmet = require("helmet");
const hpp = require('hpp');
const dotenv = require('dotenv')

dotenv.config()
db.sequelize.sync({});
passportConfig();


//////////////////////////////////////
if(prod){
    app.use(hpp());
    app.use(helmet());
    app.use(morgan('combined'))
    app.use(cors({
        origin:`http://50.18.35.77`,
        credentials:true
    }))
} else {
    app.use(morgan('dev'))

    app.use(cors({
        origin:'http://localhost:3080',
        credentials:true
    }))
}




app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use는 request/response를 조작한다 >> 미들웨어
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
        domain: prod
    }

}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cookie(process.env.COOKIE_SECRET))
app.use('/user', usersRouter)
app.use('/post', postRouter)
app.use('/posts',postsRouter)
app.use('/hashtag',hashtagRouter)

app.use('/',express.static('uploads'))
//프론트에서 접근할 주소 , 실제 주소
// '/'에서 가져올 수 있게 해줌 >> 프론트에서 백엔드의 내부 구조를 볼 수 없게

//////////////////////////////////////




app.listen(prod? process.env.PORT :3085, ()=>{
    console.log(`백엔드 서버 ${prod? process.env.PORT :3085}번을 사용중입니다.
    `)
})