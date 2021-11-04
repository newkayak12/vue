<template>
     <v-form ref="form" v-model="valid" style="position: relative" @submit.prevent="onSubmitForm">
          <v-textarea
               v-model="content"
               filled
               label="댓글 달기"
               :hide-details="hideDetails"
               :success-messages="successMessages"
               :success="success"
               @input="onChangeTextarea" />

          <v-btn color="green" dark absolute top right type="submit">확인</v-btn>
     </v-form>

</template>

<script>
export default {
     props:{
          postId:{
               type:Number,
               required :true,

          }
     },
     data(){
          return{
               valid : false,
               content : '',
               success:false,
               successMessages:'',
               hideDetails: true,


          }
     },
     computed:{
          me(){
               return this.$store.state.Users.me;
          }
     },
     methods:{
          onChangeTextarea(value) {
               if(value.length){
                    this.hideDetails = true;
                    this.success = false;
                    this.successMessages = '';
                }
          },
          onSubmitForm(){
               if(this.$refs.form.validate()){
                    this.$store.dispatch('Posts/addComment', {
                         postId:this.postId,
                         content: this.content,
                    }).then(()=>{
                         this.success = true;
                         this.content = '';
                         this.successMessages = '댓글이 작성되었습니다.'
                         this.hideDetails = false;
                    }).catch(()=>{

                    })

               }
          }
     }
}
</script>

<style scoped>

</style>