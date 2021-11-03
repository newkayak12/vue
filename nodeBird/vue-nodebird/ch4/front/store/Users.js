
export const state = () =>({
    me: null,
    /*me가 null이면 로그인 안 한거고 null이 아니면 로그인 한 상태 */
    followerLists:[],
    followingLists:[],
    //숙제
    hasMoreFollower:true,
    hasMoreFollowing:true,

});

const totalFollower =8;
const totalFollowing = 6;
const limit = 3;

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
        console.log(payload)
        state.followingLists.push(payload)
    },
    addFollower(state,payload){
        state.followerLists.push(payload)
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
    removeFollowing(state, payload) {
        console.log(state.followerLists)
        const index = state.followingLists.findIndex(v => v.id === payload.id);
        state.followingLists.splice(index, 1);
    },
    removeFollower(state, payload) {
        const index = state.followerLists.findIndex(v => v.id === payload.id);
        state.followerLists.splice(index, 1);

    },
    loadMoreFollowings(state){
        const diff = totalFollowing - state.followingLists.length;
        const fakeUsers = Array(diff>limit? limit:diff).fill().map(v=>({
            //역시나 실무에서는 '더보기' 누르고 있는 도중에도 팔로우가 올 수 있기 때문에
            // last id  방식을 사용한다.
                id: Math.random(),
                nickname: Math.floor(Math.random()*1000),
        }));

        state.followingLists = state.followingLists.concat(fakeUsers)
        state.hasMoreFollowing = fakeUsers.length===limit;
    },
    loadMoreFollowers(state){
        const diff = totalFollower - state.followerLists.length;
        const fakeUsers = Array(diff>limit? limit:diff).fill().map(v=>({
            id: Math.random(),
            nickname: Math.floor(Math.random()*1000),
        }));

        state.followerLists = state.followerLists.concat(fakeUsers)
        state.hasMoreFollower = fakeUsers.length===limit;
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
    },

    loadFollowers({commit, state}, payload){
        if(state.hasMoreFollower){
            commit('loadMoreFollowers')
        }
    },
    loadFollowings({commit, state}, payload){
        if(state.hasMoreFollowing){
            commit("loadMoreFollowings")
        }
    }


}
//비동기적 작업