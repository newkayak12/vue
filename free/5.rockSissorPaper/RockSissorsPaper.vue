<!--js가 아닌애-->
<template>
  <div>
     <div id = "screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
<!--
    v-bind >> ":"
    :를 붙이면 데이터를 자바스크립트에서 사용할 수 있다.
-->
      <template v-if="result.length">
<!--
          display: none;   >> v-show가 false이면 display :none
          v-if와의 차이점? v-if인 경우는 <`!----`>처리가 된다. >>아예 태그 자체가 존재하지 않는 상태로 된다. >> 레이아웃에 영향을 끼친다.

          >> v-if를 쓰면 v-else, v-else-if를 사용할 수 있다.

          ++ 추가적으로 위의 div는 그냥 감싸주려고 사용하는건데 >> 만약 그냥 div를 쓰기는 싫은데 v-show는 쓰고 싶으면 template로 감싸주면 div없이 유사한 효과를 낼 수 있다.
          추가적으로 최상위는 template으로 쓰지 못한다.(즉, template, template 최상위 / 차상위 X)
-->

<!--          <div>평균 시간 :{{result.reduce((a,c)=>a+c,0)/result.length || 0}}ms</div>-->
          <div>평균 시간 :{{average}}ms</div>
          <button @click ="onReset">리셋</button>
      </template>

  </div>
</template>


<script>
  let startTime = 0;
  let endTime = 0;
  let timeOut = null;



  export default {
    data(){
      return{
        result :[],
        state : 'waiting',
        //클래스를 나타낼 데이터
        message : '클릭해서 시작하세요'
      }

    },
    computed:{
      average(){
        return this.result.reduce((a,c)=>a+c,0)/this.result.length || 0;
        //computed는 일반 데이터를 가공해서 사용할 때 computped를 사용한다.
        //computed로 계산한 값은 캐싱이된다.
        /*
          만약! result그대로인데 message가 바뀌면 template가 재렌더 되고 result 계산은 재실행되면서 재연산한다. >> 굳이 그럴 필요가 없다. (계산이 복잡해지면 문제가 생긴다. )
          이런 상황에서 computed로 해놓으면 그릴 때 이미 캐싱된 녀석을 가져다 사용하면 된다.  >> 결국 성능상의 문제와 관계가 있기 때문에
          vue에서는 성능 최적화가 엄청나게 신경쓸 필요까지는 없는데 챙기고 가야할 부분이기 때문이다.
         */
      }
    },
    methods:{
      onReset(){
        this.result =[];
      },
      onClickScreen(){
          if(this.state=='waiting'){
            this.state='ready';
            this.message = "초록색이 되면 클릭하세요"
            timeOut = setTimeout(()=>{
              this.state = 'now';
              this.message = "지금 클릭"
              startTime = new Date();

            }, Math.floor(Math.random()*1000)+2000);
          } else if( this.state==='ready'){

            clearTimeout(timeOut);

            this.state = "waiting"
            this.message = "너무 빠르게 눌렀습니다. "
          } else if( this.state==='now'){
            endTime = new Date();
            this.state = "waiting"
            this.message = "클릭해서 시작하세요."
            this.result.push(endTime - startTime);

          }
      },

    }
  };
</script>



<style scoped>
/*
scoped를 붙일 수 있다.
컴포넌트마다 css가 달라지는데 css는 컴포넌트를 넘나들 수 있다.
그럴 때, 나는 이 컴포넌트 안에서만 이 CSS를 사용하고 싶으면 'scoped'를 붙여서 이를 방지할 수 있다.
data-v-22c711e와 같이 태그에 부가적으로 붙여서 고유하게 만들어준다.
*/
  #screen{
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
  }
  #screen.waiting{
    background-color: aqua;
  }
  #screen.ready{
    background-color: red;
    color:white;
  }
  #screen.now{
    background-color: greenyellow;
  }

</style>