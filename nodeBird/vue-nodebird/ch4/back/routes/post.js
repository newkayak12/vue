const express = require("express");
const multer = require('multer')
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

router.post('/',isLoggedIn, (req,res)=>{

})

router.post('/images',isLoggedIn, upload.array('image'),(req,res)=>{
        /*
                upload. single() : 파일 하나
                      . array() : 같은 키로 여러 개
                      . fields() : 다른 키로 여러 개
                      . none() : 파일 업로드X
         */
    req.files = [];
})

module.exports = router;