<template>
     <div>
          <v-card style="padding: 10px; background: white">
               <PostContent :postsPiece="postsPiece" style="background: white"/>
               <v-card-actions style="margin:5px 10px; display: flex; justify-content: start; background: white;">
                    <v-btn text color="white" style="background: royalblue">
                         <v-icon>mdi-chart-timeline-variant</v-icon>
                    </v-btn>
                    <v-btn text color="white" style="background: royalblue">
                         <v-icon >{{heartIcon}}</v-icon>
                    </v-btn>
                    <v-btn text color="white" style="background: royalblue">
                         <v-icon>mdi-comment-outline</v-icon>
                    </v-btn>
                    <v-btn text color="white" style="background: royalblue">
                         <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
               </v-card-actions>
          </v-card>
     </div>
</template>

<script>
import PostContent from '@/components/post/PostContent'
export default {

     components:{PostContent},
     computed:{
       heartIcon(){
               return this.postsPiece.iLiked? 'mdi-heart' : `mdi-heart-outline`;
       }
     },
     props:{
          postsPiece:{
               type:Object
          }
     }
}
</script>

<style scoped>

</style>