const express = require('express');
const db = require("../models");
const passport = require("passport");
const bcrypt = require('bcrypt');
const {isNotLoggedIn, isLoggedIn} = require("./middlewares");

const router = express.Router();




router.get('/', isLoggedIn, async (req,res,next)=>{
    console.log("isLoggedIn?")
    const user = req.user;
    res.json(user);
})

router.post('/', isNotLoggedIn, async (req,res,next)=>{
    //회원 가입
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
         await db.User.create({

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



                const fullUser = await db.User.findOne({
                    where: { id: user.id },
                    attributes: ['id', 'email', 'nickname'],
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
                return res.json(fullUser);
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

        return req.login(user, async (err)=>{
            //세션에 사용자 정보 저장 >> 어떻게?? serializeUser
            //쿠키는 헤더에 심어져서 사용자에게 내려보내진다 .

            if(err) {
                console.error(err);
                return next(err)
            }

            const fullUser = await db.User.findOne({
                where: { id: user.id },
                attributes: ['id', 'email', 'nickname'],
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
            console.log("LOGIN")
            console.log(fullUser)
            return res.json(fullUser)
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





///follow
router.post('/:id/follow',isLoggedIn, async (req,res,next)=>{
    try{
        const me = await db.User.findOne({
            where:{id:req.user.id},
        });
        await me.addFollowing(req.params.id);
        res.send(req.params.id);
    }catch (e) {
       console.error(e)
        next(e)
    }
})
router.delete('/:id/follow', isLoggedIn, async (req,res,next)=>{
    try{
        const me = await db.User.findOne({
            where:{id:req.user.id},
        });
        await me.removeFollowing(req.params.id);
        res.send(req.params.id);

    }catch (e) {
        console.error(e)
        next(e)
    }
})
router.patch('/nickname', isLoggedIn, async (req,res,next)=>{
    try{
        await db.User.update({
            nickname:req.body.nickname,
        },{
            where:{id:req.user.id},
        });
        res.send(req.body.nickname);
    }catch (e){
        console.error(e);
        next(e)
    }
})

router.get('/:id/followings', isLoggedIn, async(req,res,next)=>{
        try{
            const user = await db.User.findOne({
                where:{
                    id: req.user.id
                }
            });
            const followings = await user.getFollowings({
                attributes:['id','nickname'],
                limit:parseInt(req.query.limit || 3, 10),
                offset:parseInt(req.query.offset || 0, 10)

            })
            res.json(followings)
        } catch (e){
            console.error(e)
            next(e)
        }
})

router.get('/:id/followers', isLoggedIn, async(req,res,next)=>{
    try{
        const user = await db.User.findOne({ where: { id: req.user.id }});
        if (!user) {
            res.status(403).send('없는 사람을 찾으려고 하시네요?');
        }
        const followers = await user.getFollowers({
            attributes:['id','nickname'],
            limit:parseInt(req.query.limit ||3, 10),
            offset:parseInt(req.query.offset || 0, 10)

        });
        res.status(200).json(followers);
    }catch (e){
        console.error(e);
        next(e)
    }

}),
    router.delete('/:id/follower', isLoggedIn,  async(req, res, next)=>{
        try{
            const me = await db.User.findOne({
                where:{id: req.user.id},
            })

            await me.removeFollower(req.params.id)
            res.send(req.params.id)
        }catch(e){
            console.error(e)
        }
    })
module.exports=router;