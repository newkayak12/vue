<template>
     <div>
          <template>
               hello
          </template>
     </div>
</template>

<script>
import eventBus from "@/eventBus";

export default {
     name: 'eventBus',
     description: '',
     beforeMount() {
          eventBus.$on('event', this.alerter)
     },
     methods:{
          alerter(){
               alert("EVENTBUS!")
          }
     }
}
</script>

<style scoped>

</style>