<template>
     <v-card style="margin-bottom: 20px">
          <v-container>
               <v-form ref="textForm" v-model="valid" @submit.prevent="onSubmitForm">
                    <v-textarea
                          v-model="content"
                          outlined
                          auto-grow
                          clearable
                          label="어떤 신기한 일이 있었나요?"
                          :hide-details="hideDetails"
                          :success-messages="successMessages"
                          :success="success"
                          :rules="[v => !!v.trim() || '내용을 입력하세요.']"
                          @input="onChangeTextarea"
                    />
                    <v-container>
                         <v-btn type="submit" color="green" absolute right>게시</v-btn>
                         <input type="file" multiple hidden ref="imageInput" @change="onChangeImage">
                         <v-btn @click.prevent="onClickImageUpload" type="button">이미지 업로드</v-btn>
                         <div>
                              <div v-for="(p,i) in imagePaths" :key = 'p' style="display: inline-block; margin-top: 10px" >
                                   <img :src="`http://localhost:3085/${p}`" :alt="p" style="width: 150px">
                                   <div>
                                        <v-btn @click="onRemoveImage(i)" type="button" color="blue">제거</v-btn>
                                   </div>
                              </div>

                         </div>
                    </v-container>
               </v-form>

          </v-container>
     </v-card>
</template>

<script>
import {mapState} from 'vuex'
export default {
     data(){
          return {
               valid:false,
               hideDetails : true,
               successMessages : '',
               success: false,
               content:''

          }
     },
     computed:{
          /*...mapState(["User/me"])*/
          ...mapState("Users",["me"]),
          ...mapState("Posts",['imagePaths'])

     },
     methods:{
          onChangeTextarea(value){
               if(value.length){
                    this.hideDetails = true;
                    this.success=false;
                    this.successMessages='';
               }

          },
          onSubmitForm(){
               if(this.$refs.textForm.validate()){
                    this.$store.dispatch("Posts/add",{
                              content: this.content,
                    })
                    .then(()=>{
                         this.hideDetails = false;
                         this.success=true;
                         this.successMessages="게시글 등록 성공";
                         this.content =''
                    })
                     .catch(()=>{})
               }
          },
          onClickImageUpload(){
               this.$refs.imageInput.click();
          },
          onChangeImage(e){
               console.log(e.target.files);
               const imageFormData = new FormData();
               [].forEach.call(e.target.files, (f)=>{
                    imageFormData.append('image', f)
               })
               //유사 배열 객체를 forEach()쓰고 싶으면 위와 같이 사용하면 된다.
               /*
                    {image:[file1, file2]} 이런식으로 만들어질 것
                */
               this.$store.dispatch('Posts/uploadImages', imageFormData)
          },
          onRemoveImage(index){
               this.$store.commit("Posts/removeImagePath", index)

          }


     }
}
</script>

<style scoped>

</style>