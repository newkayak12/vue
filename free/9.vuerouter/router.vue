<template>
  <div>
    <div>
      <!-- 공통적인 부분은 그냥 레이아웃으로...        -->
      <router-link to="/game/index?hello=h1&bye=goodbye">게임 매쳐</router-link>
      <router-link to="/game/numberBaseball">숫자야구</router-link>
      <router-link to="/game/response-check">반응속도</router-link>
      <router-link to="/game/rock-scissors-paper">가위바위보</router-link>
      <router-link to="/game/LotteryGenerator">로또추첨</router-link>
      </div>
    <router-view></router-view>
  </div>
</template>
<!--
name: undefined
params: {name: 'index'}
path: "/game/index"
query:
bye: "goodbye"
hello: "h1"
-->


<!--
http://localhost:8080/router.html#/numberBaseball

#이 붙음 >> 해시 라우터 >> 검색엔진에서 불이익을 받는다. 대신 새로고침 시 좋다.

-->
<script>
import router from './route'
   export default {
        router,
        components: {

        },
        computed:{

        },
        methods: {

        },

  };
</script>


<style >
</style>

