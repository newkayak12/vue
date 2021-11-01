<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
import EventBus from "./EventBus";

export default {
  props:{
    cellData:String,
    rowIndex:Number,
    cellIndex:Number,
  },
  methods:{
    onClickTd(){
      if(this.cellData)return;
      /*console.log(this.$root.$data)*/
      //최상의 부모의 data를 가지고 온다.
      /*console.log(this.$parent.$data)*/

      EventBus.$emit("clickTd", this.rowIndex, this.cellIndex);
      //$emit == on이랑 대응된다.
      console.log("emit")

    }

  }
}
</script>
<!--
-->

<style scoped>

</style>