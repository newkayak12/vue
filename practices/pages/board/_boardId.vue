<template>
     <div style="display: flex; flex-direction: column; align-items: center" class="boards">
          <BoardMain :board="board"  style="width: 90%" />
          <CommentForm style="width: 90%" :level ="1" :refId="-1" :boardId="board.boardId"/>
          <CommentList :commentList = "comment" style="width: 90%"/>
     </div>
</template>

<script>
import BoardMain from '@/components/board/boardOne/boardMain'
import CommentForm from "@/components/board/boardOne/comment/CommentForm";
import CommentList from "@/components/board/boardOne/comment/CommentList";
export default {
     components:{
          BoardMain,
          CommentForm,
          CommentList
     },
     data(){
          return{

          }
     },
     computed:{
          board(){
               console.log(this.$store.state.board.board.boardOne.boardId)
               return this.$store.state.board.board.boardOne
          },
          comment(){
               return this.$store.state.comment.comment.comments
          },


     },
     fetch({store, params}){
               store.dispatch('comment/comment/loadComment',params.boardId)
          return store.dispatch('board/board/loadBoard',params.boardId)
     },
     methods:{

     }
}

</script>

<style scoped>

</style>