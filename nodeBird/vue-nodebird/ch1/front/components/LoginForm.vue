<template>
     <v-container>
          <v-card>
               <v-form ref="loginForm" v-model="loginValid" @submit.prevent="onSubmitLogin">
                    <v-container>
                         <v-text-field v-model="loginEmail" label="이메일" type="email" required :rules="loginEmailRules" />
                         <v-text-field v-model="loginPassword" label="비밀번호" type="password" required :rules="loginPasswordRules" />
                         <v-btn color="green" type="submit" :disabled="!loginValid">로그인</v-btn>
                         <v-btn nuxt to="/signup">회원가입</v-btn>
                    </v-container>
               </v-form>
          </v-card>
     </v-container>
</template>

<script>
export default {
     data(){
          return {
               loginValid:false,
               loginEmail:'',
               loginPassword:'',
               loginEmailRules:[
                     v=>!!v||'이메일을 입력해야합니다.',
                     v=>/.+@.+/.test(v)||'이메일 형식이어야 합니다.'
               ],
               loginPasswordRules:[
                     v=>!!v||`비밀번호는 필수입니다.`,
               ]


          }

     },
     methods:{
          onSubmitLogin(){
               if(this.$refs.loginForm.validate()){
                    alert("로그인 시도")
               } else {
                    alert("아이디 혹은 비밀번호가 유효하지 않습니다. ")
               }
          }
     }

}
</script>

<style scoped>

</style>