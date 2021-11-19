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
          }
     },
     methods:{
          onDelete(){
               
          }
     }
}
</script>

<style scoped>

</style>