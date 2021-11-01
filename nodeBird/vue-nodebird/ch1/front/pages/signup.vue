<template>
     <div>
          <v-container>
               <v-card>
                    <v-container>
                         <v-subheader>회원가입</v-subheader>
                         <v-form>
                              <v-text-field label="이메일" type="email" required/>
                              <v-text-field label="비밀번호" type="password" required/>
                              <v-text-field label="비밀번호 확인" type="passwordCheck" required/>
                              <v-text-field label="닉네임" type="nickname" required/>

                              <v-checkbox required label="동의합니다."></v-checkbox>
                              <v-btn color="green" type="submit">가입</v-btn>
                         </v-form>
                    </v-container>
               </v-card>
          </v-container>
     </div>
</template>

<script>
export default {
     head(){
          return {
               title:'signup'

          }
     }
}
</script>

<style scoped>

</style>