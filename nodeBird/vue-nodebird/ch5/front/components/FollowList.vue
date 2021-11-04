<template>
    <v-list>
         <v-col v-for="user in users" :key="user.id" cols="12" md="4" style="display: inline-block">
              <v-list-item>
                   <v-list-item-avatar color="indigo">
                        <span class = "white--text headline">{{user.nickname[0]}}</span>
<!--                        닉네임의 첫글자로 아바타 만든거고 -->
                   </v-list-item-avatar>

                   <v-list-item-content>
                        <v-list-item-title>
                             {{user.nickname}}
<!--                             닉네임 표시한거고-->
                        </v-list-item-title>
                   </v-list-item-content>

                   <v-list-item-action>
                        <v-icon  @click="remove(user.id)">mdi-minus-circle-outline</v-icon>
                   </v-list-item-action>
<!--                   <ul>-->
<!--                        <li v-for="user in users" :key="user.id">-->
<!--                             <span>{{user.nickname}}</span>-->
<!--                             <v-icon @click="remove(user.id)">mdi-minus-circle-outline</v-icon>-->
<!--                        </li>-->
<!--                   </ul>-->
              </v-list-item>
         </v-col>
    </v-list>
</template>

<script>
export default {
     props:{
          users:{
               type:Array,
               required:true

          },
          remove:{
               type:Function,
               required:true
          },

     },
     methods:{
     },

}
</script>

<style scoped>

</style>