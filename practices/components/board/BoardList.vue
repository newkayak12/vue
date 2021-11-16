<template>
     <table>
          <tr>
               <th style="font-size: 0.3vw">번호</th>
               <th style="font-size: 0.3vw">제목</th>
               <th style="font-size: 0.3vw">작성자</th>
               <th style="font-size: 0.3vw">조회수</th>
               <th style="font-size: 0.3vw">작성일</th>
          </tr>
               <BoardTr v-for="boardTr in boardList" :key="boardTr.boardId" :boardTr ="boardTr" />
     </table>
</template>

<script>
import BoardTr from "@/components/board/BoardTr";
export default {
     components:{
          BoardTr
     },
     props:{
       boardList:{
            type:Array
       }
     },
     data(){
          return{

          }
     },
     computed:{

     },
     fetch({store}){

     },
     methods:{

     }

}
</script>

<style scoped>
table{
     border-collapse: collapse;
     width: 90%;
}
th{
     padding: 8px;
     border: none;
     color: white;
     font-size: 14px;
     background: royalblue;
}


</style>