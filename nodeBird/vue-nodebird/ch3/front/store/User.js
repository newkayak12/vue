export const state = () =>({
    me: null,
    /*me가 null이면 로그인 안 한거고 null이 아니면 로그인 한 상태 */
    followerList:[ {
            id:1,
            nickname: "제로초",
        }, {
            id:2,
            nickname: '네로',
        }, {
            id: 3,
            nickname: '히어로',
        }],

    followingList:[
        {
            id:1,
            nickname: "세로초",
        },
        {
            id:2,
            nickname: '가로',
        },
        {
            id: 3,
            nickname: '빌런',
        }
    ],
    //숙제

});

export const mutations = {
   setMe(state, payload){
       //state는 상단의 state에 접근
       //payload는 state를 어떻게 바꿀 것인가
       state.me = payload;

       //mutations에는 비동기 작업이 있으면 안된다. >> setTimeout / promise / AJAX / xhr / axios 등 >>
       //mutations에서는 못 쓴다.
   },
    changeNickname(state, payload){
       state.me.nickname = payload.nickname;
    },
    addFollowing(state, payload){
        state.followingList.push(payload)
    },
    addFollower(state,payload){
        state.followerList.push(payload)
    },
   /* deleteFollow(state,payload){
        if(payload.flag==='following'){
           const index = state.followingList.findIndex(v=>v.nickname===payload.nickname);
           console.log(index)
           state.followingList.splice(index, 1)
        }
        if(payload.flag==='follower'){
            const index = state.followerList.findIndex(v=>v.nickname===payload.nickname);
            state.followerList.splice(index, 1)
        }
    }*/
    removeFollowing({commit}, payload) {
        const index = state.followingList.findIndex(v=>v.id === payload.id);
        state.followingList.splice(index,1)
    },
    removeFollower({commit}, payload) {
        const index = state.followerList.findIndex(v=>v.id === payload.id);
        state.followerList.splice(index,1)
    }
};
//동기적 작업

export const actions = {
    //여기서 비동기 작업을 한다.

    signup(context, payload){
        //context안에는 다양한 것들이 있다.

        //서버에 회원 가입 요청을 보내느 부분 >> 회원가입 요청 보내고 응답을 보낸 후 로그인 동시에 진행해서 state의 me를 바꿔줄 것
        context.commit('setMe',payload);
    },
    login({commit ,dispatch, state, rootState, getters, rootGetters},payload){
        // rootState, rootGetters는 index 모듈의 state, getters
        commit('setMe',payload)
    },
    logout(context, payload){
        context.commit('setMe', null)
    },
    changeNickname({commit}, payload) {
        commit('changeNickname',payload)
    },
    /*createFollow({commit}){
        let follower=[
                {
                    nickname:'zeroCho',
                    email:'zeroCho@test.com'
                },
                {
                    nickname:'newkayak12',
                    email:'newkayak12@test.com'
                },
                {
                    nickname:'lzyjin',
                    email:'lzyjin@test.com'
                }
            ];
        let following = [
            {
                nickname : "secondCho",
                email : "secondCho@test.com"
            },
            {
                nickname: "iphone",
                email:'iphone@test.com'
            },
            {
                nickname: "android",
                email:'android@test.com'
            }
        ]
        commit('setFollowing',following)
        commit('setFollower',follower)
    },*/
    /*deleteFollow(context, payload){
        context.commit('deleteFollow',payload)
    }*/

    removeFollowing({commit}, payload){
        commit(`removeFollowing`,payload)
    },
    removeFollower({commit}, payload){
        commit(`removeFollower`,payload)
    }


}
//비동기적 작업