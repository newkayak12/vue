<template>
     <v-list-item>
          <span>{{follow.nickname}}</span>
          <v-icon @click.prevent="deleteFollow" >mdi-minus-circle-outline</v-icon>
     </v-list-item>
</template>

<script>
export default {
     props:{
          follow:{
               type:Object,
               required:true
          },
          flag:{
               type:String,
               required: true
          }
     },
     data(){
          return{

          }
     },
     methods:{
          deleteFollow(){
               this.$store.dispatch("User.js/deleteFollow", {nickname : this.follow.nickname, flag : this.flag})
          }
     }

}
</script>

<style scoped>

</style>