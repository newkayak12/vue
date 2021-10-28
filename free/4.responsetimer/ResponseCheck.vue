<!--js가 아닌애-->
<template>
  <div>
     <div id = "screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
<!--
    v-bind >> ":"
    :를 붙이면 데이터를 자바스크립트에서 사용할 수 있다.
-->
      <div>
          <div>평균 시간 : {{}}</div>
        <button @click ="onReset">리셋</button>
      </div>
  </div>
</template>


<script>
  export default {
    data(){
      return{
        result :[],
        state : 'waiting',
        //클래스를 나타낼 데이터
        message : '클릭해서 시작하세요'
      }

    },
    methods:{
      onReset(){

      },
      onClickScreen(){
          if(this.state=='waiting'){
            this.state='ready';
          } else if( this.state==='ready'){
            this.state = "now"
          } else if( this.state==='now'){
            this.state = "waiting"
          }
      }

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