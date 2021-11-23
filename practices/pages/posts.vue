<template>
     <div>
          <v-container>
               <div  style="margin: 10px; padding: 10px; background: royalblue; border-radius: 5px;" v-if="this.$store.state.user.user.userInfo">
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
          },
          hasMorePost(){
               return this.$store.state.posts.post.hasMorePost
          }
     },
     mounted() {
          window.addEventListener('scroll',this.onScroll)
     },
     beforeDestroy() {
          window.addEventListener('scroll',this.onScroll)
     },
     methods:{
          onScroll(){
               /*
                    document.documentElement.clientHeight : 그냥 현재 보이는 화면 최상단에서 스크롤 무시하고 최하단까지( 당장 보이는 부분 )
                    document.documentElement.scrollHeight : 진짜 제일 위부터 스크롤 해서 보일 부분의 최하단까지
                                        ** (document.documentElementClientHeight + window.scrollY === document.documentElement.scrollHeight) => 스크롤을 최하단으로 내렸을 경우우
                    window.scrollY : 스크롤 바 시작점에서 움직이는 스크롤 바의 상단지점 간의 거리
                */
               if(window.scrollY+document.documentElement.clientHeight > document.documentElement.scrollHeight - 400){
                    if(this.hasMorePost){
                         this.$store.dispatch('posts/post/postsInfiniteScroll')
                    }
               }
          }
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