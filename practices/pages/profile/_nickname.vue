<template>
     <div class="tmp" style="display: flex; flex-direction: column; align-items: center; width: 90%; margin: 20px 20px 20px 7%; padding: 20px;">
          <div style="width: 100%">
               <v-btn @click="changePanel('info')" text :style="btnFlag==='info'? 'background-color:royalblue  !important; color:white;':''" style="font-size: 0.8vw!important;">{{this.$route.params.nickname}}</v-btn>
               <v-btn @click="changePanel('nickname')" text :style="btnFlag==='nickname'? 'background-color:royalblue !important;  color:white;':''" v-if="btnShow">닉네임 변경</v-btn>
               <v-btn @click="changePanel('password')" text :style="btnFlag==='password'? 'background-color:royalblue !important; color:white;':''" v-if="btnShow">비밀번호 변경</v-btn>
               <v-btn @click="changePanel('withdraw')" text :style="btnFlag==='withdraw'? 'background-color:royalblue !important; color:white;':''" v-if="btnShow">회원 탈퇴</v-btn>
          </div>
          <div class="panel">
               <div v-if="btnFlag==='nickname'" style="width: 100%; display: flex; justify-content: center">
                    <div style="background-color: white; width: 60%; padding: 10px; border-radius: 3%">
                         <div>
                              <span>닉네임&nbsp;:&nbsp;</span>
                              <input type="text" v-model="nickname" maxlength="30" style="border: 1px black solid; width: 65%; padding: 5px 15px 5px 15px">
                              <nuxt-link :to="`/profile/`+this.nickname" @click.native="changeNickname" tag="button" class="v-btn v-btn--text theme--light v-size--default" style="width: 8%; font-size: 14px">변경</nuxt-link>
                         </div>

                    </div>
               </div>
               <div v-else-if="btnFlag==='password'" style="width: 100%; display: flex; justify-content: center">
                    <div style="background-color: white; width: 500px; padding: 10px; display: flex; flex-direction: column; border-radius: 3%;">
                         <div style="margin: 10px; ">
                              <span>&nbsp;&nbsp;현재&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span>
                              <input type="password" v-model="nowUsingPassword" maxlength="30" style="border: 1px black solid; width: 80%; padding: 5px 15px 5px 15px">
                         </div>
                         <div style="margin: 10px; ">
                              <span>비밀번호&nbsp;:&nbsp;</span>
                              <input type="password" v-model="password" maxlength="30" style="border: 1px black solid; width: 80%; padding: 5px 15px 5px 15px">
                         </div>
                         <div style="margin: 10px">
                              <span>&nbsp;&nbsp;확인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span>
                              <input type="password" v-model="passwordCheck" maxlength="30" style="border: 1px black solid; width: 80%; padding: 5px 15px 5px 15px">
                         </div>
                         <div style="display: flex; justify-content: flex-end; padding-right: 20px;">
                              <v-btn @click="changePassword">변경</v-btn>
                         </div>
                    </div>
               </div>
               <div v-else-if="btnFlag==='info'" style="width: 100%; display: flex; justify-content: center">

                    <Info :param = "this.$route.params.nickname" :userInfo="null" v-if="!myprofile" />
                    <Info  :param = "this.$route.params.nickname"  :userInfo="this.$store.state.user.user.userInfo" v-if="myprofile" />

               </div>
               <div v-else-if="btnFlag==='withdraw'" style="width: 100%; display: flex; justify-content: center">
                    <div style="background-color: white; width: 500px; padding: 10px; display: flex; flex-direction: column; border-radius: 3%">
                         <div style="margin: 10px">
                              <span>아이디&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span>
                              <input type="text" v-model="email" maxlength="30" style="border: 1px black solid; width: 80%; padding: 5px 15px 5px 15px">
                         </div>
                         <div style="margin: 10px">
                              <span>비밀번호&nbsp;:&nbsp;</span>
                              <input type="password" v-model="password" maxlength="30" style="border: 1px black solid; width: 80%; padding: 5px 15px 5px 15px">
                         </div>
                         <div style="display: flex; justify-content: flex-end; padding-right: 20px;">
                              <nuxt-link to="/" tag="button" class="v-btn v-btn--text theme--light v-size--default" @click.native="ByeByeSNS" style="background-color: #ea4a7f">탈퇴</nuxt-link>
                         </div>
                    </div>
               </div>

          </div>
     </div>
</template>

<script>
import Info from "@/components/user/social/Info";
export default {
     components:{
       Info
     },
     data(){
          return{
               btnShow:true,
               btnFlag:`info`,
               nickname:this.$store.state.user.user.userInfo.nickname,
               nowUsingPassword:'',
               password:'',
               passwordCheck:'',
               email:''

          }
     },
     beforeMount() {
          let params = this.$route.params
          this.btnShow =  params.nickname.toLowerCase()===this.$store.state.user.user.userInfo.nickname.toLowerCase()? true:false

     },
     methods:{
          changePanel(flag){
               this.btnFlag = flag
          },
          changeNickname(){
               let nickname = this.nickname
               this.$store.dispatch('user/user/changeNickname',nickname)
          },
          changePassword(){
                    let now = this.nowUsingPassword
                    let pw = this.password
                    let pwck = this.passwordCheck
               const passReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
               if(this.$store.state.user.user.userInfo.password !== now){
                    alert("현재 사용 중인 비밀번호를 다시 입력해주십시오")
                    return;
               }
               if(!passReg.test(pw)||!passReg.test(pwck)){
                    alert("비밀번호 형식이 올바르지 않습니다.")
                    this.password = ''
                    this.passwordCheck = ''
                    return;
               }
               if(pw!==pwck){
                    alert("변경할 비밀번호와 비밀번호 변경 확인을 위한 비밀번호가 다릅니다.")
                    return;
               }
               this.$store.dispatch('user/user/changePassword', pwck)


               alert('비밀번호 변경 완료')
               this.password = ''
               this.passwordCheck= ''
               this.nowUsingPassword=''
               this.btnFlag=`info`

          },
          ByeByeSNS(){
               let email = this.email
               let pw = this.password

               this.$store.dispatch("user/user/ByeByeSNS",{email:email,password:pw})

          }


     },
     computed:{
          myprofile(){
               let userInfo = this.$store.state.user.user.userInfo
               let param = this.$route.params.nickname

               return userInfo!==null&&userInfo.nickname===param? true:false
          }
     },
     middleware:'authenticated',

}
</script>

<style scoped>
div .v-btn{
     background-color: #F3F1F1;
     margin: 0px;
     box-sizing: border-box;
     font-size: 1vw;
     width: 7vw;
     overflow: hidden;
     text-overflow: ellipsis;
}
div .v-btn:hover{
     background-color: #5f81e8;
     color:white;
}
.panel{
     width: 100%;
     min-height: 400px;
     background-color: #f3f1f1;
     padding: 20px;
     display: flex;
     justify-content: center;
     align-items: center;
}
.panel .v-btn{
     margin-left: 10px;
     background-color: royalblue;
     color: white;
}
</style>