<template>
     <div>

         <div style="background-color: yellow">
              {{`childValue : ${childValue}`}}
         </div>
          <input type="text" :value="childValue" @input="$emit('update:childValue', $event.target.value)">
     </div>
</template>

<script>
export default {
     name: 'sync',
     description: '',
     props:{
          childValue:{
               type:String
          }
     }
}
</script>

<style scoped>

</style>