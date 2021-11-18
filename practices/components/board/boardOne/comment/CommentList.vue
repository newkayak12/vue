<template>
     <div style="border-top: 1px gray solid; padding-top: 20px">
           <CommentOne v-for="comment in commentList" :key="comment.commentId" :commentOne="comment" />
     </div>
</template>

<script>
import CommentOne from "@/components/board/boardOne/comment/CommentOne";

export default {
     components:{
          CommentOne
     },
    props:{
         commentList:{
              type:Array,
              required:false
         }
    }
}
</script>

<style scoped>


</style>