<template>
     <div>
          <p style="color:red;">app.vue</p>
          <router-view></router-view>
     </div>
</template>

<script>
import router from "./router";
export default {
     name: 'App.vue',
     description: '',
     router,
     data(){
          return{
               bow:"??"
          }
     }
}
</script>

<style scoped>

</style>