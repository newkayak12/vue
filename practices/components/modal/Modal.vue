<template>
     <div style="background-color: rgba(0,0,0,0.4); display: flex; justify-content: center; align-items: center; ">
          <div>
               <v-card :style="widthHeight">
                    <div style="display: flex; justify-content: space-between" class="modalHeader">
                         <div></div>
                         <div>HEADER</div>
                         <div>
                              <v-icon style="color:royalblue; font-size: 38px" @click="closeModal">
                                   mdi-close-box
                              </v-icon>
                         </div>
                    </div>

               </v-card>
          </div>
     </div>
</template>

<script>
export default {
     props:{
          closeModal:{
               type:Function,
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
     .modalHeader{
          width: 100%;
          height: 5%;
          padding-top: 10px;
     }
</style>