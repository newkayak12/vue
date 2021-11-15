<template>
     <div>
          <form @click="" >
               <input type="email" placeholder="EMAIL" style="border: 1px black solid" v-model="email" required>
               <input type="text" placeholder="NICKNAME" style="border: 1px black solid" v-model="nickname" required>
               <input type="password" placeholder="PASSWORD" style="border: 1px black solid" v-model="password" required>
               <input type="password" placeholder="PASSWORD CHECK" style="border: 1px black solid" v-model="passwordCheck" required>

               <checkbox ></checkbox>
               <div style="display: flex; justify-content: center; ">
                    <v-btn dark color="blue" style="margin: 10px"> 로그인 </v-btn>
               </div>
          </form>
     </div>
</template>

<script>
export default {
     name: 'Signup',
     description: ''
}
</script>

<style scoped>

</style>