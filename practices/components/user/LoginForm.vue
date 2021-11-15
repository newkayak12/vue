<template>
     <div >
          <v-container v-if="!userInfo">
               <v-card >
                    <form style="display: flex; flex-direction: column; justify-content:center; align-items:center; padding-bottom: 20px; padding-top: 20px" @submit.prevent="onLogin">

                         <input type="email" placeholder="EMAIL" style="border: 1px black solid" v-model="email" v-on:keyup="emailCheck">
                         <input type="password" placeholder="PASSWORD" style="border: 1px black solid" v-model="password"  v-on:keyup="passwordCheck">
                         <span ref="loginCheckbox">{{ resultMsg }}</span>


                         <div style="display: flex; justify-content: center; ">
                              <v-btn dark color="blue" style="margin: 10px" type="submit"> 로그인 </v-btn>
                              <v-btn style="margin: 10px" @click="onSignup"> 회원가입</v-btn>
                         </div>
                    </form>
               </v-card>
          </v-container>
          <v-container v-else>
               <v-card>
                    <personal-info :userInfo="userInfo"/>
               </v-card>
               <v-card  style="padding: 10px; margin:10px">
                    <v-card-title >팔로워 목록</v-card-title>
                    <v-card v-for=" follower in 3" style="margin: 10px">1</v-card>
               </v-card>
               <v-card  style="padding: 10px; margin:20px 10px 10px 10px">
                    <v-card-title >팔로잉 목록</v-card-title>
                    <v-card v-for=" follower in 3" style="margin: 10px">1</v-card>
               </v-card>
          </v-container>
     </div>
</template>

<script>
import PersonalInfo from "@/components/user/PersonalInfo";
export default {
     components:{PersonalInfo},
     data(){
          return {
               email: this.email,
               password : this.password,
               emailCheckBoolean : '',
               passwordCheckBoolean : '',
               resultMsg:'',
          }

     },
     computed:{
          userInfo(){
                return  this.$store.state.user.user.userInfo
          },
          signup(){
               return this.$store.state.user.user.signup
          }

     },
     methods:{
          onSignup(){
              this.$store.commit("user/user/signupToggle")
          },
          async onLogin(){
               console.log(this.emailCheckBoolean)
               console.log(this.passwordCheckBoolean)
               console.log(this.emailCheckBoolean&&this.passwordCheckBoolean)
               if(this.passwordCheckBoolean && this.emailCheckBoolean){
                    await this.$store.dispatch('user/user/login',{
                         email:this.email,
                         password:this.password
                    })
                    .then((res)=>{

                    })
                    .catch((error)=>{
                         console.log(error)
                    })

                    return;
               }

               this.resultMsg = '이메일 혹은 비밀번호가 잘못됐습니다.'
               this.$refs.loginCheckbox.style.color = 'red';




          },
          emailCheck(){
               const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA -Z])*.[a-zA-Z]{2,3}$/i;
               console.log('email',emailReg.test(this.email))
               if(!emailReg.test(this.email)){
                    this.emailCheckBoolean = false
                    return;
               }
                    this.emailCheckBoolean = true;

          },
          passwordCheck(){
               const passReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
               console.log('pw', passReg.test(this.password))
               if(!passReg.test(this.password)){
                    this.passwordCheckBoolean = false
                    return
               }
                    this.passwordCheckBoolean = true;


          }

     }

}
</script>

<style scoped>
     input{
          background: white;
          border: 1px black solid;
          width: 80%;
          margin-top: 5%;
     }
     input+span{
          margin-top: 0;
          padding-top: 0;
          width: 80%;
          text-align: left;
          padding-left: 10px;
          margin-bottom: 5%;
     }
</style>