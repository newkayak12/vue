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
                         <v-btn text color="white" style="background: royalblue" @click="onRetweet" v-if="amILoggedin&&!isthisMyPost">
                              <v-icon>mdi-chart-timeline-variant</v-icon>
     <!--                         <v-icon>mdi mdi-twitter-retweet</v-icon>-->
                         </v-btn>
                         <v-btn text color="white" style="background: royalblue" @click="onHeart" v-if="amILoggedin&&!isthisMyPost">
                              <v-icon >{{heartIcon}}</v-icon>
                         </v-btn>
                         <v-btn text color="white" style="background: royalblue" @click="onReply" >
                              <v-icon>mdi-comment-outline</v-icon>
                         </v-btn>
                         <v-menu offset-y open-on-hover v-if="amILoggedin&&isthisMyPost">
                              <template v-slot:activator="{on}">
                                   <v-btn text color="white" style="background: royalblue; margin-left: 10px;" v-on="on">
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                   </v-btn>
                              </template>

                              <div>
                                   <v-btn text @click="onDeletePost" style="background: #da1c54; color: white">삭제</v-btn>
                                   <v-btn text @click="onShowPostForm" :style="rtCannotBeModified? 'background:white;':'background: royalblue; color: white'" :disabled="rtCannotBeModified">수정</v-btn>
                              </div>
                         </v-menu>
                    </v-card-actions>
               </div>
               <div style="margin-top:10px; display: flex; justify-content: center;"  v-else>
                    <PostForm  style="width: 80%;"  :postsPiece="postsPiece" :onShowPostForm="onShowPostForm" >
                         <template v-slot:cancelbtn >
                              <v-btn @click="onShowPostForm" style="margin-right: 10px">취소</v-btn>
                         </template>
                    </PostForm>
               </div>
               <div style="border-top:1px #c5b7b7 solid; margin-top:20px; padding: 20px" v-if="showComment">
                    <CommentForm v-if="amILoggedin"  :postsPieceId="postsPiece.postId"/>
                    <div style="margin-top:20px; padding:20px">
                         <CommentOne v-for="commentOne in this.commentList" :key="commentOne.postCommentId" :commentOne="commentOne"/>
<!--                         this.postsPiece.comment-->
                    </div>
                    <div v-if="hasMoreComment"  style="margin:5px; padding:5px 20px 5px 20px">
                         <v-btn style="width: 100%; background-color: royalblue; color: white" @click="onLoadMoreComment">더보기</v-btn>
                    </div>
               </div>

          </v-card>

     </div>
</template>

<script>
import PostContentHeader from "@/components/post/PostContentHeader";
import PostContent from '@/components/post/PostContent'
import PostForm from "@/components/post/PostForm";
import CommentForm from "@/components/post/comment/CommentForm";
import CommentOne from "@/components/post/comment/CommentOne";
export default {

     components:{
          PostContentHeader,
          PostContent,
          PostForm,
          CommentForm,
          CommentOne
     },
     data() {
          return {
               showPostForm: true,
               heartIcon :this.postsPiece.iLiked? 'mdi-heart' : `mdi-heart-outline`,
               showComment:false,
               commentCount : 1,
          }
     },
     computed:{
          rtCannotBeModified(){
               let flag = this.postsPiece.rt !==null && typeof this.postsPiece.rt !=='undefined'? true:false
               return flag
          },
          isthisMyPost(){
               let userFlag = this.$store.state.user.user.userInfo !== null? true:false;
               let notMyPostFlag =true
               if(this.$store.state.user.user.userInfo!==null){
                    notMyPostFlag= this.$store.state.user.user.userInfo.nickname===this.postsPiece.writer? true :false;
               }
                    return userFlag&&notMyPostFlag

          },
          amILoggedin(){
               return this.$store.state.user.user.userInfo!==null? true:false
          },
          hasMoreComment(){
               return this.postsPiece.comment.length-this.commentList.length>0? true:false
          },
          commentList(){
               let commentCopied = this.postsPiece.comment.slice()
               let count = this.commentCount*3
               return commentCopied.slice(0,count)
          }


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
                         postId:Math.ceil(Math.random()*100000)+20,
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
          },
          onDeletePost(){
               let postId = this.postsPiece.postId
               this.$store.dispatch('posts/post/deletePost', postId)
          },
          onReply(){
               return this.showComment=this.showComment === true? false:true;
          },
          onLoadMoreComment(){
               return Math.ceil(this.postsPiece.comment.length/3)>=this.commentCount? this.commentCount+=1:this.commentCount
          },
     },
}
</script>

<style scoped>

</style>