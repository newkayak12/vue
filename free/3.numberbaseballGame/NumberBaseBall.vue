<!--js가 아닌애-->
<template>
  <div>
    <h1>{{result}}</h1>
<!--    <form v-on:submit="onSubmitForm">-->
<!--      v-on: 을 @로 바꿀 수 잇다.  preventDefault를 prevent로 가능 -->
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" minlength="4" maxlength="4" v-model="value"/>
      <button type="submit">입력</button>
    </form>
    <div>시도 : {{tries.length}}</div>
    <ul>
      <li v-for="t in tries" :key="t.try">
<!-- li를 구별해줄 필요가 있는데 이를 구별해줄 이름을 key라고 생각하면된다. Key가 있어야 화면을 재렌더할 때 효율적으로 할 수 있다. 기존의 li는 안지우고 새로운 것만 추가할 때 key가 생성된다.         -->
        <div>{{t.try}}</div>
        <div>{{t.result}}</div>
      </li>
    </ul>
  </div>
</template>


<script>
  const getNumber=()=>{
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i = 0; i<4; i+=1){
      const chosen = candidates.splice(Math.floor(Math.random()*(9-i)),1)[0];
      array.push(chosen)
    }

    return array;

  }


  //export default >  이걸로 import로 가져올 수 있게 한다.  export default와 import from 은 세트이다.
  export default {
    data(){
      return{
        answer:getNumber(),
        tries:[],
        value:'',
        result :'',
      }

    },
    methods:{
      //현재 화면과 밀접한 연관이 있는 녀석들만 methods에 넣는 시긍로 간다.
      onSubmitForm(e){
        // e.preventDefault();
        if(this.value===this.answer.join('')){ //정답이 맞으면
          this.tries.push(
              {
                try : this.value,
                result:'홈런'
              }
          );
          alert('게임을 다시 실행합니다.')
          this.result = '홈런';
          this.value='';
          this.tries=[];
          this.answer = getNumber();

        } else {
          if(this.tries.length >=9){
            //10번째 시도
            this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join('')}입니다.`
            alert("게임을 다시 시작합니다.");
            this.value='';
            this.answer = getNumber();
            this.tries=[];
          }

          let strike = 0;
          let ball = 0;
          /*
            화면에 보여지는 녀석은 데이터/ 계산식은 변수이다.
          */
          const answerArray = this.value.split('').map(v=>parseInt(v));
          console.log(answerArray+" : "+this.answer)
          for(let i = 0; i<4; i+=1){
            if(answerArray[i] === this.answer[i]){//숫자 자릿수 모두 정답
                strike++;
              } else if(this.answer.includes(answerArray[i])){//숫자만 정답
                ball++;
              }
          }

            this.tries.push({
              try:this.value,
              result:`${strike} 스트라이크 ${ball} 볼입니다.`
            })
        }

        this.$refs.answer.focus();
        this.value = '';
      }
    }
  };
</script>



<style>

</style>