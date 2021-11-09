<template>
     <v-app>
<!--          //vuetify 쓸 때 최상위-->
          <nav>
               <v-toolbar dark color="green">
                         <v-toolbar-title>
                              <nuxt-link to="/" style="text-decoration: none; color: white">NodeBird</nuxt-link>
                         </v-toolbar-title>

                         <v-spacer />

                         <v-toolbar-items>
                              <v-form @submit.prevent="onSearchHashtag">
                                   <div :style="{display: 'flex', height:'100%', alignItems:'center'}">
                                        <v-text-field v-model="hashTag" label="검색" hide-details prepend-icon="mdi-magnify" :style="{display:'flex',alignItems:'center'}" />
     <!--    v-text-field == input                     -->
                                   </div>
                              </v-form>


                              <v-btn text nuxt to="/profile">
                                   <div>프로필</div>
                              </v-btn>
                              <v-btn text nuxt to="/signup">
                                   <div>회원가입</div>
                              </v-btn>
                    </v-toolbar-items>
               </v-toolbar>
          </nav>
<!--          <div>{{ name }}</div>
          <v-btn @click="onChangeName"> bye</v-btn>-->
          <v-row no-gutters>
               <v-col cols="12" md="4">
<!--  cols===xs // cols는 12고정    -->
                         <LoginForm />
               </v-col>
               <v-col cols="12" md="8">
                       <nuxt />
               </v-col>
          </v-row>
</v-app>
</template>

<script>
     /*import 'vuetify/dis/vuetify.min.css';*/
     import LoginForm from "~/components/LoginForm";
     //절대경로처럼(소스) 시작하는 것 '~' >> 보통 지금의 front폴더
export default {
     components:{LoginForm,},
     data(){
          return{
               hashTag:'',
          }
     },
     computed:{
          name(){
               return this.$store.state.Posts.name;
          }
     },
     methods:{
          onChangeName(){
               this.$store.commit("Posts/bye")

          },
          onSearchHashtag(){
               this.$router.push({
                    path:`/hashtag/${this.hashTag}`
               });
               this.hashTag = '';
          }
     }
}
</script>

<style scoped>

</style>

<!--
Q&A
()=> {
     return a;
}

===

()=> a


///객체는
()=>({})
-->
