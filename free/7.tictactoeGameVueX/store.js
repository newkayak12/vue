import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
// Vue.use(axios); >> this.$axios이렇게
//이런 구조라면 데이터를 vueX에서 관리하기 때문에 조금 더 손쉽게 데이터를 관리할 수 있다.


export const SET_WINNER = 'SET_WINNER'; //이렇게 const로 한 녀석들은
export const CLICK_CELL = `CLICK_CELL`; // import [CLICK_CELL]와 같이 []을 사용해야하고 이름을 그대로 사용해야한다 .
export const CHANGE_TURN =  `CHANGE_TURN` //중요하지 않은 것은 왼쪽과 같이
export const RESET_GAME =  `RESET_GAME`
export const NO_WINNER = `NO_WINNER`
//export : 다른 파일에서 쓸 수 있게

//export default는 inport로 가져올 수 있다. 이름도 바로 지을 수 있다.
//import store from './store';
// 가장 중요한 것 하나를 export default로

export default new Vuex.Store({
    state:{
        winner: '',
        tableData: [['', '', ''], ['', '', ''], ['', '', '']],
        turn: 'O',
    }, //vue의 데이터와 비슷하다.
    mutations:{
        //함수를 통해서 값을 바꾼다.  mutation을 사용해서 바꾸면?
        [SET_WINNER](state, winner){ //OBJECT DYNAMIC PROPERTY
            state.winner = winner;
        },
        // 아래는 오타를 내지 않기 위해서 변수로 빼둬서 사용한 부분이다.
        [CLICK_CELL](state, {row,cell}){
          // state.tableData[row][cell] = state.turn;
          //vueX도 마찬가지
          Vue.set(state.tableData[row], cell, state.turn);
          //vuex에는 this.$set이 없기 때문에
            //vue를 import해야한다 .

        },
        [CHANGE_TURN](state){
            state.turn = state.turn === 'O'? 'X':'O';
        },
        [RESET_GAME](state){
            state.turn = 'O';
            state.tableData =  [['', '', ''], ['', '', ''], ['', '', '']];
        },
        [NO_WINNER](state){
            state.winner = '';
        }


    }, //state를 수정할 때 사용한다. 동기적으로
    getters:{
        turnMessage(state){
            return state.turn +`님이 승리하셨습니다.`;
            //기존의 state에 추가적인 작업을 할 때 == computed와 유사 >> 캐싱된다.
        }
    },//vue의 computed와 동작이 유사
    actions:{

    }, // mutations가 동기적인데 비동기를 사용할 때, 여러 mutation을 연달아 실행할 때때
});