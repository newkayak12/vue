<template>
     <div >
          <v-container v-if="!loggedin">
               <v-card >
                    <form style="display: flex; flex-direction: column; justify-content:center; align-items:center; padding-bottom: 20px; padding-top: 20px">
                         <input type="email" placeholder="EMAIL" style="border: 1px black solid">
                         <input type="password" placeholder="PASSWORD" style="border: 1px black solid">

                         <div style="display: flex; justify-content: center; ">
                              <v-btn dark color="blue" style="margin: 10px"> 로그인 </v-btn>
                              <v-btn style="margin: 10px"> 회원가입</v-btn>
                         </div>
                    </form>
               </v-card>
          </v-container>
          <div v-else>
                    <v-card>

                    </v-card>
          </div>
     </div>
</template>

<script>
export default {
     data(){
          return {}

     },
     computed:{
          loggedin(){
                return  this.$store.state.user.user.loggedin;
          }

     }

}
</script>

<style scoped>
     input{
          background: white;
          border: 1px black solid;
          width: 80%;
          margin: 5%;
     }
</style>