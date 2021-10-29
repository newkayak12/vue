<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
        <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
<!--
데이터가 만들어지는 것과 표시되는 것이 다르다.
얘가 부모이다.
-->

    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo">한 번 더!</button>
  </div>
</template>


<script>
  function getWinNumbers(){
    console.log("getWinNumbers");
    const candidate = Array(45).fill().map((v,i)=>i+1);
    const shuffle = [];
    while(candidate.length > 0){
      shuffle.push(candidate.splice(Math.floor(Math.random()*candidate.length),1)[0]);
      //shuffle 정렬 > 그냥 Math.random으로 하나씩 집는데, splice로 이를 제거하면서 뽑아낸다.
      //그리고 이를 shuffle이라는 배열로 옮기면서 셔플 정렬을 시행한다.
    }
      const bonusNumber = shuffle[shuffle.length-1];
      const winNumbers = shuffle.splice(0,6).sort((p,c)=>p-c);
      return [...winNumbers, bonusNumber];
  }
  import LottoBall from "./LottoBall";
  // Component를 import한다.

  const timeouts = []


  export default {

    components: {LottoBall},
    //lotto-ball:LottoBall 이렇게 써야함 이름을 다르게 쓰고 싶다면
    data(){
      return{
        winNumbers:getWinNumbers(),
        bonus:'',
        winBalls:[],
        redo:false,

      };
    },
    computed:{
    },
    methods: {
      onClickRedo(){
        this.winNumbers = getWinNumbers();
        this.winBalls = [];
        this.bonus = null;
        this.redo=false;
        /*this.showBalls()*/
      },
      showBalls(){
        for(let i = 0; i< this.winNumbers.length - 1; i++){
         timeouts[i] = setTimeout(()=>{
            this.winBalls.push(this.winNumbers[i])
          },(i+1)*1000)
        }
        timeouts[6] = setTimeout(()=>{
          this.bonus = this.winNumbers[6];
          this.redo = true;
        },7000)
      }
    },
    mounted() {
      this.showBalls()
      //setTimeOut 같은 경우 메모리 누수가 생길 수 있다.
    },
    beforeDestroy() {
      timeouts.forEach((s)=>{
        clearTimeout(s)
      })
    },
    watch:{
      //어떤 값이 바뀐건지 감지하는 지
      winBalls(value, oldValue){
        //value와 oldValue의 차이는?
        //객체는 참조값이기 때문에 watch 했을 때 같은 값이 나올 수 있다. primitive는 괜춘.
        //근데 watch는 굳이 쓰지 말아라. > watch를 쓸 경우 부작용이 나타날 수 있다. >> 마치 무한 반복 같은 상황
        // watch는 비동기로 동작하기 때문에 뭐가 뭐를 바꿨는지 알 수 없어질 수 있다.
        if(value==null){
          this.showBalls();
        }
      },
      redo(value, oldValue){
        console.log(value +":"+ oldValue)
      }
    }
  }
</script>


<style scoped>
</style>

