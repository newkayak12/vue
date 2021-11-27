<template>
     <div style="background-color: rgba(0,0,0,0.4); display: flex; justify-content: center; align-items;  width: 100vw;">
               <v-card :style="widthHeight +' '+modalTop" style="position:fixed;" >
                    <div style=" width:100%; height: 100%;  display: flex; flex-direction: column; justify-content: space-between">
                         <div class="modalHeader" >
                                        <h4>{{ followFlag==='follower'? '팔로워 _ [내가 팔로우한 사람들]':'팔로잉 _ [나를 팔로우한 사람들]' }}</h4>
                                        <v-icon style="color:royalblue; font-size: 38px" @click="closeModal">
                                             mdi-close-box
                                        </v-icon>
                         </div>

                         <div class="modalBody">

                                   <FollowList v-for="followOne in follow"  :follow="followOne" :closeModal="closeModal" style="width:80%;"/>

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
               return `width: ${document.documentElement.clientWidth*0.8}px; height: ${document.documentElement.clientHeight*0.7}px;`
          },
          modalTop(){
               return `top: ${document.documentElement.clientHeight*0.1}px;`
          }
     }
}
</script>

<style scoped>
     .modalFooter{
          width: 100%;
          height: 5%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px gray solid;
     }
     .modalHeader{
          width: 100%;
          height: 6%;
          position: relative;
          border-bottom: 1px gray solid;
     }
     .modalHeader h4 {
          margin-top: 5px;
          text-align: center;
     }
     .modalHeader button {
          position: absolute;
          top: 0;
          right: 0;
     }
     .modalBody{
          width: 100%;
          height: 90% !important;
          margin: 0;
          padding: 20px;
          overflow-y: auto;

          display: grid;
          grid-gap: 15px;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows:  repeat(4,1fr);
          justify-items: center;
          align-items: center;
     }

     .modalBody div{
          width: 80%;
          display: inline-block;

     }
</style>