<template>
     <div style="margin-bottom: 20px">

          <v-card >
               <v-card-title>
                    <h3>
                         <nuxt-link :to="'/user/'+post.id" >
                              {{post.User.nickname}}
                        </nuxt-link>
                    </h3>
               </v-card-title>

               <v-card-text>
                    <div>

<!--                         <div>{{post.content}}</div>-->
                         <div :to="'/post/'+post.id">{{post.content}}</div>
                    </div>
                    <post-images :images="post.Images || []"/>
               </v-card-text>

               <v-card-actions>
                    <v-btn text color="orange">
                         <v-icon>mdi-chart-timeline-variant</v-icon>
                    </v-btn>
                    <v-btn text color="orange">
                         <v-icon>mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-btn text color="orange" @click="onToggleComment">
                         <v-icon>mdi-comment-outline</v-icon>
                    </v-btn>
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
               </v-card-actions>
          </v-card>

          <template v-if="commentOpened">
<!--template은 react에서 fragment역할을 하는     -->
               <comment-form :post-id="post.id" />
               <v-list>
                    <v-list-item v-for=" c in post.Comments" :key="c.id" >
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
import PostImages from "~/components/PostImages";
export default {
     components:{PostImages, CommentForm},
     props:{
          post:{
               type:Object,
               required:true,
          },
     },
     methods:{
          onRemovePost(){
               console.log("onRemovePost")
               this.$store.dispatch('Posts/remove',{postId:this.post.id})

          },
          onEditPost(){

          },
          onToggleComment(){
               if(!this.commentOpened){
                    this.$store.dispatch('Posts/loadComment',{
                         postId:this.post.id
                    })
               }
               this.commentOpened = !this.commentOpened;

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