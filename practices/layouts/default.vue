<template>
     <v-app>
          <nav style="display: flex; justify-content: space-between; background: royalblue; height: 100px; align-items: center" >

               <div style="margin-left: 5VW">
                    <nuxt-link to="/">LOGO</nuxt-link>
               </div>

               <div style="margin-right: 5VW; align-items: center" >
                    <ul style="padding-top: 5px">
                         <li style="list-style: none; ">
                              <nuxt-link to="/boards" >게시판</nuxt-link>
                         </li>
                         <li style="list-style: none;">
                              <nuxt-link to="/posts">SNS</nuxt-link>
                         </li>
                         <li style="list-style: none; ">
                              <nuxt-link to="/profile">프로필</nuxt-link>
                         </li>
                    </ul>
               </div>
          </nav>
          <v-row no-gutters>
               <v-col cols="12" md="4" style="justify-content: center; align-items: start; display: flex; padding-top: 40px; padding-bottom: 40px">
                    <login-form style="width: 80%;" v-if="login"/>
                    <Signup v-else />
               </v-col>
               <v-col cols="12" md="8" style="width: 100%;">
                   <nuxt/>
               </v-col>
          </v-row>
     </v-app>
</template>

<script>
import LoginForm from "~/components/user/LoginForm";
import Signup from "~/components/user/Signup";
export default {
     components :{LoginForm, Signup},
     data(){
          return{
               login:true,

          }
     }

}
</script>

<style scoped>
*{
     border: 1px black solid;
}
     a{
          text-decoration: none;
          color: white;
     }
     ul li{

          float: left;
          margin : 2vw;

     }
     
</style>