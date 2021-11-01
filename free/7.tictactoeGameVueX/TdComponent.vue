<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>

import {CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER} from "./store";
import {mapState} from 'vuex';

export default {
  props:{
    rowIndex:Number,
    cellIndex:Number,
  },
  computed:{
    /*cellData(){
      return this.$store.state.tableData[this.rowIndex][this.cellIndex]
    },
    //tableData등이 state에 있는데 사용하려니 문제가 있다. 이에 따라 computed로 vueX state를 가져올 수 있다.
    tableData(){
      return this.$store.state.tableData;
    },
    turn(){
      return this.$store.state.turn;
    },
    //이렇게 하면 데이터는 다 vueX에 있고 컴포넌트는 이들에서 데이터를 받아서 사용하는 형태로 진행된다.*/
    ...mapState({
      tableData : state => state.tableData,
      turn : state => state.turn,
      cellData(state){
        return state.tableData[this.rowIndex][this.cellIndex];
      }
    })
  },
  methods:{
    onClickTd(){
      if(this.cellData)return;
      this.$store.commit(CLICK_CELL,{row:this.rowIndex, cell:this.cellIndex})// mutation을 부를때는 commit 으로


      let win = false;


      if(this.tableData[this.rowIndex][0]=== this.turn && this.tableData[this.rowIndex][1]=== this.turn && this.tableData[this.rowIndex][2]=== this.turn ){
        win = true;
      }
      if(this.tableData[0][this.cellIndex]=== this.turn && this.tableData[1][this.cellIndex]=== this.turn && this.tableData[2][this.cellIndex]=== this.turn ) {
        win = true;
      }
      if(this.tableData[0][0]=== this.turn && this.tableData[1][1]=== this.turn && this.tableData[2][2]=== this.turn ){
        win = true;
      }
      if(this.tableData[0][2]=== this.turn && this.tableData[1][1]=== this.turn && this.tableData[2][0]=== this.turn ){
        win = true;
      }

      if(win){
        this.$store.commit(SET_WINNER, this.turn)
        this.$store.commit(RESET_GAME)


      } else {
        let all = true; // all이  true이면 무승부
              this.tableData.forEach((row)=>{
                row.forEach((cell)=>{
                  if(!cell){
                    all = false
                  }
                });
              });


            if(all){//무승부
              this.$store.commit(NO_WINNER)
              this.$store.commit(RESET_GAME)
            } else {
              this.$store.commit(CHANGE_TURN)
            }
        //이와 같이 vue는 자식 컴포넌트에서 부모 컴포넌트의 data를 바꿀 수 있다.
      }

    }

  }
}
</script>
<!--
-->

<style scoped>

</style>