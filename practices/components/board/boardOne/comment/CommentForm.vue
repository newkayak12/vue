<template>
     <div style="margin: 10px">
          <div>
               <form @submit.prevent="onWriteComment" style="padding: 0px; box-sizing: border-box; display: flex">
                    <textarea style="box-shadow: 1px 1px 1px 1px gray; border-radius: 1%; height: 100px; width: 90%; padding: 10px" v-model="commentContent"></textarea>
                    <v-btn  style="height:100px; width: 10%; background: royalblue; color: white" type="submit">글쓰기</v-btn>
               </form>
          </div>
     </div>
</template>

<script>
export default {
     props:{
          level:{
               type:Number,
               require:true
          },
          refId:{
               type:Number,
               require:true
          },
          boardId:{
               type:Number,
               require:true
          },
          onWriteReply:{
               type:Function,
               require:false
          }
     },
     data(){
       return{
            commentContent:'',
       }
     },
     computed:{

     },
     methods:{
          async onWriteComment(){
              let user =  this.$store.state.user.user.userInfo;
              let level = this.level;
              let comment = this.commentContent.trim();
              let date = new Date();
              let boardId = this.boardId;
              let refId = parseInt(level)===1? -1:this.refId

               if(user===null){
                    alert("로그인이 필요합니다.")
                    return
               }
               delete user.lastLoggedIn;
               delete user.follower;
               delete user.following;
               delete user.posts


               await this.$store.dispatch('comment/comment/writeComment',{
                    boardId: boardId,
                    userInfo : user,
                    commentContent:comment,
                    level : level,
                    writtenDate : date,
                    refId :refId,
               })
                .then((res)=>{
                    this.commentContent=''

                     if(typeof this.onWriteReply =="function"){
                         this.onWriteReply()
                     }
                })
               .catch((error)=>{
                    console.error(error)
               })




          }
     }


}
</script>

<style scoped>

</style>