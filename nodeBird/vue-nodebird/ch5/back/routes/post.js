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
            console.log("isLoggedIn")
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

        if(req.body.image){
            if(Array.isArray(req.body.image)){
                const images = await Promise.all(req.body.image.map((image)=>{
                    return db.Image.create({src:image, PostId:newPost.id})
                    //newPost.addImages(images)
                }))
            } else {
                const image = await db.Image.create({src:req.body.image, PostId: newPost.id})
            }
        }
        const fullPost = await db.Post.findOne({
            where:{ id: newPost.id },
            include:[{
                model : db.User,
                attributes:["id","nickname"],
            },{
                model:db.Image
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

router.get('/:id/comments', async (req,res,next)=>{
    try{
        const post = await db.Post.findOne({where:{id:req.params.id}});
        //:id는 params로 접근 가능
        if(!post){
            return res.status(404).send('포스트가 존재하지 않습니다.')
        }

        const comments = await db.Comment.findAll({
            where:{
                PostId:req.params.id,
            },
            include:[{
                model: db.User,
                attributes: ['id','nickname']
            }],
            order:[['createAt', 'ASC']],//2차원 배열로 하는 이유는 조건이 여러 개 있을 수 있어서
        });
        res.json(comments)
    }catch(err){
        console.error(err);
        next(err)
    }
})


router.post('/:id/comment', isLoggedIn, async (req,res,next)=>{
    //:id == pathVariable
    try{
        const post = await db.Post.findOne({where:{id:req.params.id}});
        //:id는 params로 접근 가능
         if(!post){
             return res.status(404).send('포스트가 존재하지 않습니다.')
         }

         const newComment = await db.Comment.create({
             PostId : post.id,
             UserId : req.user.id,
             content : req.body.content,
         });
         // await post.addComment(newComment.id);

        const comment = await db.Comment.findOne({
            where:{
                id:newComment.id,
            },
            include:[{
                model:db.User,
                attributes:['id', 'nickname'],
            }]
        })

        return res.json(comment)
    }catch(err){
        next(err)
    }

})
//수정
router.delete('/:id',async (req,res,next)=>{
    console.log("delete")
    try{
        await db.Post.destroy({
            where:{
                id:req.params.id,
            }
        })
        res.send('삭제했습니다.')
    }catch(err){
        console.error(err);
        next(err)
    }
})


module.exports = router;