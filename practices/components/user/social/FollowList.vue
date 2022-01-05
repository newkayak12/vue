<template>
     <nuxt-link :to="link" @click.native="closeModalMethod" >
          <v-card style="margin: 10px; ">
                   <v-list-item-avatar color="indigo" style="display:inline-block; padding-top:5px" >
                        <span class="white--text headline" >
                             {{follow.nickname[0]}}
                        </span>
                   </v-list-item-avatar>
                   <div  style="display:inline-block">
                         {{follow.nickname}}
                    </div>
               <slot name="onUnfollow"></slot>
          </v-card>
     </nuxt-link>
</template>

<script>
export default {
     props:{
          follow:{
               type:Object,
               required:true
          },
          closeModal: {
               type:Function,
               required: false

          }
     },
     computed:{
          link(){
               return "/profile/"+this.follow.nickname
          }
     },
     methods:{
          closeModalMethod(){

               return typeof this.closeModal==='undefined'? '':this.closeModal()
          }

     },
     fetch(){
          console.log(this.closeModal)
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