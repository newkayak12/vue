export const state = () => ({
    userInfo:null, //회원 정보를 담고 있다. (email, nickname, lastLoggedIn, createdAt, follwer, follwing, likelist)
    signup:true, //로그인인지 회원가입인지

})
export const mutations = {
    signupToggle(state){
        state.signup = (state.signup===true? false:true)
        //회원가입창/ 로그인창 바꿔주는 데이터
    },
    signup(state,payload){
        //회원 가입
    },
    login(state,payload){
        //로그인
        //dummy
        console.log(payload)

        state.userInfo={
            email: typeof payload!=='undefined'? payload.email:'newkayak12@gmail.com',
            nickname:'newkayak12',
            lastLoggedIn: new Date(),
            following: [
                //내가 팔로잉 한 사람들
                {
                    email: 'lzyjin@gmail.com',
                    nickname: 'lzyjin'
                },
                {
                    email : 'woosik@gmail.com',
                    nickname: 'woosik'
                },
                {
                    email : 'dongWoo@gmail.com',
                    nickname: 'dongwoo'
                },
                {
                    email : 'hyeonsoo@gmail.com',
                    nickname: 'hyeonsoo'
                }
            ],
            follower:[
                //나를 팔로우 한 사람들
                {
                    email: 'lzyjin@gmail.com',
                    nickname: 'lzyjin'
                },
                {
                    email:'dongWoo@gmail.com',
                    nickname:'dongwoo'
                },
                {
                    email:'hyunsoo@gmail.com',
                    nickname: 'hyeonsoo'
                },
                {
                    email : 'joonmin@gmail.com',
                    nickname: 'joonmin'
                }
            ],
            myPost:[]
        }

    },
    logout(state,payload){
        state.userInfo=null;
    },
    addFollowing(state, payload) {
        state.userInfo.following.find((ele)=>{
            if(ele.nickname===payload){
                return
            }
        })

        state.userInfo.following.push({email:"others@email.com", nickname:payload})
    },
    unfollowing(state, payload) {
        let idx = state.userInfo.following.findIndex((ele)=>{
            if(ele.nickname===payload){
                return ele
            }
        })
        state.userInfo.following.splice(idx,1)
    }

}
export const actions ={
    signup(context, payload){
        context.commit('signup',payload)
    },
    login(context, payload ){
        context.commit('login',payload)

    },
    logout(context,payload){
        context.commit('logout',payload)
    },
    loadUser(context, payload){
        //백엔드가 있어야 가능한 로그인 유지
        // 그냥 로그인 상태로 두자
        context.commit('login')
    },
    addFollowing(context, payload){
        context.commit('addFollowing',payload)
    },
    unfollowing(context,payload){
        context.commit('unfollowing',payload)
    }

}
export const getter = {

}
