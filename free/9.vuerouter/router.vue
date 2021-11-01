<template>
  <div>
    <mine-form/>
    <div>경과된 시간 : {{timer}}</div>
    <br>
    <hr>
    <table-component/>
    <hr>
    <br>
    <div>승리까지 시간 : {{result}}</div>
  </div>
</template>



<script>
  import {mapState} from 'vuex';

  import store,{INCREMENT_TIMER} from './store';
  import MineForm from "./MineForm";
  import TableComponent from "./TableComponent";

  let interval;

   export default {
    store,
    components: {
      TableComponent,
      MineForm

    },
    computed:{
      ...mapState(['timer', 'result', 'halted']),

    },
    methods: {

    },
     watch:{
      halted(value, oldValue){
        if(value==false){ //false일 때 게임 시작
          interval = setInterval(()=>{
            this.$store.commit(INCREMENT_TIMER);

          }, 1000);//겉보기에는 1초마다 동작하는 것처럼 보이지만 JS 타이머가 정확하지 않다. //그래서 new Date()로 정확한 시간을 재서 진행하는게 좋다.
        } else { //게임 중단
          clearInterval(interval)
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

