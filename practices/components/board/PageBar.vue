<template>
     <div style="display:flex; justify-content: center; align-content: center">

          <span>
               <nuxt-link v-if="parseInt(cPage)!==1" :to="'/boards/1'">
                    <p>
                         &lt;&lt;
                    </p>
               </nuxt-link>
               <span v-else>
                    <p class="mover">
                         &lt;&lt;
                    </p>
               </span>
          </span>
          <span>
               <nuxt-link v-if="parseInt(cPage)!==1" :to="'/boards/'+(cPage-1)">
                    <p>
                         &lt;
                    </p>
               </nuxt-link>
               <span v-else>
                    <p class="mover">
                         &lt;
                    </p>
               </span>
          </span>

          <span v-for="index in pageBar" >
               <nuxt-link :to="`/boards/`+index" v-if="parseInt(index)!==parseInt(cPage)">
                    <p>
                         {{index}}
                    </p>
               </nuxt-link>
               <span v-else >
                    <p class="picked">
                         {{index}}
                    </p>
               </span>
          </span>


          <span>
               <nuxt-link v-if="parseInt(cPage)!==parseInt(totalPage)" :to="'/boards/'+(cPage+1)">
                    <p>
                         &gt;
                    </p>
               </nuxt-link>
               <span v-else >
                    <p class="mover">
                         &gt;
                    </p>
               </span>
          </span>
          <span>
               <nuxt-link v-if="parseInt(cPage)!==parseInt(totalPage)" :to="'/boards/'+totalPage">
                    <p>
                         &gt;&gt;
                    </p>
               </nuxt-link>
               <span v-else >
                    <p class="mover">
                         &gt;&gt;
                    </p>
               </span>
          </span>
     </div>
</template>

<script>
export default {
     computed:{
          pageBar(){
               return this.$store.state.boards.board.pageBar;
          },
          cPage(){
               return this.$store.state.boards.board.cPage
          },
          totalPage(){
               return this.$store.state.boards.board.totalPage;
          }

     }
}
</script>

<style scoped>
     span{
          padding: 5px;
          margin: 5px;
     }
     span a{
          text-decoration: none;
          color: black;
     }
     span p{
          color:white;
          display: inline-block;
          padding: 0px;
          padding-top: 5px;
          margin: 0px;
          box-sizing: border-box;
          background: royalblue;
          height: 35px;
          width: 35px;
          text-align: center;
          border-radius: 100%;

     }
     span>p{
          font-weight: bold;
     }

     span span{
          padding: 0;
          margin: 0;
     }

     .mover{
          font-weight: normal !important;
     }
     .picked{
          background: white !important;
          color: royalblue !important;
          border: 1px solid royalblue;
     }
</style>