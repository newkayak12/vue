<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click.prevent="onClickButton('바위')">바위</button>
      <button @click.prevent="onClickButton('가위')">가위</button>
      <button @click.prevent="onClickButton('보')">보</button>
    </div>

    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
  </div>
</template>


<script>
const rspCoords = {
  바위 : '0',
  가위 :'-142px',
  보: '-284px'
}

const scores = {
  가위 : 1,
  바위 : 0,
  보: -1,
}
const computerChoice = (imgCoord)=>{
  return Object.entries(rspCoords).find(function(v){
    return v[1] === imgCoord;
  })[0];
};

let interval = null;
  export default {
      data(){
          return{
            result:'',
            score:0,
            imgCoord: rspCoords.바위,
          }
      },
      computed:{
        computedStyleObject(){
          return{
            background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`
          }
        }
      },
      methods: {
        //모든 메소드 앞에는 async를 쓸 수있는데 await을 쓰기위해서...
        //함수를 조금 더 특별하게 만들어주는..?
        //JS영역이기 때문에 보완
        onClickButton(choice) {
            clearInterval(interval);
            const myScore = scores[choice]
            const cpuScore = scores[computerChoice(this.imgCoord)];
            const diff = myScore - cpuScore;
              if(diff===0){
                this.result = "비겼습니다."
              } else if([-1,2].includes(diff)){
                this.result = "이겼습니다."
                this.score+=1;
              } else {
                this.result = "졌습니다.";
                this.score -=1;
              }

            setTimeout(()=>{
              this.changeHand();
            },1000)
        },
        changeHand(){
          interval = setInterval(()=>{
            if(this.imgCoord === rspCoords.바위){
              this.imgCoord = rspCoords.가위
            } else if(this.imgCoord === rspCoords.가위){
              this.imgCoord = rspCoords.보
            } else if(this.imgCoord === rspCoords.보){
              this.imgCoord = rspCoords.바위
            }
          },100)
        }
      },

    //methods와 같은 계층느낌이네.
    //VUE의 라이프 사이클

        beforeCreate(){
          console.log("beforeCreated")
        },
        created(){
          console.log("created")
          //컴포넌트가 보일 때(화면에 나타나기는 전)
          //data넣고 computed한 단게
        },


        beforeMount() {
          console.log("beforeMount")
        },
        mounted(){
          console.log("mounted")
          //화면에 그린 후
          //화면에 다 그리고 나서

         this.changeHand();
        },


        beforeUpdate() {
          console.log("beforeUpdate")
        },
        updated(){
          console.log("updated")
          //화면이 바뀔 때
        },


        beforeDestroy() {
          console.log("beforeDestroy")
          clearInterval(interval);
          // 메모리 누수 문제
        }
        ,destroyed(){
          console.log("destroyed")
          //컴포넌트가 화면에서 사라질 때
        }

  };
</script>


<style scoped>
  #computer{
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style>


<!--
created mounted updated destroyed
-->
