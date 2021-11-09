<template>
     <v-container>
          <div>
               <post-card v-for="p in mainPosts" :key="p.id" :post="p"/>
          </div>
     </v-container>
</template>

<script>
import PostCard from '~/components/PostCard'
export default {
     components:{
          PostCard,
     },
     computed:{
          mainPosts(){
               return this.$store.state.Posts.mainPosts
          }
     },
     fetch({store, params}){
          //fetch에서는 this.$route.params.id 안됨
          return store.dispatch('Posts/loadHashtagPosts',{
               hashtag : encodeURIComponent(params.id),
               reset : true
          });
     },
     mounted(){
          //created()는 window를 쓸 수 없음 >> 화면에 붙기 전에는 Documents나 Window를 사용할 수 없다.
          window.addEventListener('scroll', this.onScroll)
     },
     beforeDestroy() {
          window.removeEventListener('scroll', this.onScroll)
     },
     methods:{
          onScroll(){

               /*
                    document.documentElement.clientHeight : 그냥 현재 보이는 화면 최상단에서 스크롤 무시하고 최하단까지( 당장 보이는 부분 )
                    document.documentElement.scrollHeight : 진짜 제일 위부터 스크롤 해서 보일 부분의 최하단까지
                                        ** (document.documentElementClientHeight + window.scrollY === document.documentElement.scrollHeight) => 스크롤을 최하단으로 내렸을 경우우
                    window.scrollY : 스크롤 바 시작점에서 움직이는 스크롤 바의 상단지점 간의 거리
                */

               if(window.scrollY+document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
                    if(this.hasMorePost){
                         this.$store.dispatch('Posts/loadPosts');
                    }
               }

          }
     },
}
</script>

<style scoped>

</style>