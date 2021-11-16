<template>
     <v-app>
          <nav style="display: flex; justify-content: space-between; background: royalblue; height: 100px; align-items: center" >

               <div style="margin-left: 5VW">
                    <nuxt-link to="/posts">LOGO</nuxt-link>
               </div>

               <div style="margin-right: 5VW; align-items: center" >
                    <ul style="padding-top: 5px">
                         <li style="list-style: none; ">
                              <nuxt-link to="/boards/1" >게시판</nuxt-link>
                         </li>
                         <li style="list-style: none;">
                              <nuxt-link to="/posts">SNS</nuxt-link>
                         </li>
                         <li style="list-style: none; ">
                              <nuxt-link to="/profile" v-show="userInfo">프로필</nuxt-link>
                         </li>
                    </ul>
               </div>
          </nav>
          <v-row no-gutters>
               <v-col cols="12" lg="3" style="justify-content: center; align-items: start; display: flex; padding-top: 20px; padding-bottom: 20px;">
                    <login-form style="width: 80%;" v-if="signup"/>
                    <Signup v-else />
               </v-col>
               <v-col cols="12" lg="9" style="width: 100%; padding-top: 20px">
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


          }
     },
     computed:{
          signup(){
               return this.$store.state.user.user.signup;
          },
          userInfo(){
               return this.$store.state.user.user.userInfo
          }

     }

}
</script>

<style scoped>
     a{
          text-decoration: none;
          color: white;
     }
     ul li{

          float: left;
          margin : 2vw;

     }
     
</style>