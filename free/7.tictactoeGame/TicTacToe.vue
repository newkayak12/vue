<template>
  <div>
    <table-component :table-data="tableData">
  </div>
</template>

<!--
컴포넌트로 잘게 나눈 이유는 여러 역할을 하는 컴포넌트를 만들 경우 일부가 재렌더 될 때 통으로 렌더를 해야하는 단점이 있다. 그래서 컴포넌트를 잘게 나누는 것이다.
-->



<script>

  import TableComponent from "./TableComponent";
  export default {
    components: {TableComponent},
    data(){
      return{
        tableData:[['','',''],['','',''],['','','']]

      }

  }
</script>


<style scoped>
</style>

