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
                         <follow-list :users="followingList" :remove="removeFollowing" />
                    </v-container>
                    <v-btn dark  color="blue" style="width: 100%;" v-if="hasMoreFollowing"  @click="loadMoreFollowings">더보기</v-btn>
               </v-card>


               <v-card style="margin-bottom: 20px">
                    <v-container>
                         <v-subheader>팔로워</v-subheader>
                         <follow-list  :users="followerList" :remove="removeFollower "/>
                    </v-container>
                    <v-btn  dark  color="blue" style="width: 100%; " v-if="hasMoreFollower" @click="loadMoreFollowers">더보기</v-btn>
<!--
 profile에서 화면이 보이지만 실제로는 Followlist에서 렌더링이 일어나는 식이다. 이런 식으로 관심사 분리를 하면 의존성도 낮아지고 여튼 좋다.
-->
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
          }
     },fetch({store}){
          /*context자리임*/
          Promise.all([
               store.dispatch('Users/loadFollowers',{offset:0}),
               store.dispatch('Users/loadFollowings',{offset:0})
          ])


     },
     methods:{
          onChangeNickname(){
               this.$store.dispatch('Users/changeNickname',{
                    nickname:this.nickname
               })
          },
          removeFollowing(userId){
               this.$store.dispatch('Users/unFollow',{userId})
          },
          removeFollower(userId){
               this.$store.dispatch("Users/removeFollower",{userId})
          },
          loadMoreFollowers(){
               this.$store.dispatch('Users/loadFollowers')
          },
          loadMoreFollowings(){
               this.$store.dispatch('Users/loadFollowings')
          }

     },
     computed:{
          followerList(){
               return this.$store.state.Users.followerLists
          },
          followingList(){
               return this.$store.state.Users.followingLists
          },
          hasMoreFollowing(){
               return this.$store.state.Users.hasMoreFollowing
          },
          hasMoreFollower(){
               return this.$store.state.Users.hasMoreFollower
          }


     },
     middleware:'authenticated'

}
</script>

<style scoped>

</style>
