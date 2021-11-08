<template>
     <div>
          <v-container v-if="!me">
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

          <v-container v-else>
               <v-card style="padding: 10px; text-align: center">
                    {{ me.nickname }}님! 로그인되었습니다.

                    <v-btn style="margin: 10px; width: 80px; height: 50px" @click="onLogOut">로그아웃</v-btn>
                    <v-row>
                         <v-col cols="4"> 팔로잉 : {{me.Followings.length}}</v-col>
                         <v-col cols="4"> 팔로워 : {{me.Followers.length}}</v-col>
                         <v-col cols="4"> 게시글 : {{me.Posts.length}}</v-col>
                    </v-row>
               </v-card>
          </v-container>
     </div>
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
     computed:{
          me(){
               return this.$store.state.Users.me;
          }
     },
     methods:{
          onSubmitLogin(){
               if(this.$refs.loginForm.validate()){
                    this.$store.dispatch('Users/login',{
                         //액션은 비동기 >>> 실행 순서가 달라질 수도 있다.(실행이 완료되는 시점)
                         // routing이되고 dispatch가 될 수 있다.
                         email: this.loginEmail,
                         password: this.loginPassword
                    }).then(()=>{
                         // dispatch는 promise이기 때문에 .then()으로 실행 순서를 보장할 수 있다.
                         this.$router.push({

                              path:'/'
                         })
                    }).catch(()=>{
                         alert("아이디 혹은 비밀번호가 유효하지 않습니다. ")
                    })

               } else {
                    alert("아이디 혹은 비밀번호가 유효하지 않습니다. ")
               }
          },
          onLogOut(){
               this.$store.dispatch("Users/logout")
          }
     }

}
</script>

<style scoped>

</style>