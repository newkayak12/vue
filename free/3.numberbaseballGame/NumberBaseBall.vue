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
      <li v-for="t in tries">
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

        } else {

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