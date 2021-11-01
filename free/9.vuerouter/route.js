import  Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseBall from "../3.numberbaseballGame/NumberBaseBall";
import ResponseCheck from "../4.responsetimer/ResponseCheck";
import RockSissorsPaper from "../5.rockSissorPaper/RockSissorsPaper";
import LotteryGenerator from "../6.lottery/LotteryGenerator";
import GameMatcher from "./GameMatcher";

Vue.use(VueRouter);

export default new VueRouter({
//라우터는 눈속임 >> 화면 바꿔주고 주소 바꿔주는 정도 실제 페이지는 하나
      mode:'history',
//히스토리 모드는 #가 없고 /로 구성됨 문제는 새로고침하면 해당 주소로 접근할 수 없음
    // 실제 주소가 아닌 vue-router가 눈속임한 것이라 서버는 이러한 주소를 알 수 없음

    routes:[
        {path:'/numberBaseball', component:NumberBaseBall }, //다른 폴더에 있어도 상관 없다.
        {path:'/response-check', component:ResponseCheck  },
        {path:'/rock-scissors-paper', component:RockSissorsPaper  },
        {path:'/LotteryGenerator', component:LotteryGenerator  },
        {path:'/game/:name', component:GameMatcher} //:name이 들어가면 라우팅됨
        //실제로 주소가 위와 같이 깔끔하지만은 않다.
        //그리하여 동적 라우팅 매칭을 사용한다.
    ]
})