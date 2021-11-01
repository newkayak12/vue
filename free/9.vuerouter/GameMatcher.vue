<template>
  <div v-if="currentGame==='numberBaseball'">
    <NumberBaseBall></NumberBaseBall>
  </div>
  <div v-else-if="currentGame==='response-check'">
    <ResponseCheck></ResponseCheck>
  </div>
  <div v-else-if="currentGame==='LotteryGenerator'">
    <LotteryGenerator></LotteryGenerator>
  </div>
  <div v-else>일치하는 게임이 없습니다.</div>
</template>

<script>
import NumberBaseBall from "../3.numberbaseballGame/NumberBaseBall";
import ResponseCheck from "../4.responsetimer/ResponseCheck";
import RockSissorsPaper from "../5.rockSissorPaper/RockSissorsPaper";
import LotteryGenerator from "../6.lottery/LotteryGenerator";
export default {

  components:{
    NumberBaseBall,
    ResponseCheck,
    RockSissorsPaper,
    LotteryGenerator

  },
 mounted() {
   console.log(this.$router)
   console.log(this.$route)
 },
  computed:{
   currentGame(){
     return this.$route.params.name;
   }
  }
}
</script>

<style scoped>

</style>