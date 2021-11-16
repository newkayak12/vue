<template>
     <v-container>
          <v-card>
               <form @submit.prevent="onSignup"  style="display: flex; flex-direction : column; justify-content: center; align-items: center">
                    <input type="email" placeholder="EMAIL" style="border: 1px black solid" v-model="email" v-on:keyup="onEmailCheck" >
                    <span ref="emailCheckBox" >{{emailCheckMsg}}</span>

                    <input type="text" placeholder="NICKNAME" style="border: 1px black solid" v-model="nickname" required v-on:keyup="onNicknameCheck">
                    <span  ref="nicknameCheckbox">{{ nicknameCheckMsg }}</span>

                    <input type="password" placeholder="PASSWORD" style="border: 1px black solid" v-model="password" required v-on:keyup="onPasswordCheck">
                    <span  ref="passwordCheckbox">{{passwordCheckMsg}}</span>

                    <input type="password" placeholder="PASSWORD CHECK" style="border: 1px black solid" v-model="passwordCheck" required v-on:keyup="onPasswordRecheck">
                    <span  ref="passwordReCheckbox">{{ passwordReCheckMsg }}</span>

                    <label style="cursor:pointer">
                         <input type="checkbox" v-model="agree" @click="onCheckAgree" ref="checkBoxRef">
                         <span>모든 약관에 동의합니다.</span>
                    </label>
                    <div style="display: flex; justify-content: center; ">
                         <v-btn color="blue" style="margin: 10px" type="submit" :disabled="!signupPass" width="80%" > 회원가입 </v-btn>
                         <v-btn dark color="blue" style="margin: 10px" @click="onCancel"> 취소 </v-btn>
                    </div>
               </form>
          </v-card>
     </v-container>
</template>

<script>

export default {
     name: 'Signup',
     description: '',
     data(){
       return{
            email:'',
            nickname:'',
            password:'',
            passwordCheck:'',


            emailCheckMsg:'',
            nicknameCheckMsg:'',
            passwordCheckMsg:'',
            passwordReCheckMsg:'',

            emailLocalCheck:false,
            nicknameLocalCheck:false,
            passwordLocalCheck:false,
            passwordLocalRecheck:false,

            agree:false,
            signupPass:false
       }
     },
     computed:{
          signup(){
               return this.$store.state.user.user.signup
          }
     },
     methods:{
          onCancel(){
               this.$store.commit("user/user/signupToggle")
          },
          onEmailCheck(){
               const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
               console.log(emailReg.test(this.email))
               if(!emailReg.test(this.email)){
                    this.emailCheckMsg = "올바른 형식이 아닙니다."
                    this.$refs.emailCheckBox.style.color="red"
                    this.emailLocalCheck = false
                    return;
               }
                    this.emailCheckMsg = "올바른 형식입니다."
                    this.$refs.emailCheckBox.style.color="green"
                    this.emailLocalCheck = true
          },
          onNicknameCheck(){
               const nickReg = /^[a-zA-z0-9]{6,10}$/
               if(!nickReg.test(this.nickname)){
                    this.nicknameCheckMsg = "올바른 형식이 아닙니다."
                    this.$refs.nicknameCheckbox.style.color = "red"
                    this.nicknameLocalCheck = false
                    return;
               }
               this.nicknameCheckMsg = "올바른 형식입니다."
               this.$refs.nicknameCheckbox.style.color = "green"
               this.nicknameLocalCheck = true

          },
          onPasswordCheck(){
               const passReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
               if(!passReg.test(this.password)){
                    this.passwordCheckMsg = "올바른 형식이 아닙니다."
                    this.$refs.passwordCheckbox.style.color = "red"
                    this.passwordLocalCheck = false
                    return;
               }
               this.passwordCheckMsg = "올바른 형식입니다."
               this.$refs.passwordCheckbox.style.color = "green"
               this.passwordLocalCheck = true
          },
          onPasswordRecheck(){
               if(this.password!==this.passwordCheck){
                    this.passwordReCheckMsg = "비밀번호가 일치하지 않습니다."
                    this.$refs.passwordReCheckbox.style.color = 'red'
                    this.passwordLocalRecheck = false
                    return;
               }
                    this.passwordReCheckMsg = "비밀번호가 일치합니다."
                    this.$refs.passwordReCheckbox.style.color="green"
                    this.passwordLocalRecheck = true
          },
          onCheckAgree(){
               if(this.$refs.checkBoxRef.checked && this.emailLocalCheck && this.nicknameLocalCheck
                     && this.passwordLocalCheck && this.passwordLocalRecheck){
                    this.signupPass = true;
                    return;
               }
               this.signupPass = false;


          },
          onSignup(){
               if(this.signupPass){
                    this.$store.dispatch('user/user/signup',{
                         email : this.email,
                         nickname: this.nickname,
                         password : this.password
                    })
               }
          }

     }

}
</script>

<style scoped>
     input{
          margin-top:10px;
     }
     input+span{
          margin-bottom: 20px;
          width: 184px;
          font-size: 10px;
          text-align: left
     }

</style>