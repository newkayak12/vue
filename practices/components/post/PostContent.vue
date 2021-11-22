<template>
     <div>
          <v-card-text>
               <div v-if = "postsPiece.photo.length !== 0" style=" margin: 5px; padding: 10px; display: flex; flex-direction: row; justify-content: space-around;">
                    <v-card v-for="postPhoto in postsPiece.photo" :key="postPhoto" style=" margin: 5px; width: 250px; height: 250px;">
                         {{postPhoto}}
                    </v-card>
               </div>
               <div style=" margin: 5px; padding: 10px;">
                    <v-card style=" margin: 5px; padding: 15px" v-if="postsPiece.content.length>0">
                         {{postsPiece.content}}
                    </v-card>
               </div>

          </v-card-text>

     </div>
</template>

<script>

function getDiff(first, second){
     let diff = Math.ceil((second-first)/(1000*60*60*24))
     let date = first.toLocaleString()
     return diff===1? date.substring(0, date.indexOf(date.substr(-3,3))): `${diff} 일 전`;
}
export default {
     props:{
          postsPiece:{
               type:Object,
               required:false
          }
     },
     computed:{
          getDate(){
               return getDiff(this.postsPiece.writtenDate, new Date());
          }
     }
}
</script>

<style scoped>
.v-card__text {
     margin: 5px;
     padding: 10px;
     width: 96%;

}
</style>