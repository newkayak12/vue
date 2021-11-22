<template>
     <div >
          <v-card-title :style="rt2"  >
               <h4>{{postsPiece.title}}</h4>
               <div v-if="isRt" :style="rt">
                    {{postsPiece.writer}}님의 {{postsPiece.title}}을(를) 리트윗했습니다.
               </div>
          </v-card-title>
          <v-card-subtitle  style="box-shadow: 0.5px 0.5px  gray; width: 100%">
               <span v-if="postsPiece.writer !== this.$store.state.user.user.userInfo.nickname">
                    <v-btn style="background: #da1c54; color: white; width: 75%; font-size: 12px;" @click="onUnfollowing" v-if="areYouInMyFollowList">언팔로우</v-btn>
                    <v-btn style="background: royalblue; color: white; width: 75%; font-size: 12px;" @click="onAddFollowing" v-else>팔로우</v-btn>
               </span>
               <span style="text-align: center; text-overflow: ellipsis; overflow: hidden; padding-top:15px;">
                    작성자 : {{ postsPiece.writer }}
               </span>
               <span style="text-align: center; text-overflow: ellipsis; overflow: hidden; padding-top:15px;">
                    /
               </span>
               <span style="text-align: center; text-overflow: ellipsis; overflow: hidden; padding-top:15px;">
                   작성일 :  {{getDate}}
               </span>
          </v-card-subtitle>
     </div>
</template>

<script>

function getDiff(first, second){
     let diff = Math.ceil((second-first)/(1000*60*60*24))
     let date = first.toLocaleString()
     return diff===1? date.substring(0, date.indexOf(date.substr(-3,3))): `${diff} 일 전`;
}
export default {
     props:{
          postsPiece:{
               type:Object,
               required:false
          },
          isRt:{
               type:Boolean,
               required: false
          }

     },
     computed:{
          getDate(){
               return getDiff(this.postsPiece.writtenDate, new Date());
          },
          rt(){
               return this.isRt?  "font-size: 12px; color:gray;":"";
          },
          rt2(){
               return this.isRt? "display:flex; justify-content :space-between;":''
          },
          areYouInMyFollowList(){
               let followList = this.$store.state.user.user.userInfo.following
               let youReName = this.postsPiece.writer

               let result = followList.find((ele)=>{
                    if(ele.nickname.toLowerCase()===youReName.toLowerCase()){
                         return true
                    }
               })
               return result
          }


     },
     methods:{
          onAddFollowing(){
               if(confirm('팔로우 하시겠습니까?')){
                    this.$store.dispatch('user/user/addFollowing', this.postsPiece.writer)
               } else {

               }

          },
          onUnfollowing(){
               if(confirm('언팔로우 하시겠습니까?')){
                    this.$store.dispatch('user/user/unfollowing', this.postsPiece.writer)
               } else {

               }


          }

     }

}
</script>

<style scoped>
.v-card__title{
     margin : 5px ;
     padding-left: 40px;
}
.v-card__subtitle{
     margin: 5px;
     display: flex;
     justify-content: flex-end;
}
.v-card__subtitle span {
     margin: 5px;
     padding: 5px;
}
.v-card__subtitle span:nth-child(1){
     color: #756f6f;
     font-size: 11px;
}
.v-card__subtitle span:nth-child(3){
     color: #756f6f;
     font-size: 10px;
}
</style>