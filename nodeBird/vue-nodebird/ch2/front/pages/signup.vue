e<template>
     <div>
          <v-container>
               <v-card>
                    <v-container>
                         <v-subheader>회원가입</v-subheader>
                         <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                              <v-text-field v-model="email" label="이메일" type="email" required :rules="emailRules" />
                              <!-- v-model로 이어주는 부분은 vuetify에서 해주는 것 vuetify를 사용하지 않으면 직접 구현해야함-->
                              <v-text-field v-model="password" label="비밀번호" type="password" required :rules="passwordRules" />
                              <!-- 만약 :ruels를 사용하지 않는다고 하면, @change=""로 valid를 바꿔주는 식으로 가면 된다.  -->

                              <v-text-field v-model="passwordCheck" label="비밀번호 확인" type="password" required :rules="passwordCheckRules" />
                              <v-text-field v-model="nickname" label="닉네임" type="nickname" required :rules="nicknameRules" />

                              <v-checkbox v-model="terms" required label="동의합니다." :rules="[v=> !!v || '약관에 동의해야 합니다.']" />
                              <v-btn color="green" type="submit" :disabled="!valid">가입</v-btn>
                         </v-form>
                    </v-container>
               </v-card>
          </v-container>
     </div>
</template>

<script>
export default {
     data(){
          return{
               valid:false,
               email:'',
               password:'',
               passwordCheck:'',
               nickname:'',
               terms:false,
               emailRules:[
                     v=> !!v || '이메일은 필수입니다.',
                     v=> /.+@.+/.test(v) ||'이메일이 유효하지 않습니다.'
               ],
               nicknameRules:[
                    v=> !!v || '닉네임은 필수입니다.',
               ],
               passwordRules:[
                     v=>!!v||'비밀번호는 필수입니다.'
               ],
               passwordCheckRules:[
                     v=>!!v|| '비밀번호 확인은 필수입니다.',
                     v=>v===this.password || '비밀번호가 일치하지 않습니다.'
               ]

          }
     },
     head(){
          return {
               title:'Signup-Form'

          }
     },
     methods:{
          // onSubmitForm(){
          //      if(this.$refs.form.validate()){
          //           this.$store.dispatch('User/signup', {
          //                nickname :this.nickname,
          //                email : this.email,
          //           }).then(()=>{
          //                //dispatch는 자체로  promise로 then()으로 순서를 보장할 수 있다.
          //                this.$router.push({
          //                     path:"/"
          //                })
          //           }).catch(()=>{
          //                alert('회원가입 실패')
          //           })
          //      }
          // }
          //
          //혹은


         async onSubmitForm(){
               if(this.$refs.form.validate()){
                   try {
                        const result = await this.$store.dispatch('User/signup', {
                             nickname: this.nickname,
                             email: this.email,
                        })
                   } catch (err){

                   }
               }
          }

          /*
               sync와 await라는 특별한 문법을 사용하면 프라미스를 좀 더 편하게 사용할 수 있습니다.
               async/await는 놀라울 정도로 이해하기 쉽고, 사용법도 어렵지 않습니다.
           */
     }

}
</script>

<style scoped>

</style>