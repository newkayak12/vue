<template>
  <div>
    <h1 v-if="winner">{{winner}}님의 승리</h1>
    <table-component :table-data="tableData" :turn="turn"></table-component>
    <div>{{turn}}님의 턴입니다.</div>
  </div>
</template>

<!--
컴포넌트로 잘게 나눈 이유는 여러 역할을 하는 컴포넌트를 만들 경우 일부가 재렌더 될 때 통으로 렌더를 해야하는 단점이 있다. 그래서 컴포넌트를 잘게 나누는 것이다.
-->
<!--
이렇게 계속 넘겨준다고 생각하면..쉽지 않다. 그에 따라서 vuex가 있다.
-->




<script>

  import TableComponent from "./TableComponent";
  import EventBus from "./EventBus";
  export default {
    components: {TableComponent},
    data() {
      return {
        winner: '',
        tableData: [['', '', ''], ['', '', ''], ['', '', '']],
        turn: 'O',
      }
    }, methods: {
      onClickTd(rowIndex, cellIndex){

        this.$set(this.tableData[rowIndex], cellIndex, this.turn)

        let win = false;
        if(this.tableData[rowIndex][0]=== this.turn && this.tableData[rowIndex][1]=== this.turn && this.tableData[rowIndex][2]=== this.turn ){
          win = true;
        }
        if(this.tableData[0][cellIndex]=== this.turn && this.tableData[1][cellIndex]=== this.turn && this.tableData[2][cellIndex]=== this.turn ) {
          win = true;
        }
        if(this.tableData[0][0]=== this.turn && this.tableData[1][1]=== this.turn && this.tableData[2][2]=== this.turn ){
          win = true;
        }
        if(this.tableData[0][2]=== this.turn && this.tableData[1][1]=== this.turn && this.tableData[2][0]=== this.turn ){
          win = true;
        }

        if(win){

          this.winner = this.turn;
          this.turn = 'O';
          this.tableData= [['', '', ''], ['', '', ''], ['', '', '']];
        } else {

          let all = true;
          this.tableData.forEach((row)=>{
            row.forEach((cell)=>{
              if(!cell){
                all = false
              }
            });
          });
          if(all){//무승부
            this.winner = '';
            this.turn = 'O';
            this.tableData= [['', '', ''], ['', '', ''], ['', '', '']];
          } else {
            this.turn = this.turn === 'O'? "X":"O";
          }
        }
      },
    },
    created() {
      EventBus.$on('clickTd',this.onClickTd)
    }
  };
</script>


<style >
  table{
    border-collapse: collapse;
  }
  td{
    border:1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>

