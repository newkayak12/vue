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
const usersRouter = require('./routes/user')
const postRouter = require("./routes/post")
const postsRouter = require("./routes/posts")

db.sequelize.sync({});
passportConfig();


//////////////////////////////////////
app.use(morgan('dev'))
app.use(cors({
    origin:'http://localhost:3080',
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use는 request/response를 조작한다 >> 미들웨어
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:'cookiesecret'
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cookie())
app.use('/user', usersRouter)
app.use('/post', postRouter)
app.use('/posts',postsRouter)

app.use('/',express.static('uploads'))
//프론트에서 접근할 주소 , 실제 주소
// '/'에서 가져올 수 있게 해줌 >> 프론트에서 백엔드의 내부 구조를 볼 수 없게

//////////////////////////////////////




app.listen(3085, ()=>{
    console.log(`백엔드 서버 ${3085}번을 사용중입니다.
    `)
})