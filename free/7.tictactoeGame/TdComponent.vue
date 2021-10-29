<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
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


      this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
      //데이터는 바뀐게 맞지만 화면은 다시 그리지 않고 있다. 왜일까?


      /*
        배열의 인덱스로 접근해서 값을 바꾸고 있다. >> 배열의 내부의 값을 인덱스로 바꾸면 화면을 재렌더하지 않는다. >> 객체/배열을 인덱스로 바꾸면 반영이 되지 않는다.

        >> 자바스크립트의 구조적인 한계 때문이다. == Vue의 구조적 한계
        단! 배열의 메소드를 사용해서 바꾸는 것은 재렌더가 일어난다.

        해결 방법??

          1. import Vue from 'vue';를 해서 Vue.set(this.tableData[1], 0, 'X'); 와 같이 Vue의 내장 함수를 이용해서 렌더를 일으키는 방법이 있다.
          2. this.$set(this.tableData[1], 0, 'X')으로 바꾼다.

          >>> 객체역시 key로 값을 바꾸는 경우 동작하지 않기 때문에  vue를 부르던 this.$set으로 접근하던 해야한다 .
       */

      console.log(this.$root.$data)

      const rootData = this.$root.$data;
      //여튼 이렇게 접근하면 ($로)  상위 데이터에 접근할 수 있다.

      this.$set(this.$root.$data.tableData[this.rowIndex], this.cellIndex, rootData.turn)
      //배열, 객체에서는 vue.set 혹은 this.$set으로 변경해야 재렌더가 된다.

      let win = false;
      if(rootData.tableData[this.rowIndex][0]=== rootData.turn && rootData.tableData[this.rowIndex][1]=== rootData.turn && rootData.tableData[this.rowIndex][2]=== rootData.turn ){
        win = true;
      }
      if(rootData.tableData[0][this.cellIndex]=== rootData.turn && rootData.tableData[1][this.cellIndex]=== rootData.turn && rootData.tableData[2][this.cellIndex]=== rootData.turn ) {
        win = true;
      }
      if(rootData.tableData[0][0]=== rootData.turn && rootData.tableData[1][1]=== rootData.turn && rootData.tableData[2][2]=== rootData.turn ){
        win = true;
      }
      if(rootData.tableData[0][2]=== rootData.turn && rootData.tableData[1][1]=== rootData.turn && rootData.tableData[2][0]=== rootData.turn ){
        win = true;
      }

      if(win){

        rootData.winner = rootData.turn;
        rootData.turn = 'O';
        rootData.tableData= [['', '', ''], ['', '', ''], ['', '', '']];
      } else {

        let all = true; // all이  true이면 무승부
        rootData.tableData.forEach((row)=>{
            row.forEach((cell)=>{
                if(!cell){
                  all = false
                }
            });
        });
        if(all){//무승부
          rootData.winner = '';
          rootData.turn = 'O';
          rootData.tableData= [['', '', ''], ['', '', ''], ['', '', '']];
        } else {
          this.$root.$data.turn = this.$root.$data.turn === 'O'? "X":"O";
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