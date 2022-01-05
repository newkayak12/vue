<template>
     <div style="border: 1px black solid">
          <p>firstValue</p>
          <p>{{value}}</p>
          <p>{{title}}</p>
     </div>
</template>

<script>
import mixin from "@/mixin/mixin";
export default {
     name: 'mixin1',
     description: '',
     mixins:[mixin]

}
</script>

<style scoped>

</style>