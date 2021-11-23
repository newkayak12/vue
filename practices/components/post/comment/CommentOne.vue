<template>
     <v-card style="display: flex; margin: 10px; padding: 10px;">
          <div>{{commentOne.content}}</div>
          <div>{{commentOne.writer}}</div>
          <div>{{dateDiff}}</div>
          <div>
               <v-icon style="color: royalblue" v-if="amILoggedin&&isThisMe" @click="deleteComment">
                    mdi-close-box
               </v-icon>
          </div>
     </v-card>
</template>

<script>
function getDiff(first, second){
     let diff = Math.ceil((second-first)/(1000*60*60*24))
     let date = first.toLocaleString()
     return diff===1? date.substring(0, date.indexOf(date.substr(-12,3))): `${diff} 일 전`;
}
export default {
     props:{
          commentOne:{
               type:Object,
               required:false
          }
     },
     data(){
          return{}
     },
     computed:{
          dateDiff(){
               return getDiff(this.commentOne.writtenDate, new Date())
          },
          isThisMe(){
               return this.$store.state.user.user.userInfo.nickname.toLowerCase()===this.commentOne.writer.toLowerCase()? true:false
          },
          amILoggedin() {
               return this.$store.state.user.user.userInfo!==null? true:false;
          }
     },
     methods:{
          deleteComment(){
               if(confirm('댓글을 삭제합니까?')){
                    this.$store.dispatch('posts/post/deleteComment',this.commentOne.postCommentId)
               } else {

               }
          }

     }
}
</script>

<style scoped>
.v-card{
     text-align: center;
}
.v-card> div:nth-child(1){
     padding:10px;
     width: 77%;
}
.v-card> div:nth-child(2){
     font-size: 12px;
     padding:5px;
     width: 10%;
}
.v-card> div:nth-child(3){
     font-size: 12px;
     padding:5px;
     width: 10%;
}
.v-card> div:nth-child(4){
     width: 3%;
}


</style>