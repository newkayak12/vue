<template>
     <div>
          <v-card-title>
               <h4>{{postsPiece.title}}</h4>
          </v-card-title>
          <v-card-subtitle>
               <span>
                    작성자 : {{ postsPiece.writer }}
               </span>
               <span>
                    /
               </span>
               <span>
                   작성일 :  {{getDate}}
               </span>
          </v-card-subtitle>
          <v-card-text>
               <div v-if = "postsPiece.photo.length !== 0" style=" margin: 5px; padding: 10px; display: flex; flex-direction: row; justify-content: space-around;">
                    <v-card v-for="postPhoto in postsPiece.photo" :key="postPhoto" style=" margin: 5px; width: 50%;">
                         {{postPhoto}}
                    </v-card>
               </div>
               <div style=" margin: 5px; padding: 10px;">
                    <v-card style=" margin: 5px; padding: 15px ">
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
               type:Object
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
.v-card__text{
     margin : 5px ;
     padding: 10px;
     width: 96%;

}
.v-card__title{
     margin : 5px ;
     padding-left: 40px;
}
.v-card__subtitle{
     margin: 5px;
     display: flex;
     justify-content: flex-end;
}
.v-card__subtitle span {
     margin: 5px;
     padding: 5px;
}
.v-card__subtitle span:nth-child(1){
     color: #756f6f;
     font-size: 11px;
}
.v-card__subtitle span:nth-child(3){
     color: #756f6f;
     font-size: 10px;
}
</style>