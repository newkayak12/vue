<template>
     <div style="display: flex; flex-direction: column; align-items: center" class="boards">
          <div v-if="isView">
               <BoardMain :board="board"  style="width: 90%" :isViewChanger = "isViewChanger"/>
               <CommentForm style="width: 90%" :level ="1" :refId="-1" :boardId="board.boardId"/>
               <CommentList :commentList = "comment" style="width: 90%"/>
          </div>
          <div v-else style="width: 100%; display: flex; justify-content: center">
               <BoardForm :isView="isView" :isViewChanger = "isViewChanger" style="width: 80%" />
          </div>
     </div>
</template>

<script>
import BoardMain from '@/components/board/boardOne/boardMain'
import CommentForm from "@/components/board/boardOne/comment/CommentForm";
import CommentList from "@/components/board/boardOne/comment/CommentList";
import BoardForm from "@/pages/BoardForm";
export default {
     components:{
          BoardMain,
          CommentForm,
          CommentList,
          BoardForm
     },
     data(){
          return{
               isView:true,

          }
     },
     computed:{
          board(){
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
          isViewChanger(flag){
               this.isView = flag
          }


     }
}

</script>

<style scoped>

</style>