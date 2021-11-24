<template>
     <div style="background-color: rgba(0,0,0,0.4); display: flex; justify-content: center; align-items: center; ">
               <v-card :style="widthHeight"  >
                    <div style=" width:100%; height: 100%;  display: flex; flex-direction: column; justify-content: space-between">
                         <div class="modalHeader" >
                                   <div>
                                        <div style="width: 38px; height: 38px;"></div>
                                   </div>
                                   <div>
                                        <h4>
                                             {{ followFlag==='follower'? '팔로워 _ [내가 팔로우한 사람들]':'팔로잉 _ [나를 팔로우한 사람들]' }}
                                        </h4>
                                   </div>
                                   <div>
                                        <v-icon style="color:royalblue; font-size: 38px" @click="closeModal">
                                             mdi-close-box
                                        </v-icon>
                                   </div>
                         </div>

                         <div class="modalBody">
                              <FollowList v-for="followOne in follow" :key="followOne.nickname" :follow="followOne" />
                         </div>


                         <div class="modalFooter" >
                              <div>
                                   <div style="width: 38px; height: 38px;"/>
                              </div>
                              <div>
                                   <div style="width: 38px; height: 38px;"/>
                              </div>
                              <div>
                                   <div style="width: 38px; height: 38px;"/>
                              </div>
                         </div>
                    </div>
               </v-card>
     </div>
</template>

<script>
import FollowList from "@/components/user/social/FollowList";
export default {
     components:{
          FollowList
     },
     props:{
          closeModal:{
               type:Function,
               required:true
          },
          follow:{
               type:Array,
               required: true

          },
          followFlag:{
               type:String,
               required:true
          }

     },
     computed:{
          widthHeight(){

               return `width: ${document.documentElement.clientWidth*0.7}px; height: ${document.documentElement.clientHeight*0.7}px;`
          }
     }
}
</script>

<style scoped>
     .modalHeader,.modalFooter{
          width: 100%;
          height: 5%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px gray solid;
     }
     .modalBody{
          width: 100%;
          height: 90% !important;
          margin: 0;
          padding: 20px;
          overflow-y: auto;
          display: grid;
          grid-gap: 5px;

     }
     .modalBody div{
          width: 20%;
          display: inline-block;
          grid-column: auto;
          grid-row: auto;

     }
</style>