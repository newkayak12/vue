<template>
     <div>
          <div style="margin-top: 10px; margin-bottom: 20px; padding: 5px">
               <h1 style="text-align: center">{{userInfo.nickname}}님 반갑습니다.</h1>
               <h5 style="text-align: right; color: #b4abab">마지막으로 로그인한 시간 : {{userInfo.lastLoggedIn.toDateString()}}</h5>
          </div>
          <div style="margin: 25px; display: flex; justify-content: space-around; padding: 10px">
               <span style="color: black; padding: 5px"> 팔로우 수 {{userInfo.following.length}}</span>
               <span style="border: 1px solid #b4abab; margin-left: 5px; margin-right: 5px"/>
               <span style="color: black; padding: 5px"> 팔로워 수 {{userInfo.follower.length}}</span>
               <span style="border: 1px solid #b4abab; margin-left: 5px; margin-right: 5px"/>
               <span style="color: black; padding: 5px"> 게시글 수 {{userInfo.posts.length}}</span>
          </div>

     </div>
</template>

<script>
export default {
     props:{
          userInfo:{
               type:Object,
               required:true,
          }
     },

}
</script>

<style scoped>

</style>