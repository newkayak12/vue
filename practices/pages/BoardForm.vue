<template>
     <div style="margin:20px; padding:20px; display: flex; flex-direction: column; justify-content: center; align-content: center">
          <form @submit.prevent="onSubmitBoardForm">
               <table>
                    <tr>
                         <th>
                              <h4>
                                   제목
                              </h4>
                         </th>
                         <td>
                              <input type="text" maxlength="30" v-model="boardTitle" style="padding:10px">
                         </td>
                         <td> 작성자 : {{nickname}}</td>
                    </tr>
                    <tr>
                         <th></th>
                         <td colspan="2" style="text-align: left; vertical-align: center">
                              <div style="padding: 10px; display: flex;  align-content: center">
                                   <v-btn type="button"  @click.prevent="onAddImg">파일 첨부</v-btn>
                                   <span style=" width: 80%; display: flex; align-content: center; padding-top: 5px;">

                                        <div style="padding: 0px 5px 5px 5px; margin: 5px; overflow: hidden; width:200px;  text-overflow: ellipsis;" v-for="imgPiece in this.photo" :key="imgPiece.idx">
                                             {{ imgPiece.src }}
                                        </div>

                                   </span>
                              </div>
                         </td>
                    </tr>
                    <tr>
                         <th>내용</th>
                         <td colspan="2" >
                              <textarea v-model="boardContent" cols="30" rows="10" style="padding: 10px"></textarea>
                         </td>
                    </tr>
     <!--               <tr>-->
     <!--                    <th></th>-->
     <!--                    <td></td>-->
     <!--               </tr>-->
               </table>
               <div style="height: fit-content; width: 80%; padding: 0px 20px 20px 20px; margin: 10px">
                         <input type="file" multiple style="display: none" ref="addImg" @change="onAddedImg">
                    <div v-if="showImg" style="height: 200px">
                         <p style="font-size: 12px">이미지 미리 보기</p>
                         <Img v-for="imgPiece in this.photo" :key="imgPiece.idx" :imgPiece ="imgPiece" :photo="photo" :showImg="showImg"/>
                    </div>
               </div>
               <div style="margin: 20px; padding: 10px; display: flex; justify-content: center;  width: 80%">
<!--                    <v-btn type="button"  :to="link" tag="button">취소</v-btn>-->
                    <nuxt-link  tag="button" :to="link" type="button" class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default">취소</nuxt-link>
                    <!--  nuxt-link를 렌더할 태그를 고를 수 있다. -->
                    <nuxt-link tag="button" :to="link" type="submit" style="background: royalblue; color: white" class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default" @click.native="onSubmitBoardForm">
                         작성
                    </nuxt-link>
               </div>
          </form>
     </div>
</template>

<script>
import Img from "@/components/board/Img";
export default {
     components:{
          Img
     },
     data(){
          return{
               showImg:false,
               link:`/boards/1`,
               boardTitle:'',
               boardContent:'',
               boardWriter:'',
               photo:[],

          }
     },

     computed:{
       nickname(){
            let nickname = this.$store.state.user.user.userInfo.nickname;
            this.boardWriter = nickname
            return nickname
       }
     },
     methods:{
          onAddImg(){
               this.$refs.addImg.click()

          },
          onAddedImg(event){
               let img = this.$refs.addImg.files
               if(img["length"]>2){
                    this.photo = [];
                    alert("이미지는 2개까지 가능합니다.")
                    return
               }

               //유사 배열 객체 순회하기 (프로토 타입의 call로 접근해서 배열처럼 접근한다.)
               Array.prototype.forEach.call(img, (v,i)=>{
                    let reader = new FileReader();
                    let img = {
                         idx:Math.random()*100000+10,
                         src:v.name,
                    }

                    reader.onload = function(e){
                         img.preview = e.target.result
                    }
                  reader.readAsDataURL(v)

                    this.photo.push(img)

               })

               //뷰를 강제로 렌더링시켜서 빠르게 이미지를 뜨게 하는데..
               //이게 뷰는 강제로 재렌더를 시킬 방법이 이거 말고는 떠오르질 않는단말이지.

                         this.showImg=false
                     let timer = setTimeout(()=>{
                         this.showImg = true
                   },10)



          },
          onSubmitBoardForm(){
               if(this.boardId===''){
                    let temp = this.photo
                    temp.forEach((v,i)=>{
                         delete v.idx
                         delete v.preview
                    })

                    let boardOne = {
                         boardId: Math.floor(Math.random()*100000+30),
                         boardTitle:this.boardTitle,
                         boardContent:this.boardContent,
                         boardWriter:this.boardWriter,
                         viewCount:0,
                         writtenDate:new Date(),
                         photo:temp,
                         replyCount : 0,
                         likeCount: 0,
                         dislikeCount:0,
                         likeOrDislike:{
                              email:'newkayak12',
                              like:null,
                              dislike:null
                         }
                    }
                    return this.$store.dispatch('boards/board/writeBoard',boardOne)
               }

          },


     },
     middleware:'gotoBoard',
     watch:{
          photo(){
               if(this.photo.length===0){
                    this.showImg=false
               }

          }


     }
}
</script>

<style scoped>
table{
     width: 80%;
     border: 1px black solid;
     border-collapse: collapse;
     text-align: center;
     margin: 15px
}
td input{
     box-shadow: 1px 1px gray;
     width: 100%;

}
td textarea{
     width: 100%;
}
tr td{
     /*padding:30px;*/
     border:1px black solid;
}
tr:nth-child(1) td:nth-child(2){
     padding:5px;
     
}
tr td:nth-child(2){
     width: 60%;
}
tr td:nth-child(3){
     width: 30%;
}
tr th{
     padding: 10px;
     width: 10%;


     color: white;
     background: royalblue;
}
button{
     margin: 5px 10px 5px 10px;
}

</style>