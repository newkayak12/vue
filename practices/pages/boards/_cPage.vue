<template>
     <div style="display: flex; flex-direction: column; align-items: center" class="boards">
          <div style="display: flex; justify-content: end; align-items: end; width: 90%">
               <v-btn style="background: royalblue; color: white" @click.native="onWriteBoard" :to="link"  nuxt>글 작성하기</v-btn>
          </div>
                    <BoardList :boardList = boardList />
          <div style="margin:10px; padding: 10px; width: 100%; display: flex; justify-content: center; align-content: center">
               <PageBar />
          </div>
     </div>
</template>

<script>

import BoardList from "@/components/board/BoardList";
import PageBar from "@/components/board/PageBar";
export default {
     components:{
          BoardList,
          PageBar
     },
     data(){
          return{
               link:'/boardForm'
          }
     },
     computed:{
          boardList (){
               return this.$store.state.boards.board.board;
          },
          numberPerPage(){

          }
     },
     methods:{
          onWriteBoard(){
               if(this.$store.state.user.user.userInfo===null){
                    alert("로그인이 필요합니다.")
                    return;
               }


               //글 작성
          },

     },
     fetch({store, params}){
          return store.dispatch('boards/board/loadBoard',params.cPage)
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