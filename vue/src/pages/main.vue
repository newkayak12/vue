<template>
     <div>
          <p>main.vue</p>
          <div style="margin: 1rem; display: flex; justify-content: space-around">
               <router-link to="/vue1/" tag="button"> vue1 </router-link>
               <router-link to="/vue2/" tag="button"> vue2 </router-link>
               <router-link to="/vue3/" tag="button"> vue3 </router-link>
          </div>
          <div style="border: red 1px dotted">
               <router-view></router-view>
          </div>
     </div>
</template>

<script>
export default {
     name: 'mainPage',
     description: '',
     data(){
          return{
               bow:"여기니?"
          }
     }
}
</script>

<style scoped>

</style>