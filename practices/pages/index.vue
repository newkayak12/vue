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
          return store.dispatch('posts/post/loadPosts')
     }

}
</script>

<style scoped>

</style>