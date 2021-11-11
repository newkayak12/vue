<template>
     <div>
          <v-container v-if="post">
               <post-card :post="post" />
          </v-container>
          <div v-else style="text-align: center">
               해당 아이디의 게시글이 존재하지 않습니다.
          </div>
     </div>
</template>

<script>
import PostCard from '~/components/PostCard';
export default {
     components: {
          PostCard,
     },
     computed: {
          post() {
               return this.$store.state.Posts.mainPosts.find(v => v.id === parseInt(this.$route.params.id, 10));
               // return this.$store.state.Posts.mainPosts.data;
          },
     },
     fetch({store, params}){
          return store.dispatch('Posts/loadPost', params.id)
     },
     mounted() {
          console.log("afterMounted")
          console.log(this.post)
     },

};
</script>

<style>
</style>