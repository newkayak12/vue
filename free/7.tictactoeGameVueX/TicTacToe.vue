<template>
  <div>
    <h1 v-if="winner">{{winner}}님의 승리</h1>
<!--    <table-component ></table-component>-->

<!--
    자식 컴포넌트에 데이터 넘길 때 prop로 넘겼었는데
    <table-component>
          <tr v-for="(rowData,rowIndex) in tableData " :key="rowIndex">
            <td @click="onClickTd(rowIndex,cellIndex)" v-for="(cellData,cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
        </tr>
     </table-component>

     와 같이 다른 컴포넌트에 태그를 넘기는 방법이 있다. 그러면 받는 자식 컴포넌트에서는
     <slot />으로 이를 받을 수 있다.
 -->

<!--

      렌더링 줄이려고 table,tr,td잡은건데 하나 클릭하면 배열 때문에 결과적으로 모든 td(9개)가 렌더링 되네..
      결국 굳이 이렇게 안나누고 아래와 같이
-->


      <table-component>
        <tr v-for="(rowData,rowIndex) in tableData " :key="rowIndex">
<!--       key는 화면을 다시 그려야하나 아니냐를 판단하는 근거가 된다네요
   -->
            <td @click="onClickTd(rowIndex,cellIndex)" v-for="(cellData,cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
        </tr>
      </table-component>
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
   import store, {CHANGE_TURN, CLICK_CELL, NO_WINNER, RESET_GAME, SET_WINNER} from './store';
  import {mapState} from 'vuex';
  import TableComponent from "./TableComponent";
  export default {
    store,
    components: {TableComponent},
    computed:{
      ...mapState(['winner', 'turn', "tableData"]),
     /* ...mapState({
        winner: state=>state.winner,
        turnState: 'turn',
        winners(state){
          return state.winner +this.data;
          //이런식으로 화살표 함수, 일반 함수, text를 매핑할 수 있다.
          //화살표 함수는 this를 사용할 수 없다.
        }

      })*/
     /* winner (){
        return  this.$store.state.winner;
      },
      turn(){
        return this.$store.state.turn;
      }*/

      //이걸 일일히 다 써줘야한다고??
      //>> vuex에서 mapState라는 것을 개발해 놓음

    },
    methods: {
      //나누는 의미가 없기 합쳐버린다.
      //어차피  computed가 매번 실행된다.

      //그래도 이게 매번 렌더링된다고 하는 것도 생각해볼 필요가 있다.
      //virtualDom으로 화면에 다시 그려지는 가는 생각해볼 필요가 있다.
      onClickTd(rowIndex, cellIndex){
        if(this.cellData)return;


        this.$store.commit(CLICK_CELL,{row:rowIndex,cell:cellIndex})// mutation을 부를때는 commit 으로


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

