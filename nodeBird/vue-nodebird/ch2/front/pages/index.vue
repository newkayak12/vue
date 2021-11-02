<template>
<v-container>
     <post-form v-if="me" />
     <div>
          <post-card v-for="p in mainPosts" :key="p.id" :post="p"/>
     </div>
</v-container>
</template>

<script>
import PostCard from '~/components/PostCard'
import PostForm from "~/components/PostForm";
export default {
     components:{
          PostCard, PostForm
     },
     computed:{
          me(){
               return this.$store.state.Use2r.me
          },
          mainPosts(){
               return this.$store.state.Posts.mainPosts
          }
     }
}
</script>

<style scoped>

</style>