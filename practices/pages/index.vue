<template>
     <div>
          <posts/>
     </div>
</template>

<script>
import posts from "@/pages/posts";
export default {
     components:{
          posts
     },
     fetch({store}){
          return store.dispatch('boards/board/loadBoard')
     }

}
</script>

<style scoped>

</style>