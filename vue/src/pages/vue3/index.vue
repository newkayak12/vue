<template>
     <div>
          <div style="background-color: blue">
               {{`parent : ${parentValue}`}}
          </div>
          <sync :childValue.sync="parentValue"></sync>
<!--
     자식에서  이벤트에 $emit('update:propsName', value)로 주면 부모의 값도 v-model과 같이 변경됨
-->

          <div>
               <h5>v-model</h5>
               <p>.lazy</p>
               <input type="text" v-model.lazy="modelTest1">
               <p>.number</p>
               <input type="text" v-model.number="modelTest2">
               <p>.trim</p>
               <input type="text" v-model.trim="modelTest3">
          </div>
     </div>
</template>

<script>
import sync from "@/components/sync/sync";
export default {
     name: 'index',
     description: '',
     components:{
       sync
     },
     watch:{
          modelTest1(val){
               alert(`modelTest1 : ${val}`)
          },
          modelTest2(val){
               alert(`modelTest2 is this number: ${typeof val === "number"}`)
          },
          modelTest3(val){
               alert(`modelTest3 : ${val.length}`)
          },

     },
     data(){
          return{
               parentValue:'vue!',
               modelTest1:'',
               modelTest2:'',
               modelTest3:'',

          }
     }
}
</script>

<style scoped>

</style>