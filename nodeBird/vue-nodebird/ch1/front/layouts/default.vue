<template>
     <v-app>
<!--          //vuetify 쓸 때 최상위-->
          <nav>

               <v-toolbar dark color = "green">
                    <v-toolbar-title>
                         <nuxt-link to="/" style="text-decoration: none; color: white">NodeBird</nuxt-link>
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-toolbar-items>
                         <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style="{display:'flex',alignItems:'center'}"/>
<!--    v-text-field == input                     -->
                         <v-btn text nuxt to="/profile" >
                              <div>프로필</div>
                         </v-btn>
                         <v-btn text nuxt to="/signup">
                              <div>회원가입</div>
                         </v-btn>

                    </v-toolbar-items>

               </v-toolbar>
          </nav>
          <v-row no-gutters>
               <v-col cols="12" md="4">
                         <LoginForm/>
               </v-col>
               <v-col cols="12" md="8">
                       <nuxt/>
               </v-col>
          </v-row>

     </v-app>
</template>

<script>
     /*import 'vuetify/dis/vuetify.min.css';*/
     import LoginForm from "~/components/LoginForm";
     //절대경로처럼(소스) 시작하는 것 '~' >> 보통 지금의 front폴더
export default {
     components:{LoginForm,}
}
</script>

<style scoped>

</style>