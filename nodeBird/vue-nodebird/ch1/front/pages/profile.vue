<template>
     <div>
          <v-container>
               <v-card style="margin-bottom: 20px;">
                    <v-container>
                         <v-subheader>내프로필</v-subheader>

                         <v-form>
                              <v-text-field label="닉네임" required />
                              <v-btn color="blue" type="submit">수정</v-btn>
                         </v-form>
                    </v-container>
               </v-card>



               <v-card style="margin-bottom: 20px">
                    <v-container>
                         <v-subheader>팔로잉</v-subheader>
                         <follow-list></follow-list>
                    </v-container>
               </v-card>


               <v-card style="margin-bottom: 20px">
                    <v-container>
                         <v-subheader>팔로워</v-subheader>
                         <follow-list></follow-list>
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

}
</script>

<style scoped>

</style>