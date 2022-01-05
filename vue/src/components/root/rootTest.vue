<template>
     <div>
          <div style="display: flex; justify-content: space-around; border: 1px black solid">
               <button @click="changeRoot('잘가')">잘가</button>
               <button @click="changeRoot('빠빠이!')">빠빠이!</button>
          </div>
          <div>
               나는 자식의 데이터
               <br>
               {{child}}
          </div>
     </div>
</template>

<script>
export default {
     name: 'rootTest',
     description: '',
     data(){
          return{child:"어린아이"}
     },
     methods:{
          changeRoot(val){
               console.log(this)
               this.$parent.$data.bow=val
               //이게 진짜 최최최최최상위 부모를 찾네
               //
          }
     }
}
</script>

<style scoped>

</style>