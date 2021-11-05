<template>
     <div style="margin-bottom: 20px">

          <v-card >
               <div v-if="post.RetweetId && post.Retweet">
                    <v-subheader>{{post.User.nickname}}님이 리트윗하셨습니다.</v-subheader>
                    <v-card style="margin:0 20px">
                         <post-content :post="post.Retweet"/>
                    </v-card>
               </div>
               <post-content :post="post"/>
               <v-card-actions>
                    <v-btn text color="orange" @click="onRetweet">
                         <v-icon>mdi-chart-timeline-variant</v-icon>
                    </v-btn>
<!--                    -->
                    <v-btn text color="orange" @click="onClickHeart">
                         <v-icon >{{heartIcon}}</v-icon>
                    </v-btn>
<!--                    -->
                    <v-btn text color="orange" @click="onToggleComment">
                         <v-icon>mdi-comment-outline</v-icon>
                    </v-btn>
<!--                    -->
                    <v-menu offset-y open-on-hover>
                         <template v-slot:activator="{ on }">
                              <v-btn text color="orange" v-on="on">
                                   <v-icon>mdi-dots-horizontal</v-icon>
                              </v-btn>
                         </template>

                         <div style="background: white">
                              <v-btn dark color="red" @click="onRemovePost">삭제</v-btn>
                              <v-btn dark color="orange" @click="onEditPost">수정</v-btn>
                         </div>
                    </v-menu>
<!--                    -->
               </v-card-actions>
          </v-card>

          <template v-if="commentOpened">
               <comment-form :post-id="post.id" />
               <v-list>

                    <v-list-item v-for="c in post.Comments" :key="c.id">
                         <v-list-item-avatar color="teal">
                              <span>{{c.User.nickname[0]}}</span>
                         </v-list-item-avatar>
                         <v-list-item-content>
                              <h3>{{c.User.nickname}}</h3>
                              <div>{{c.content}}</div>
                         </v-list-item-content>
                    </v-list-item>
               </v-list>
          </template>
     </div>



</template>

<script>
import CommentForm from "~/components/CommentForm";
import PostContent from "~/components/PostContent";
export default {
     components:{PostContent, CommentForm},
     props:{
          post:{
               type:Object,
               required:true,
          },
     },
     computed:{
          me(){
            return this.$store.state.Users.me;
          },
          liked(){
               const me = this.$store.state.Users.me;
               const liked = (this.post.Likers || []).find(v=>v.id===(me&&me.id));
               return !!liked;
          },
          heartIcon(){
               return this.liked? 'mdi-heart' : `mdi-heart-outline`;
          }
     },
     methods:{
          onRemovePost(){
               console.log("onRemovePost")
               this.$store.dispatch('Posts/remove',{postId:this.post.id})

          },
          onEditPost(){

          },
          onToggleComment(){
               console.log()
               if(!this.commentOpened){
                    this.$store.dispatch('Posts/loadComment',{
                         postId:this.post.id
                    })
               }
               this.commentOpened = !this.commentOpened;
          },
          onRetweet(){
            if(!this.me){
                 return alert('로그인이 필요합니다.')
            }
            this.$store.dispatch('Posts/retweet',{
                 postId: this.post.id
            });
          },
          onClickHeart(){
               if(!this.me){
               }
               if(this.liked){
                    return this.$store.dispatch('Posts/unlikePost',{
                         postId:this.post.id
                    })
               }

               return this.$store.dispatch('Posts/likePost',{
                    postId:this.post.id,
               })
          }
     },
     data(){
          return{
               commentOpened:false,
          }
     }
     /*
          Nuxt를 써서 따로 쓸 일은 없었는데
      */
     ,asyncData(){
          return{}
     }
     /*
          와 같이 비동기 작업을 위한 데이터가 있다. Data와 함쳐진다.
          원래 fetch와 asyncData를 자주 쓰는데 Store의 state를 써서 이번에는 안 다뤘다.
          컴포넌트의 데이터를 비동기로 처리할 때 주로 asyncData를 사용
      */
}

</script>

<style scoped>
     a{
          color:inherit;
          text-decoration: none;
     }
</style>