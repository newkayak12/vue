<template>
     <div style="display: flex; flex-direction: column; align-items: center" class="boards">


     </div>
</template>

<script>
export default {
     data(){
          return{

          }
     },
     computed:{

     },
     fetch({store, params}){
          store.dispatch('board/board/loadBoard',params.boardId)
     },
     methods:{

     }
}

</script>

<style scoped>

</style>