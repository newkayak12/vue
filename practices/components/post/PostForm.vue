<template>
     <v-card>
          <form @submit.prevent="onSubmitPost">
               <div style="width: 99%; padding:10px; margin:5px">
                    <span>
                         <h3 style="display: inline-block">
                              제목 :
                         </h3>
                    </span>
                    <span>
                         <input type="text" v-model="postTitle" style="padding:5px; box-shadow: 1px 1px gray; width: 95%" maxlength="30" required>
                    </span>
               </div>
               <div  style="width: 99%; padding:10px; margin:5px">
                    <textarea v-model="postContent" cols="25" rows="8" style="padding:5px; box-shadow: 1px 1px gray; width: 99%" required ></textarea>
               </div>
               <div style="width: 99%; padding:10px; margin:5px" v-if="showImg">
                    <Img v-for="imgPiece in photo" :key="imgPiece.idx" :photo="photo" :imgPiece="imgPiece" />
               </div>
               <div  style="width: 99%; padding:10px; margin:5px; display: flex; justify-content: space-between">
                    <v-btn type="button" @click="onAddPhoto"> 파일 첨부</v-btn>
                    <input type="file" multiple ref="postPhoto" @change="onAddedPhoto" hidden>
                    <div style="padding: 5px">
                         <slot name="cancelbtn"></slot>
                         <v-btn type="submit" style="background: royalblue; color : white;"> 등록 </v-btn>
                    </div>
               </div>
          </form>
     </v-card>
</template>

<script>
import Img from "@/components/board/Img";
export default {
     props:{
          postsPiece:{
               type:Object,
               required:false
          },
          onShowPostForm:{
               type:Function,
               required: false
          }
     },
     components:{
          Img
     },
     data(){
          return{
               showImg:false,
               postId:'',
               postTitle:'',
               postWriter:'',
               postWrittenDate:new Date(),
               postContent:'',
               photo:[],
               reply:[],
               rt:null

          }
     },
     computed:{
     },
     beforeMount() {

          if(typeof this.postsPiece !=='undefined' && this.postsPiece!==null){
               this.postId = this.postsPiece.postId
               this.postTitle = this.postsPiece.title
               this.postWriter = this.postsPiece.writer
               this.postWrittenDate= this.postsPiece.writtenDate
               this.postContent = this.postsPiece.content
               this.photo = this.postsPiece.photo.slice()
               this.reply = this.postsPiece.reply
               this.showImg = this.photo.length>0? true : false;
          }
     },
     methods:{
          onSubmitPost(){
               let post ={}

               post.title = this.postTitle.trim()
               post.writer = this.$store.state.user.user.userInfo.nickname;
               post.writtenDate = this.postWrittenDate
               post.content = this.postContent.trim()
               post.iLiked = false;
               post.rt = null;
               let photoCopy = this.photo.slice()
               photoCopy.forEach((v,i)=>{
                    delete v.idx
                    delete v.preview
               })
               post.photo = photoCopy
               post.reply = this.reply


               if(this.postId===''){
                    post.postId = Math.ceil(Math.random()*3000+1)
                    this.$store.dispatch("posts/post/writePost", post)
                    return
               }
               if(this.postId!==''){
                    post.postId = this.postId
                    this.$store.dispatch('posts/post/modifyPost',post)
                    this.onShowPostForm()
                    return
               }






               //비워주기
               this.postTitle = ''
               this.postContent=''
               this.photo =[]




          },
          onAddPhoto(){
               this.$refs.postPhoto.click();
          },
          onAddedPhoto(){
               let files = this.$refs.postPhoto.files
               if(files["length"]+this.photo.length>2){
                    alert("이미지는 2개까지 가능합니다.")
                    return
               }

               Array.prototype.forEach.call(files,(v,i)=>{
                    let fileReader = new FileReader();
                    let img = {
                         idx: Math.ceil(Math.random()*10000+20),
                         src:v.name
                    }

                    fileReader.onload = function(e){
                         img.preview = e.target.result
                    }

                    fileReader.readAsDataURL(v)

                    this.photo.push(img)
               })

               this.showImg = false;
               let timer = setTimeout(()=>{
                    this.showImg=true;
               },10)
               console.log(this.photo)
          }
     }
}
</script>

<style scoped>

</style>