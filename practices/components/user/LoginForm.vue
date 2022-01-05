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
                    <v-card-title >나를 팔로우한 사람들</v-card-title>

                    <FollowList v-for="er in follower" :key="er.nickname" :follow="er"/>


                    <div style="margin: 10px" v-if="this.$store.state.user.user.userInfo.following.length>3">
                         <v-btn style="width: 100%; background: royalblue; color: white"@click="moreFollower">더보기</v-btn>
                    </div>
               </v-card>
               <v-card  style="padding: 10px; margin:20px 10px 10px 10px">
                    <v-card-title >내가 팔로우한 사람들</v-card-title>


                    <FollowList v-for="ing in following" :key="ing.nickname" :follow="ing"/>

                    
                    <div style="margin: 10px"  v-if="this.$store.state.user.user.userInfo.follower.length>3">
                         <v-btn style="width: 100%; background: royalblue; color: white" @click="moreFollowing">더보기</v-btn>
                    </div>
               </v-card>
          </v-container>
               <Modal class="modal" :style="widthCalc" v-if="modalShow" :closeModal="closeModal" :follow="this.followFullList" :followFlag="followFlag"/>
               <!-- <Modal class="modal" style="" v-if="modalShow" :closeModal="closeModal" :follow="this.followFullList" :followFlag="followFlag"/> -->
     </div>
</template>

<script>
import PersonalInfo from "@/components/user/PersonalInfo";
import FollowList from "@/components/user/social/FollowList";
import Modal from "@/components/modal/Modal"
export default {
     components:{
          PersonalInfo,
          FollowList,
          Modal

     },
     data(){
          return {

               modalShow:false,
               email: this.email,
               password : this.password,
               emailCheckBoolean : '',
               passwordCheckBoolean : '',
               resultMsg:'',
               followFullList:[],
               followFlag:''
          }

     },
     computed:{
          userInfo(){
                return  this.$store.state.user.user.userInfo
          },
          signup(){
               return this.$store.state.user.user.signup
          },
          follower(){
               return this.$store.state.user.user.userInfo.follower.slice(0,3)
          },
          following(){
               return this.$store.state.user.user.userInfo.following.slice(0,3)
          },
          widthCalc(){
               return `height: ${document.documentElement.scrollHeight}px`;
          }

     },
     methods:{
          onSignup(){
              this.$store.commit("user/user/signupToggle")
          },
          async onLogin(){
               if(this.passwordCheckBoolean && this.emailCheckBoolean){
                    await this.$store.dispatch('user/user/login',{
                         email:this.email,
                         password:this.password
                    })
                    .then((res)=>{
                         this.email = '';
                         this.password = '';
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


          },
          moreFollower(){
               document.getElementsByTagName("html")[0].style.overflowY='hidden'
               this.followFullList = this.$store.state.user.user.userInfo.follower
               this.followFlag = 'follower'
               this.modalShow=true;
          },
          moreFollowing(){
               document.getElementsByTagName("html")[0].style.overflowY='hidden'
               this.followFullList = this.$store.state.user.user.userInfo.following
               this.followFlag = 'following'
               this.modalShow=true;
          },
          closeModal(){
               document.getElementsByTagName("html")[0].style.overflowY=''
               this.modalShow=false;
          }


     }

}
</script>

<style scoped>

     .modal{
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;

          z-index: 900;
     }


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