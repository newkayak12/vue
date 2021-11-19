<template>
     <div style="margin: 0px; padding: 0px; display: flex; flex-direction: column;" :style="commentCss">
        <v-card style="margin: 10px; padding:20px; display: flex;" :style="commentsCss2" >
             <span v-if="parseInt(commentOne.level)===1" style="padding-left: 15px; color: royalblue" class="v-icon notranslate mdi  mdi-comment-multiple-outline theme--light" @click="onWriteReplies"/>
             <span v-if="parseInt(commentOne.level)!==1" style="padding-left: 15px; color: royalblue" class="v-icon notranslate mdi  mdi-arrow-right-bold-circle theme--light" />
             <span :style="commentsCss3">{{commentOne.commentContent}}</span>
             <span style="width: 8%; font-size: 10px" >{{commentOne.commentWriter}}</span>
             <span style="width: 12%; font-size: 10px" >{{days}}</span>
             <span style="width: 5px; padding:10px; padding-right: 20px;" @click="onDeleteComment" v-show="isMe">
                  <v-icon>
                       mdi-close-box-outline
                  </v-icon>
             </span>
<!--              mdi-reply -->
        </v-card>
          <div v-if="cocoment">
               <CommentForm :level="2" :refId="commentOne.commentId"  :boardId="commentOne.boardId" :onWriteReply="cocomentOff" />
          </div>

     </div>
</template>




<script>
import CommentForm from "@/components/board/boardOne/comment/CommentForm";
function getDiff(first, second){
     let diff = Math.ceil((second-first)/(1000*60*60*24))
     let date = first.toLocaleString()
     return diff===1? date.substring(0, date.indexOf(date.substr(-12,3))): `${diff} 일 전`;
}
export default {
     data(){
       return{
            cocoment:false,

       }

     },
     components:{
       CommentForm
     },
     props:{
          commentOne:{
               type:Object,
               required:true,
          }
     },
     computed:{
          days(){
               let date = new Date(this.commentOne.writtenDate)
               let today = new Date()

               return getDiff(date,today);
          },
          commentCss(){
               if(parseInt(this.commentOne.level)===1){
                   return
               }
               return 'align-items : flex-end';
          },
          commentsCss2(){
               if(parseInt(this.commentOne.level)===1){
                    return
               }
               return 'width:60vw';
          },commentsCss3(){
               if(parseInt(this.commentOne.level)===1){
                    return 'width:80%'
               }
               return 'width:70%';
          },
          isMe(){
               let loginCheck = (this.$store.state.user.user.userInfo!==null)? true:false;
               if(!loginCheck){
                    return false;
               }
               let isItMine = (this.commentOne.commentWriter===this.$store.state.user.user.userInfo.nickname)? true:false
               return loginCheck&&isItMine


          }

     },
     methods:{
          onWriteReplies(){
               if(this.cocoment){
                    this.cocoment = false;
                    return;
               }
               this.cocoment = true;
          },
          cocomentOff(){
               this.cocoment=false
          },
          onDeleteComment(){
               this.$store.dispatch('comment/comment/deleteComment',this.commentOne.commentId)


          }
     }
}
</script>



<style scoped>
     div span{
          padding:10px;
          text-align: center;
     }
</style>