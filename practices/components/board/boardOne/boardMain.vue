<template>
     <div style="border-bottom: 1px gray solid">
          <table>
               <tr>
                    <td>
                         <h3>
                              제목 : {{board.boardTitle}}
                              <span>[{{board.replyCount}}]</span>
                         </h3>
                    </td>
                    <td>
                         <h4>
                              작성자 : {{board.boardWriter}}
                         </h4>
                    </td>
                    <td>
                         <h4>
                              조회 수 : {{board.viewCount}}
                         </h4>
                    </td>
                    <td>
                         <h4>
                              작성일 : {{days}}
                         </h4>
                    </td>
                    <td>
                         <span @click="onThumbUp">
                              <v-icon>
                                   {{thumbUpFlag}}
                              </v-icon>
                              {{board.likeCount}}
                         </span>
                         <span @click="onThumbDown">
                              <v-icon>
                                  {{thumbDownFlag}}
                              </v-icon>
                              {{board.dislikeCount}}
                         </span>

                    </td>
               </tr>
               <tr>
                    <td colspan="5">
                         <div  style="display: flex; flex-direction: row;justify-content: space-around">
                              <v-card v-for="photoOne in board.photo" :key="photoOne.src" width="350px" height="350px">
                                   {{photoOne}}
                              </v-card>
                         </div>
                         <div id="boardContent">
                              {{board.boardContent}}
                         </div>
                    </td>
               </tr>
               <tr>
                    <td colspan="5"  style="text-align: end">
                         <div style="padding-top: 20px">
                              <v-btn :style="deleteIconColor" style="margin-left: 5px; margin-right: 10px" :disabled="btnDisabled"  @click.native="onModifyBoard" :to="link" nuxt>
                                   <v-icon style="margin: 5px" :style="deleteIconColor">
                                         mdi-format-align-justify
                                   </v-icon>
                                   수정하기
                              </v-btn >
                              <v-btn :style="deleteIconColor" style="margin-left: 10px; margin-left: 5px" :disabled="btnDisabled" @click.native="onDeleteBoard" :to="link" nuxt
                              >
                                   <v-icon style="margin: 5px" :style="deleteIconColor">
                                        mdi-delete-variant
                                   </v-icon>
                                   삭제하기
                              </v-btn>
                         </div>
                    </td>
               </tr>
          </table>

     </div>
</template>

<script>
function getDiff(first, second){
     let diff = Math.ceil((second-first)/(1000*60*60*24))
     let date = first.toLocaleString()
     return diff===1? date.substring(0, date.indexOf(date.substr(-12,3))): `${diff} 일 전`;
}
export default {
    props:{
         board:{
              type:Object,
              required:true,
         },
    },
     data(){
       return{
            link:'/boards/1',
            thumbUpFlag:'mdi-thumb-up-outline',
            thumbDownFlag:'mdi-thumb-down-outline',
            btnDisabled : true
       }
     },
     computed:{
          days(){
               let date  = this.board.writtenDate;
               let today = new Date()
               return getDiff(date,today)
          },
          deleteIconColor(){
               let login = this.$store.state.user.user.userInfo!=null? true:false
               if(!login){
                    this.btnDisabled = true
                    return "color : #C2BABAFF";
               }
               let isItMine = this.$store.state.user.user.userInfo.nickname===this.board.boardWriter? true:false
                    if(isItMine){
                         this.btnDisabled = false
                    } else {
                         this.btnDisabled = true
                    }
               return "color : "+ (login&&isItMine? "black":"#C2BABAFF")

          }

     },
     fetch(){
          this.thumbUp()
          this.thumbDown()
          return
     },
     methods:{
          thumbUp(){
               if((this.$store.state.user.user.userInfo===null)||(this.board.likeOrDislike.email !== this.$store.state.user.user.userInfo.nickname)){
                    this.thumbUpFlag= "mdi-thumb-up-outline";
                    return;
               }
               let flag = this.board.likeOrDislike.like === true? true:false
               this.thumbUpFlag = flag? "mdi-thumb-up":"mdi-thumb-up-outline"
               return
          },
          thumbDown(){
               if((this.$store.state.user.user.userInfo===null)||(this.board.likeOrDislike.email !== this.$store.state.user.user.userInfo.nickname)){
                    this.thumbDownFlag="mdi-thumb-down-outline";
                    return
               }
               let flag = this.board.likeOrDislike.dislike === true? true:false
               this.thumbDownFlag=flag? "mdi-thumb-down":"mdi-thumb-down-outline"
               return
          },
          onThumbUp(){
               if(this.$store.state.user.user.userInfo===null){
                    alert("로그인이 필요한 서비스입니다.")
                    return
               }
               if(this.board.likeOrDislike.like===true){
                    //좋아요만 해제
                    this.thumbUpFlag = "mdi-thumb-up-outline"
                    this.$store.dispatch('board/board/detachThumbUp',{flag:false, boardId:this.board.boardId})
                    return;
               }
                    this.$store.dispatch('board/board/onThumbUp',{flag:true, boardId:this.board.boardId})
                    this.thumbDownFlag = "mdi-thumb-down-outline"
                    this.thumbUpFlag = "mdi-thumb-up"
               //손가락질
          },
          onThumbDown(){
               if(this.$store.state.user.user.userInfo===null){
                    alert("로그인이 필요한 서비스입니다.")
                    return
               }
               if(this.board.likeOrDislike.dislike===true){
                    this.thumbDownFlag = "mdi-thumb-down-outline"
                    this.$store.dispatch('board/board/detachThumbDown',{flag:false, boardId:this.board.boardId})
                    //안좋아요만 해제
                    return;
               }
                    this.$store.dispatch('board/board/onThumbDown',{flag:true, boardId:this.board.boardId})
                    this.thumbDownFlag = "mdi-thumb-down"
                    this.thumbUpFlag = "mdi-thumb-up-outline"
               //손가락질
           },
          onDeleteBoard(){
               let boardId = this.board.boardId
               return this.$store.commit('boards/board/deleteBoard',boardId);
          },
          onModifyBoard(){
                    //modify
          }
     }
}

</script>

<style scoped>
table{
     margin:20px 0 20px 0;
     padding :10px;
     width: 100%;
     border-collapse: collapse;
}
td{
     padding : 5px;




}
tr:nth-child(1) td{
     border-top:1px gray solid;
     border-bottom:1px gray solid;
}
tr:nth-child(1) td *{
     text-align: center;
     padding:15px;
}
tr:nth-child(2) td{
     border-top:1px gray solid;
     border-bottom:1px gray solid;
     padding: 40px;
}
#boardContent{
     margin: 20px;
     padding:40px;
}
table+div span{
     margin: 0 10px 0 10px;
     padding: 0 10px 0 10px;
}
</style>