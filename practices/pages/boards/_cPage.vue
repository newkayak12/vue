<template>
     <div style="display: flex; flex-direction: column; align-items: center" class="boards">
          <div style="display: flex; justify-content: end; align-items: end; width: 90%">
               <v-btn style="background: royalblue; color: white" id="writebtn" @click="onWriteBoard">글 작성하기</v-btn>
          </div>
          {{boardList.boardId}}
                    <BoardList :boardList = boardList />
          <div style="margin:10px; padding: 10px">
               <PageBar />
          </div>
     </div>
</template>

<script>
function paging(cPage){

     return 1;
}
import BoardList from "@/components/board/BoardList";
import PageBar from "@/components/board/PageBar";
export default {
     components:{
          BoardList,
          PageBar
     },
     data(){
          return{

          }
     },
     computed:{
          boardList (){
               return this.$store.state.boards.board.board;
          },
     },
     methods:{
          onWriteBoard(){
               //글 작성
          }

     },
     fetch({store, params}){
          let pageNo = ((params.cPage-1)/5)*5
          store.dispatch('boards/board/loadBoard', pageNo )
     }

}
</script>

<style scoped>
     .boards *{
          margin: 10px 5px 10px 5px;
     }
     a{
          text-decoration: none;
          color: black;
     }
</style>