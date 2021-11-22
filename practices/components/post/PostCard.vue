<template>
     <div>
          <v-card style="padding: 10px; background: white">
               <div v-if="showPostForm">
                    <PostContentHeader :postsPiece="postsPiece" style="background: white" :isRt="false"/>

                    <div v-if="postsPiece.rt" style="display: flex; justify-content: center; width: 100%">
                         <v-card    style="margin: 20px; width: 70%; height: 50%" >
                              <PostContentHeader :postsPiece="postsPiece.rt" :isRt="true" />
                              <PostContent :postsPiece="postsPiece.rt"/>
                         </v-card>
                    </div>

                    <PostContent :postsPiece="postsPiece" style="background: white;"/>
                    <v-card-actions style="margin:5px 10px; display: flex; justify-content: start; background: white;">
                         <v-btn text color="white" style="background: royalblue" @click="onRetweet">
                              <v-icon>mdi-chart-timeline-variant</v-icon>
     <!--                         <v-icon>mdi mdi-twitter-retweet</v-icon>-->
                         </v-btn>
                         <v-btn text color="white" style="background: royalblue" @click="onHeart">
                              <v-icon >{{heartIcon}}</v-icon>
                         </v-btn>
                         <v-btn text color="white" style="background: royalblue" @click="onShowPostForm">
                              <v-icon>mdi-comment-outline</v-icon>
                         </v-btn>
                         <v-menu offset-y open-on-hover >
                              <template v-slot:activator="{on}">
                                   <v-btn text color="white" style="background: royalblue; margin-left: 10px;" v-on="on">
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                   </v-btn>
                              </template>

                              <div>
                                   <v-btn>삭제</v-btn>
                                   <v-btn>수정</v-btn>
                              </div>
                         </v-menu>
                    </v-card-actions>
               </div>
               <div style="margin-top:10px; display: flex; justify-content: center;"  v-else>
                    <PostForm  style="width: 80%;" />
               </div>
          </v-card>

     </div>
</template>

<script>
import PostContentHeader from "@/components/post/PostContentHeader";
import PostContent from '@/components/post/PostContent'
import PostForm from "@/components/post/PostForm";
export default {

     components:{
          PostContentHeader,
          PostContent,
          PostForm
     },
     data() {
          return {
               showPostForm: true,
               heartIcon :this.postsPiece.iLiked? 'mdi-heart' : `mdi-heart-outline`,
          }
     },
     computed:{

     },
     props:{
          postsPiece:{
               type:Object
          }
     },
     methods:{
          onShowPostForm(){
               this.showPostForm = this.showPostForm===false? true:false
          },
          onRetweet(){
               if(confirm('해당 글을 리트윗 하겠습니까?')){
                    let post = {
                         title : `'${this.postsPiece.writer}'님의 글 리트윗`,
                         writer: this.$store.state.user.user.userInfo.nickname,
                         writtenDate : new Date(),
                         content:'',
                         iLiked:null,
                         rt : (typeof this.postsPiece.rt!=='undefined'&& this.postsPiece.rt!==null )? this.postsPiece.rt:this.postsPiece,
                         photo:[],
                         reply:[]
                    }
                    this.$store.dispatch('posts/post/writePost',post)
               } else {

               }
          },
          onHeart(){
               let heartFlag = this.postsPiece.iLiked? false:true
               this.$store.dispatch('posts/post/iLiked',{postId:this.postsPiece.postId, flag:heartFlag})
               this.heartIcon= heartFlag? 'mdi-heart' : `mdi-heart-outline`
          }

     }
}
</script>

<style scoped>

</style>