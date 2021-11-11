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
     head(){
          return{
               title: `${this.post.User.nickname}`,
               meta:[{
                    charset:'utf-8'
               },{
                    name: 'description', content:`${this.post.content}`
               },{
                    hid: 'ogtitle', name:'og:title', content: `${this.post.User.nickname}의 게시글`
               },{
                    hid: 'ogdesc',  name:'og:description', content: `${this.post.content}`
               },{
                    hid: 'ogimage', property:'og:image', content: this.post.Images[0]? this.post.Images[0].src :'https://vue.nodebird.com/vue-nodebird.png',
               },{
                    hid: 'ogurl',   property:'og:url', content:`https://vue.nodebird.com/post/${this.post.id}`
               }],
               link:[{
                    rel: 'shortcut icon', href: '/vue-nodebird.png'},
               ]
          }
     }

};
</script>

<style>
</style>