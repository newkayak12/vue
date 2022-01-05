<template>
     <div style="border: 1px black solid">
          <p>secondValue</p>
          <button @click="changeValue">changeValue</button>
          <p>{{value}}</p>
          <p>{{ title }}</p>
     </div>
</template>

<script>
import mixin from "@/mixin/mixin";
export default {
     name: 'mixin2',
     description: '',
     mixins:[mixin],
     data(){
          return {
               title:"MIXIN2!"
          }
     }
}
</script>

<style scoped>

</style>