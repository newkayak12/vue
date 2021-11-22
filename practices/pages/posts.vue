<template>
     <div>
          <v-container>
               <div  style="margin: 10px; padding: 10px; background: royalblue; border-radius: 5px;">
                  <PostForm />
               </div>
          </v-container>
          <v-container>
               <PostCard v-for="postsPiece in posts" :key="postsPiece.postId" style="margin: 10px; padding: 10px; background: royalblue; border-radius: 5px;" :postsPiece="postsPiece"/>
          </v-container>
     </div>
</template>

<script>
import PostCard from "@/components/post/PostCard";
import PostForm from "@/components/post/PostForm";
export default {
     components:{
          PostCard,
          PostForm
     },
     data(){
          return {

          }
     },
     computed:{
       posts(){
            return this.$store.state.posts.post.post;
       }
     },
     methods:{

     },
     fetch({store}){
          return store.dispatch("posts/post/loadPosts")
     }

}
</script>

<style>
 *{
      box-sizing: border-box;
 }
</style>