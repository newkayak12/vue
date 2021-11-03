const express = require('express');
const cors = require('cors')
const db = require('./models')
const app = express();


db.sequelize.sync();
app.use(cors({
    orgin:'http://localhost:3000',
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use는 request/response를 조작한다 >> 미들웨어



app.get('/', (req, res,next)=>{
    res.status(200).send('안녕 시퀄라이저')
})
app.post('/user', async (req,res,next)=>{
    console.log(req.body.email+"ss")
    try{
        const newUser = await db.User.create({

            // where:{
                email: req.body.email,
                password: req.body.password,
                nickname :req.body.nickname,
            // },
        });
        res.status(201).json(newUser)
        //send:문자열 /json
    }catch(err){
        console.log(err)
        next(err)
    }

})

app.listen(3085, ()=>{
    console.log(`백엔드 서버 ${3085}번을 사용중입니다.
    `)
})