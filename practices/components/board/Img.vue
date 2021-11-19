<template>
     <div style="display: inline-block; margin-left: 10px; margin-right: 10px; position: relative; height: 150px">
          <img :src="imgPiece.preview" alt="alt" style="width: 150px; height: 150px; box-shadow: 1px 1px gray">
          <div style="position: absolute; top: 0px; right: 0px;" @click="onDelete">
               <v-icon style="color: white">mdi-close-box-outline</v-icon>
          </div>
     </div>
</template>

<script>
export default {
     props:{
          imgPiece:{
               type:Object,
          },
          photo:{
               type:Array
          },
          showImg:{
               type:Boolean
          }
     },
     methods:{
          onDelete(){
               let flag = '';
               if(confirm('이 이미지를 삭제합니까?')){
                    flag=true;
               } else {
                    flag=false;
               }

               if(!flag){
                    return;
               }
               let index = this.photo.findIndex((ele)=>{
                    if(parseInt(ele.idx)===parseInt(this.imgPiece.idx)){
                         return ele;
                    }
               })
              this.photo.splice(index,1)
          }
     },

}
</script>

<style scoped>

</style>