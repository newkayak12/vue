const express = require('express');
const db = require("../models");
const passport = require("passport");
const bcrypt = require('bcrypt');
const {isNotLoggedIn, isLoggedIn} = require("./middlewares");

const router = express.Router();

router.post('/')

module.exports=router;

router.get('/', isLoggedIn, async (req,res,next)=>{
    const user = req.user;
    res.json(user);
})

router.post('/', isNotLoggedIn, async (req,res,next)=>{

    //connect.sid라는 이름으로 쿠키가 심어질 것

    try{
        const hash = await bcrypt.hash(req.body.password, 12)
        const exUser = await db.User.findOne({
            where:{
                email:req.body.email
            }
        });
        if(exUser){
            //이미 회원이 있으면?
            // 반환
            return res.status(403).json({
                errorCode: 1,
                message:"이미 회원 가입 되어있는 아이디입니다. "

            })
        }
        const newUser = await db.User.create({

            // where:{
            email: req.body.email,
            password: hash,
            nickname :req.body.nickname,
            // },
        });
        // return res.status(201).json(newUser)
        //send:문자열 /json

        //>>login
        passport.authenticate('local',(err, user, info)=>{
            if(err){
                console.error(err);
                return next(err);
            }
            if(info){
                return res.status(401).send(info.reason);
            }

            return req.login(user, async (error)=>{
                //세션에 사용자 정보 저장 >> 어떻게?? serializeUser
                //쿠키는 헤더에 심어져서 사용자에게 내려보내진다 .

                if(err) {
                    console.error(err);
                    return next(err)
                }

                return res.json(user)
                //우리가 따로 바디에 데이터를 심어서 내려보낸다.
            })
            //passport initialize에서 미들웨어를 타고 req에 login, logout을 미리 심어줬다.
        })(req,res,next);




    }catch(err){
        console.log(err)
        return next(err)
    }

})

router.post('/login', isNotLoggedIn, (req,res,next)=>{

    //DB에서 찾고
    passport.authenticate('local',(err, user, info)=>{
        if(err){
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }

        return req.login(user, async (error)=>{
            //세션에 사용자 정보 저장 >> 어떻게?? serializeUser
            //쿠키는 헤더에 심어져서 사용자에게 내려보내진다 .

            if(err) {
                console.error(err);
                return next(err)
            }

            return res.json(user)
            //우리가 따로 바디에 데이터를 심어서 내려보낸다.
        })
        //passport initialize에서 미들웨어를 타고 req에 login, logout을 미리 심어줬다.
    })(req,res,next);

    //Session에 저장하고


    //FRONT에 쿠키 심기
})

router.post('/logout', isLoggedIn, (req,res)=>{
        req.logout()
        req.session.destroy(); // 선택사항..
        return res.status(200).send("로그아웃 되었습니다.")
})
