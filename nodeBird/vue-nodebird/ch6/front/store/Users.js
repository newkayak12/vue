
export const state = () =>({
    me: null,
    /*me가 null이면 로그인 안 한거고 null이 아니면 로그인 한 상태 */
    followerLists:[],
    followingLists:[],
    //숙제
    hasMoreFollower:true,
    hasMoreFollowing:true,
    other:null, // 다른 사람의 정보

});

const totalFollower =8;
const totalFollowing = 6;
const limit = 3;





///////////////////////////////////////////////////////////////////
export const mutations = {
    setMe(state, payload){
        //state는 상단의 state에 접근
        //payload는 state를 어떻게 바꿀 것인가
        state.me = payload;

        //mutations에는 비동기 작업이 있으면 안된다. >> setTimeout / promise / AJAX / xhr / axios 등 >>
        //mutations에서는 못 쓴다.
    },
    setOther(state,payload){
        state.other = payload
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
     // deleteFollow(state,payload){
     //     if(payload.flag==='following'){
     //        const index = state.followingList.findIndex(v=>v.nickname===payload.nickname);
     //        console.log(index)
     //        state.followingList.splice(index, 1)
     //     }
     //     if(payload.flag==='follower'){
     //         const index = state.followerList.findIndex(v=>v.nickname===payload.nickname);
     //         state.followerList.splice(index, 1)
     //     }
     // },





    loadMoreFollowings(state, payload){
        // const diff = totalFollowing - state.followingLists.length;
        // const fakeUsers = Array(diff>limit? limit:diff).fill().map(v=>({
        //     //역시나 실무에서는 '더보기' 누르고 있는 도중에도 팔로우가 올 수 있기 때문에
        //     // last id  방식을 사용한다.
        //         id: Math.random(),
        //         nickname: Math.floor(Math.random()*1000),
        // }));
        if(payload.offset === 0){
            state.followingLists = payload.data
        //    초기화
        } else {
            state.followingLists = state.followingLists.concat(payload.data)
        }
        state.hasMoreFollowing = payload.data.length===limit;
    },
    loadMoreFollowers(state, payload){
        // const diff = totalFollower - state.followerLists.length;
        // const fakeUsers = Array(diff>limit? limit:diff).fill().map(v=>({
        //     id: Math.random(),
        //     nickname: Math.floor(Math.random()*1000),
        // }));

        if(payload.offset === 0){
            state.followerLists = payload.data
            //    초기화
        } else {
            state.followerLists = state.followerLists.concat(payload.data)
        }
        state.hasMoreFollower = payload.data.length===limit;
    },
    following(state, payload) {
        state.me.Followings.push({
            id:payload.userId
        })
    },
    removeFollowing(state, payload) {
        let index = state.me.Followings.findIndex(v => v.id === payload.userId);
        state.me.Followings.splice(index, 1);

        index = state.followingLists.findIndex(v => v.id === payload.userId);
        state.followingLists.splice(index,1)
    },
     removeFollower(state, payload) {
        let index = state.me.Followers.findIndex(v => v.id === payload.userId);
        state.me.Followers.splice(index, 1);

        index = state.followerLists.findIndex(v => v.id === payload.userId);
        state.followerLists.splice(index, 1);

    },
};
//동기적 작업















/////////////////////////////////////////////////////////////////////////////////////////

export const actions = {
    //여기서 비동기 작업을 한다.

    signup(context, payload){
        //context안에는 다양한 것들이 있다.
            console.log(payload)
        //서버에 회원 가입 요청을 보내느 부분 >> 회원가입 요청 보내고 응답을 보낸 후 로그인 동시에 진행해서 state의 me를 바꿔줄 것
        this.$axios.post('/user',{
            email:payload.email,
            nickname:payload.nickname,
            password:payload.password,
        } ).then((res)=>{
            context.commit('setMe',res.data);
        }).catch((err)=>{
            console.error(err)
        }); //REST API
        //애매하면 post

    },
    login({commit ,dispatch, state, rootState, getters, rootGetters},payload){
        // rootState, rootGetters는 index 모듈의 state, getters

        this.$axios.post('/user/login', {
            email:payload.email,
            password:payload.password,
        },
        {
            withCredentials:true
        }
        ).then((res)=>{
            commit('setMe',res.data)
        }).catch((err)=>{
            console.error(err)
        })
    },
    logout(context, payload){
        this.$axios.post('/user/logout', {},{
            withCredentials:true,
        })
        .then((data)=>{
            context.commit('setMe', null)
        }).catch((err)=>{
            console.error(err)
        })
    },
    changeNickname({commit}, payload) {

        this.$axios.patch('/user/nickname', {nickname:payload.nickname},{
            withCredentials:true
        }).then((res)=>{
            commit('changeNickname',payload)
        }).catch((error)=>{
            console.error(error)
        })
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

    // removeFollowing({commit}, payload){
    //     commit(`removeFollowing`,payload)
    // },


    loadFollowers({commit, state}, payload){
        // if(state.hasMoreFollower){
        console.log("loadFollower/ payload")
        console.log(payload)
        // if((!payload && payload.offset === 0) && !state.hasMoreFollower){
        if (!(payload && payload.offset === 0) && !state.hasMoreFollower) {
            return;
        }
            let offset = state.followerLists.length;
        if(payload && payload.offset === 0){
            offset = 0;
        }

        return this.$axios.get(`/user/${state.me.id}/followers?limit=3&offset=${offset}`,{
            withCredentials:true
        })
        .then((res)=>{
            commit("loadMoreFollowers",{
                data:res.data,
                offset,
            })

        }).catch((err)=>{
            console.error(err)
        })
        // }
    },
    loadFollowings({commit, state}, payload){
        if(!(payload && payload.offset === 0) && !(state.hasMoreFollowing)){
            return;
        }

        let offset = state.followingLists.length;

        if(payload && payload.offset === 0){
            offset = 0;
        }


        return this.$axios.get(`/user/${state.me.id}/followings?limit=3&offset=${offset}`,{
            withCredentials:true
        })
        .then((res)=>{
            commit("loadMoreFollowings",{
                data:res.data,
                offset,
            })

        }).catch((err)=>{
            console.error(err)
        })

    },
    async loadUser({ state, commit }) {
        console.log("loadUser")
            const res = await this.$axios.get('/user', {
                withCredentials: true,
            })
            .then((res)=>{
                commit('setMe', res.data);
            })
            .catch((err)=>{
                console.error(err);
            });
    },
    async loadOther({commit},payload){
        try{
            const res = await this.$axios.get(`/user/${payload.userId}`,{
                withCredentials:true
            })
            commit(`setOther`, res.data)
        } catch (e){
            console.error(e)
        }
    },
    follow({commit}, payload){
        this.$axios.post(`/user/${payload.userId}/follow`,{},{
            withCredentials:true
        })
        .then((res)=>{
                commit('following',{
                    userId : payload.userId
            })
        })
        .catch((e)=>{
            console.error(e)
        })
    },
    unFollow({commit}, payload) {
        this.$axios.delete(`/user/${payload.userId}/follow`,{
            withCredentials:true
        }).then((res)=>{
                commit('removeFollowing',{
                    userId : payload.userId
                })
        })
        .catch((e)=>{
            console.error(e)
        })
    },
    removeFollower({commit}, payload){
        return this.$axios.delete(`user/${payload.userId}/follower`,{
            withCredentials:true
        })
        .then((res)=>{
            commit('removeFollower',{
                userId : payload.userId
            })
        })
        .catch((e)=>{
            console.error(e)
        })
    },




}
//비동기적 작업