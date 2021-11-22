<template>
     <div>
          <v-card style="margin: 10px ">
               <nuxt-link  :to="link">
                    {{follow.nickname}}
               </nuxt-link>
          </v-card>
     </div>
</template>

<script>
export default {
     props:{
          follow:{
               type:Object,
               required:true
          }
     },
     computed:{
          link(){
               return "#"
          }
     }
}
</script>

<style scoped>
div .v-card{
     padding: 5px 5px 5px 15px;
     margin: 5px;
}
a{
     text-decoration: none;
     color:black;
}

</style>