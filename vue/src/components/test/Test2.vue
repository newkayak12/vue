<template>
     <div style="background-color: antiquewhite">
          {{`Test ${param}`}}
     </div>
</template>

<script>
export default {
     name: 'Test2',
     description: '',
     beforeMount() {
          console.log(this.$route.params)
     },
     computed:{
          param(){
               return this.$route.params.id
          }
     }
}
</script>

<style scoped>

</style>