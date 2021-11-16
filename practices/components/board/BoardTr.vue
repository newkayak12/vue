<template>
          <tr >
                    <td>{{boardTr.boardId}}</td>
                    <td :to="'/board/'+boardTr.boardId">
                         <nuxt-link :to="'/board/'+boardTr.boardId">
                              {{ boardTr.boardTitle }}
                         </nuxt-link>
                    </td>
                    <td>{{boardTr.boardWriter}}</td>
                    <td>{{boardTr.viewCount}}</td>
                    <td style="font-size: 12px">{{writtenDate}}</td>
          </tr>
</template>

<script>
function getDiff(first, second){
     let diff = Math.ceil((second-first)/(1000*60*60*24))
     let date = first.toLocaleString()
     return diff===1? date.substring(0, date.indexOf(date.substr(-12,3))): `${diff} 일 전`;
}
export default {
     props:{
          boardTr:{
               type:Object
          }
     },
     computed:{
          writtenDate(){
               let date = this.boardTr.writtenDate;
               let today = new Date()

               return getDiff(date,today)
          }
     }
}
</script>

<style scoped>
     tr{
          border: none;
          border-top: white solid 3px;
          border-bottom: white solid 3px;
          text-align: center;

     }
     td{
          background: #f6f5f5;
          border: none;
          padding: 15px 10px 15px 10px;
     }
     td:nth-child(1){
          width: 8%;
          font-size: 12px;
     }
     td:nth-child(2){
          width: 62%;
          font-size: 17px;
     }
     td:nth-child(3){
          width: 8%;
          font-size: 12px;
     }
     td:nth-child(4){
          width: 8%;
          font-size: 12px;
     }
     td:nth-child(5){
          width: 8%;
     }

     a{
          color:black;
          text-decoration: none;
     }

</style>
