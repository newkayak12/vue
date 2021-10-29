<template>
  <div class = "ball" :style="styleObject">{{number}}</div>
<!--자식이다.-->
</template>

<script>
export default {
  name:"LottoBall",
  props:{//props란
    number: Number,
    //props는 바꿀 수 없다. 메소드로 바꿔도 안되고! readOnly라고 보면 된다.

  },
  // 아래의 computed도 watch의 일종이다. >> props가 바뀌면 실행되니까.

  computed:{
    //기존값으로 새로운 값을 도출해 낼 때는 Computed 대신 얘는 새로운 값을 return // watch는 특정 동작을 수행한다.
    styleObject(){
      let background;
      if(this.number <10){
        background = "red"
      } else if (this.number<=20){
        background = "orange";
      } else if( this.number <=30){
        background = "yellow"
      }else if(this.number <=40){
        background = "green"
      } else {
        background = "blue"
      }
      return {
        background
      };
    }

  }
}
</script>

<style scoped>
.ball{
  display:inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}

</style>