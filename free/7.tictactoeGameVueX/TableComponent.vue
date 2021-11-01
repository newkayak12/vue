<template>
  <table>
<!--    <tr-component v-for="(rowData,index) in tableData" :key="index"  :row-index="index" ></tr-component>-->
    <slot/>

<!--

     슬롯 사이에다 기본값을 넣을 수도 있다.
      slot을 왜 쓸까?(react에서는 children)
      실제 렌더링은 slot에서
      코드 작성하는 곳은 그 상위
      이는 결국 하위 컴포넌트에 있는 데이터를 사용하는 것이 아니라
      상위 컴포넌트의 데이터를 사용할 수 있다는 말이다.

      굳이 데이터를 넘기거나 하지 않아도 될 수 있다는 점이 장점이 되겠다.

      이는 IOC나 DI와 관련이 있을 것것
-->
 </table>
</template>

<script>
import TrComponent from './TrComponent'
export default {

  computed:{
    tableData(){
      return this.$store.state.tableData;
    },
    turnMessage() {
      return this.$store.getters.turnMessage;
    }
  },
  components:{TrComponent,},

  };

</script>

<style scoped>

</style>