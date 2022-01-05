<template>
    <div style="background-color:yellow; color: black;">


        안녕!
         <router-link to="/vue1/annyon/test1/1">테스트1</router-link>
         <router-link to="/vue1/annyon/test2/2">테스트2</router-link>
         <router-view></router-view>

    </div>
</template>

<script>
// import router from "../router";
export default {
     // router,
     components:{

     },
     data(){
          return {
          }
     }

}
</script>

<style>

</style>