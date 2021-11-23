<template>
     <div>
          <v-card style="margin: 10px; text-align: center; display: flex; justify-content: space-between">
               <nuxt-link  :to="link" >
                   <v-list-item-avatar color="indigo" >
                        <span class="white--text headline" >
                             {{follow.nickname[0]}}
                        </span>
                   </v-list-item-avatar>
                    {{follow.nickname}}
               </nuxt-link>
               <slot name="onUnfollow"></slot>
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
               return "/profile/"+this.follow.nickname
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