<template>
     <div >
          <v-card-title :style="rt2"  >
               <h4>{{postsPiece.title}}</h4>
               <div v-if="isRt" :style="rt">
                    {{postsPiece.writer}}님의 {{postsPiece.title}}을(를) 리트윗했습니다.
               </div>
          </v-card-title>
          <v-card-subtitle  style="box-shadow: 0.5px 0.5px  gray; width: 100%">
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
          },
          isRt:{
               type:Boolean,
               required: false
          }

     },
     computed:{
          getDate(){
               return getDiff(this.postsPiece.writtenDate, new Date());
          },
          rt(){
               return this.isRt?  "font-size: 12px; color:gray;":"";
          },
          rt2(){
               return this.isRt? "display:flex; justify-content :space-between;":''
          }
     }
}
</script>

<style scoped>
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