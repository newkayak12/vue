<template>
          <div>
               <div v-if="targetInfo!=null"  >
                    <div style="display: flex; flex-direction: row; justify-content: center; width: 100%; margin:20px 0px 20px 0px" >
                         <table>
                              <tr>
                                   <th>
                                        <v-list-item-avatar color="indigo">
                                             <span class="white--text headline">
                                                  {{targetInfo.nickname[0]}}
                                             </span>
                                        </v-list-item-avatar>
                                   </th>
                                   <td>
                                        {{ targetInfo.nickname }}
                                   </td>
                              </tr>
                              <tr>
                                   <th>
                                        생년월일
                                   </th>
                                   <td>
                                        {{ targetInfo.birthDay||'비공개' }}
                                   </td>
                              </tr>
                              <tr>
                                   <th>
                                        성별
                                   </th>
                                   <td>
                                        {{ targetInfo.gender||'비공개' }}
                                   </td>
                              </tr>

                         </table>

                    </div>
                    <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%;" >
                         <div class="follow">
                              <div>
                                   팔로워(나를 팔로우한 사람들)&nbsp;&nbsp;[{{targetInfo.follower.length}}]
                              </div>
                              <span style="height: fit-content">
                                   <FollowList v-for="follow in targetInfo.follower" :key ="follow.nickname" :follow ="follow" />
                              </span>
                         </div>
                         <div class="follow">
                              <div>
                                   팔로잉(내가 팔로우한 사람들)&nbsp;&nbsp;[{{targetInfo.following.length}}]
                              </div>
                              <span>
                                   <FollowList v-for="follow in targetInfo.following" :key="follow.nickname" :follow ="follow">
                                        <template v-slot:onUnfollow v-if="userInfo!==null">
                                             <v-icon @click="unfollow(follow)" style="color: royalblue">
                                                  mdi-close-box
                                             </v-icon>
                                        </template>
                                   </FollowList>
                              </span>
                         </div>
                    </div>
               </div>
               <div v-else style="display:flex; justify-content: center; align-items: center">
                    해당 회원은 존재하지 않는 회원입니다.
               </div>
          </div>
</template>

<script>
import FollowList from "@/components/user/social/FollowList";
export default {
     components:{
          FollowList
     },
    props:{
         param:{
              type:String
         },
         userInfo:{
              type:Object
         }
    },
     data(){
       return{
            targetInfo:null
       }
     },
     computed:{
     },
     fetch(){
          if(this.userInfo!==null && this.userInfo.nickname===this.param){
               this.targetInfo = this.$store.state.user.user.userInfo
               return;
          }
          let nickname = this.param
          this.$store.dispatch('user/profile/loadTarget', nickname)
          this.targetInfo = this.$store.state.user.profile.targetInfo;
     },
     methods:{
          unfollow(follow){
               if(confirm("정말로 언팔로우 합니까?")){
                    this.$store.dispatch('user/user/unfollowing', follow.nickname)
               }else{

               }

          }
     }
}
</script>

<style scoped>
table{
     border-collapse: collapse;
     width: 100%;
     border-bottom: 1px gray solid;

}
table th{
     width: 20%;
     text-align: center;
     padding: 10px
}
table td{
     text-align: center;
     padding: 10px
}
.follow{
     border-radius: 3%;
     background-color: #3251ad;
     margin:30px;
     padding: 20px;
     height: fit-content;
}

.follow>div:nth-child(1){
      margin: 5px 5px 15px 5px;
     text-shadow: 0.5px 0.5px gray;
     color: whitesmoke;
     text-align: center;
}
</style>