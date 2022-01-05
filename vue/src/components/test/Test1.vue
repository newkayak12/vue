<template>
     <div style="background-color: lightskyblue">
          {{`Test ${param}`}}
     </div>
</template>

<script>
export default {
     name: 'Test1',
     description: '',
     computed:{
          param(){
               return this.$route.params.id
          }
     }
}
</script>

<style scoped>

</style>