<template>
     <div style="display: flex; flex-direction: column; align-items: center" class="boards">
          <BoardMain :board="board" style="width: 90%" />

     </div>
</template>

<script>
import BoardMain from '@/components/board/boardOne/boardMain'
export default {
     components:{BoardMain},
     data(){
          return{

          }
     },
     computed:{
          board(){
               return this.$store.state.board.board.boardOne
          }
     },
     fetch({store, params}){
          return store.dispatch('board/board/loadBoard',params.boardId)
     },
     methods:{

     }
}

</script>

<style scoped>

</style>