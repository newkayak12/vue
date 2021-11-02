

<template>
     <div>
          <v-container>
               <v-card style="margin-bottom: 20px;">
                    <v-container>
                         <v-subheader>내프로필</v-subheader>

                         <v-form v-model="valid" @submit.prevent="onChangeNickname">
                              <v-text-field label="닉네임" required v-model="nickname" :rules="nicknameRules"/>
                              <v-btn color="blue" type="submit">수정</v-btn>
                         </v-form>
                    </v-container>
               </v-card>



               <v-card style="margin-bottom: 20px">
                    <v-container>
                         <v-subheader>팔로잉</v-subheader>
                         <follow-list v-for="follow in followingList" :key="follow.nickname" :follow="follow" :flag="following"/>
                    </v-container>
               </v-card>


               <v-card style="margin-bottom: 20px">
                    <v-container>
                         <v-subheader>팔로워</v-subheader>
                         <follow-list v-for="follow in followerList" :key="follow.nickname" :follow="follow" :flag="follower"/>
                    </v-container>
               </v-card>


          </v-container>
     </div>
</template>

<script>
import FollowList from "~/components/FollowList";
export default {
     layout:'admin',
     //옵션이 붙은 페이지는 알아서 다르게
     /*
          nuxt : vue의 기본 기능을 nuxt가 확장했다.


          head(){} => 헤드 태그에 여러 가지 정보를 넣어줌
      */


     head(){
          return {
               title:'profile'

          }
     },
     components:{FollowList,},
     data(){
          return{
               valid:false,
               nickname:'',
               nicknameRules:[
                    v=>!!v||'닉네임을 입력하세요'
               ],
               following :'following',
               follower : 'follower'
          }
     },
     methods:{
          onChangeNickname(){
               this.$store.dispatch('User/changeNickname',{
                    nickname:this.nickname
               })
          }
     },
     computed:{
          followerList(){
               return this.$store.state.User.followerList;
          },
          followingList(){
               return this.$store.state.User.followingList;
          }


     }

}
</script>

<style scoped>

</style>





