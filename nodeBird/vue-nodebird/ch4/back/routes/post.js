const express = require("express");
const multer = require('multer')
const db = require('../models')
const {isLoggedIn} = require("./middlewares");
const router = express.Router()
const path = require('path')

const upload = multer({
   storage : multer.diskStorage({
        destination(req,file,done){
            done(null,'uploads')
        },
       filename(req,file,done){
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename+Date.now()+ext);
       }
   }),
   limit: {fileSize: 20*1024*1024},
});

router.post('/',isLoggedIn, async (req,res,next)=>{
    try{
        // req.body.content,
        //     req.body.imagePaths,
        //
            const hashtags = req.body.content.match(/#[^\s#]+/g);
            const newPost = await db.Post.create({
                content:req.body.content,
                UserId:req.user.id,

            })
            if(hashtags){
                const result = await Promise.all(hashtags.map(tag=>db.Hashtag.findOrCreate({
                    where:{name:tag.slice(1).toLowerCase()}
                })));
                await newPost.addHashtags(result.map(r=>r[0]));

            }
            /*
                시퀄라이저에서
                    add(추가)
                    get(조회)
                    set(수정)
                    remove(제거) 가 모델명 붙인 메소드가 생긴다

                너무 남용하면 안됩니다. 시퀄라이저가 처리 못하느 경우도 있음
                db.sequelize.query()로 네이티브 쿼리도 던질 수 있다.
             */


        const fullPost = await db.Post.findOne({
            where:{ id: newPost.id },
            include:[{
                model : db.User,
                attributes:["id","nickname"],
            }]
        })
        return res.json(fullPost)
    }catch(err){
        console.error(err);
        next(err)
    }
})

router.post('/images',isLoggedIn, upload.array('image'),(req,res)=>{
        /*
                upload. single() : 파일 하나
                      . array() : 같은 키로 여러 개
                      . fields() : 다른 키로 여러 개
                      . none() : 파일 업로드X
         */
    // req.files = []; //ex) [{filename:'웃는얼굴.png'},{filename:'~~.png'})
    console.log(req.files)
    res.json(req.files.map(v=>v.filename));

})

module.exports = router;