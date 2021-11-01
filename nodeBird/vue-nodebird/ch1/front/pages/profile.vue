<template>
<div>
     Profile
</div>
</template>

<script>
export default {
     layout:'admin',
     //옵션이 붙은 페이지는 알아서 다르게
     /*
          nuxt : vue의 기본 기능을 nuxt가 확장했다.


          head(){} => 헤드 태그에 여러 가지 정보를 넣어줌
      */
     head(){
          return {
               title:'profile'

          }
     }

}
</script>

<style scoped>

</style>