<template>
     <table>
          <tr>
               <th style="font-size: 0.3vw">번호</th>
               <th style="font-size: 0.3vw">제목</th>
               <th style="font-size: 0.3vw" >
                    작성자

               </th>
               <th style="font-size: 0.3vw" @click="onSortViewCount">
                    조회수
                         <span v-show="sortFlag==='viewCount'" ref="sortViewCount" class="v-icon notranslate mdi mdi-chevron-up theme--light"/>

               </th>
               <th style="font-size: 0.3vw" @click="onSortWrittenDate">
                    작성일
                    <span v-show="sortFlag==='writer'" ref="sortWrittenDate" class="v-icon notranslate mdi mdi-chevron-up theme--light" />
               </th>
          </tr>
               <BoardTr v-for="boardTr in boardList" :key="boardTr.boardId" :boardTr ="boardTr" />
     </table>
</template>

<script>
let sortEnum = {
    ASC:'ASC',
    DESC:'DESC',
    NONE:'NONE'
}


import BoardTr from "@/components/board/BoardTr";
export default {
     components:{
          BoardTr
     },
     props:{
       boardList:{
            type:Array
       }
     },
     data(){
          return{
               sortFlag:'',
               sortingWay:''
          }
     },
     computed:{

     },
     fetch({store}){

     },
     methods:{
          onSortViewCount(){
               const vc =  this.$refs.sortViewCount;
               if(this.sortFlag !== 'viewCount'){
                    this.sortFlag = 'viewCount'
                    this.sortingWay = sortEnum.NONE
               }
               if(this.sortingWay===sortEnum.NONE){
                    vc.style.display="inline-block"
                    vc.style.transform="rotate(0deg)"
                    this.sortingWay = sortEnum.ASC
                    this.$store.dispatch('boards/board/sortingBoard',{standard: 'viewCount', sortingWay:sortEnum.ASC})
                    return
               }
               if(this.sortingWay===sortEnum.ASC){
                    vc.style.transform="rotate(180deg)"
                    this.sortingWay = sortEnum.DESC
                    this.$store.dispatch('boards/board/sortingBoard',{standard: 'viewCount',  sortingWay:sortEnum.DESC})
                    return
               }

               vc.style.display="none"
               this.sortingWay = sortEnum.NONE
               this.$store.dispatch('boards/board/sortingBoard',{standard: 'viewCount',  sortingWay:sortEnum.NONE})


          },
          onSortWrittenDate(){
               const wc = this.$refs.sortWrittenDate
               if(this.sortFlag !== 'writtenDate'){
                    this.sortFlag = 'writtenDate'
                    this.sortingWay = sortEnum.NONE
               }
               if(this.sortingWay===sortEnum.NONE){
                    wc.style.display="inline-block"
                    wc.style.transform="rotate(0deg)"
                    this.sortingWay = sortEnum.ASC
                    this.$store.dispatch('boards/board/sortingBoard',{standard: 'writtenDate', sortingWay:sortEnum.ASC})
                    return
               }
               if(this.sortingWay===sortEnum.ASC){
                    wc.style.transform="rotate(180deg)"
                    this.sortingWay = sortEnum.DESC
                    this.$store.dispatch('boards/board/sortingBoard',{standard: 'writtenDate',  sortingWay:sortEnum.DESC})
                    return
               }
               wc.style.display="none"
               this.sortingWay = sortEnum.NONE
               this.$store.dispatch('boards/board/sortingBoard',{standard: 'writtenDate',  sortingWay:sortEnum.NONE})
          }

     }

}
</script>

<style scoped>
table{
     border-collapse: collapse;
     width: 90%;
}
th{
     padding: 8px;
     border: none;
     color: white;
     font-size: 14px;
     background: royalblue;
}
.v-icon{
     font-size: 12px;
     font-weight: bolder;
     color: white;
}



</style>