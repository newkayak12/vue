<template>
  <div>
      <div>
            <div style="display:flex; justify-content:space-between; text-decoration:none;">
                 <router-link to="/vue1/annyon">안녕</router-link>
                 <router-link to="/vue1/hello">hello</router-link>
                 <router-link to="/vue1/hi">hi</router-link>
            </div>
           <div style="margin: 2rem">
                <div style="margin-top: 10rem; justify-content: center; display: flex; background-color: darkgreen; color: white">
                     {{bow}}
                </div>
                <root-test ref="baby"/>
                <button @click="changeChild">자식 데이터 변경</button>
           </div>
           <div style="margin: 2rem">
                <eventBustTest></eventBustTest>
                <button @click="eventBus">eventbus!</button>
           </div>

           <div style="border: 1px black solid; margin: 2rem;">
               <router-view></router-view>
           </div>

           <div style="margin: 2rem">
                mixin
                <mixin1></mixin1>
                <mixin2></mixin2>
           </div>
      </div>
  </div>
</template>

<script>
import eventBus from "@/eventBus";
import eventBustTest from '@/components/eventbus/eventBusTest'
import mixin1 from "@/components/mixin/mixin1";
import mixin2 from "@/components/mixin/mixin2";
import rootTest from "@/components/root/rootTest";
export default {
     components:{
        eventBustTest, mixin1, mixin2, rootTest
     },
     watch:{
          bow(val){
               alert(`watch에서 알려드립니다. ${val}로 값이 변경되었습니다. `)
          }
     },
     data(){
          return{
               bow:'인사!'
          }
     },
     methods:{
         eventBus(){
         eventBus.$emit('event')
         },
          changeChild(){
               this.$refs.baby.$data.child= this.$refs.baby.$data.child==='성인'? '어린아이' :'성인'
               //ref로 자식 데이터 변경이 용이하네
               console.log(this.$children)
          }
     }

}
</script>

<style  scoped>

body, html {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

</style>>

</style>