<template>
     <div>
          {{board}}
          <table>
               <tr>
                    <td>
                         <h3>
                              제목 : {{board.boardTitle}}
                              <span>[{{board.replyCount}}]</span>
                         </h3>
                    </td>
                    <td>
                         <h4>
                              작성자 : {{board.boardWriter}}
                         </h4>
                    </td>
                    <td>
                         <h4>
                              조회 수 : {{board.viewCount}}
                         </h4>
                    </td>
                    <td>
                         <h4>
                              작성일 : {{days}}
                         </h4>
                    </td>
                    <td>
                         <span>
                              <v-icon>
                                   mdi-thumb-up-outline
                                   <!--mdi-thumb-up-->
                              </v-icon>
                              {{board.likeCount}}
                         </span>
                         <span>
                              <v-icon>
                                   mdi-thumb-down-outline
                                   <!--mdi-thumb-down-->
                              </v-icon>
                              {{board.dislikeCount}}
                         </span>

                    </td>
               </tr>
               <tr>
                    <td colspan="5">
                         <div  style="display: flex; flex-direction: row;justify-content: space-around">
                              <v-card v-for="photoOne in board.photo" :key="photoOne" width="350px" height="350px">
                                   {{photoOne}}
                              </v-card>
                         </div>
                         <div id="boardContent">
                              {{board.boardContent}}
                         </div>
                    </td>
               </tr>
               <tr>
                    <td colspan="5"  style="text-align: end">
                         <div>
                              <span>
                                   <v-icon style="margin: 5px">
                                         mdi-format-align-justify
                                   </v-icon>
                                   수정하기
                              </span>
                                             <span>
                                   <v-icon style="margin: 5px">
                                        mdi-delete-variant
                                   </v-icon>
                                   삭제하기
                              </span>
                         </div>
                    </td>
               </tr>
          </table>

     </div>
</template>

<script>
function getDiff(first, second){
     let diff = Math.ceil((second-first)/(1000*60*60*24))
     let date = first.toLocaleString()
     return diff===1? date.substring(0, date.indexOf(date.substr(-12,3))): `${diff} 일 전`;
}
export default {
    props:{
         board:{
              type:Object,
              required:true,
         }

    },
     computed:{
          days(){
               let date  = this.board.writtenDate;
               let today = new Date()
               return getDiff(date,today)
          }
     },
     fetch(){

     }
}
</script>

<style scoped>
table{
     margin:20px 0 20px 0;
     padding :10px;
     width: 100%;
     border-collapse: collapse;
}
td{
     padding : 5px;




}
tr:nth-child(1) td{
     border-top:1px gray solid;
     border-bottom:1px gray solid;
}
tr:nth-child(1) td *{
     text-align: center;
     padding:15px;
}
tr:nth-child(2) td{
     border-top:1px gray solid;
     border-bottom:1px gray solid;
     padding: 40px;
}
#boardContent{
     margin: 20px;
     padding:40px;
}
table+div span{
     margin: 0 10px 0 10px;
     padding: 0 10px 0 10px;
}
</style>