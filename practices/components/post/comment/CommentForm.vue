<template>
     <div>
          <form @submit.prevent="onSubmitCommentForm">
               <div>
                    <input type="text" v-model="commentContent" maxlength="200">
               </div>
               <div>
                    <v-btn style="background-color: royalblue; color: white" @click="onSubmitCommentForm">댓글 작성</v-btn>
               </div>
          </form>
     </div>
</template>

<script>
export default {
     props:{
          postsPieceId:{
               type:Number,
               required:true

          },
     },
     data(){
          return{
               commentWriter:this.$store.state.user.user.userInfo.nickname,
               commentContent:'',
               commentWrittenDate:new Date()
          }
     },
     computed:{

     },
     methods:{
          onSubmitCommentForm(){

               let postComment = {
                    postId : this.postsPieceId,
                    postCommentId: Math.ceil(Math.random()*100000)+30,
                    writer : this.commentWriter,
                    content : this.commentContent.trim(),
                    writtenDate : this.commentWrittenDate
               }


               this.$store.dispatch('posts/post/writeComment', postComment)
               this.commentContent = ''
               delete postComment.postId
          }
     }
}
</script>

<style scoped>
     form{
          display: flex;

     }
     form div:nth-child(1){
          display: inline-block;
          width: 90%;
          margin: 5px;

     }
     form div:nth-child(2){
          display: inline-block;
          width: 10%;
          margin: 5px;
     }
     form input{
          padding: 5px 15px 5px 15px;
          width: 100%;
          height: 100%;
          box-shadow: 1px 1px gray;
     }
     form div:nth-child(2) button{
          width: 100%;
          background-color: royalblue;
          color: white;
     }
</style>