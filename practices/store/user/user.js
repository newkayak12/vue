import Vue from 'vue'
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
            state.userInfo={
                email: typeof payload!=='undefined'? payload.email:'newkayak12@gmail.com',
                password:'qwer1234',
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
                    },
                    {
                        email : 'jisik1@gmail.com',
                        nickname: 'jisik1'
                    },
                    {
                        email : 'jisik1@gmail.com',
                        nickname: 'jisik1'
                    },
                    {
                        email : 'jisik3@gmail.com',
                        nickname: 'jisik3'
                    },
                    {
                        email : 'jisik2@gmail.com',
                        nickname: 'jisik2'
                    },
                    {
                        email : 'jisik4@gmail.com',
                        nickname: 'jisik4'
                    },
                    {
                        email : 'jisik5@gmail.com',
                        nickname: 'jisik5'
                    },
                    {
                        email : 'jisik6@gmail.com',
                        nickname: 'jisik6'
                    },
                    {
                        email : 'jisik7@gmail.com',
                        nickname: 'jisik7'
                    },
                    {
                        email : 'jisik8@gmail.com',
                        nickname: 'jisik8'
                    },
                    {
                        email : 'jisik9@gmail.com',
                        nickname: 'jisik9'
                    },
                    {
                        email : 'jisik10@gmail.com',
                        nickname: 'jisik10'
                    },
                    {
                        email : 'jisik11@gmail.com',
                        nickname: 'jisik11'
                    },
                    {
                        email : 'jisik12@gmail.com',
                        nickname: 'jisik12'
                    },
                    {
                        email : 'jisik13@gmail.com',
                        nickname: 'jisik13'
                    },
                    {
                        email : 'jisik14@gmail.com',
                        nickname: 'jisik14'
                    },
                    {
                        email : 'jisik15@gmail.com',
                        nickname: 'jisik15'
                    },
                    {
                        email : 'jisik16@gmail.com',
                        nickname: 'jisik16'
                    },
                    {
                        email : 'jisik17@gmail.com',
                        nickname: 'jisik17'
                    },
                    {
                        email : 'jisik18@gmail.com',
                        nickname: 'jisik18'
                    },
                    {
                        email : 'jisik19@gmail.com',
                        nickname: 'jisik19'
                    },
                    {
                        email : 'jisik20@gmail.com',
                        nickname: 'jisik20'
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
    },
    changeNickname(state,payload){
        Vue.set(state.userInfo,'nickname',payload)
    },
    changePassword(state,payload){
        Vue.set(state.userInfo,"password",payload)
    },
    ByeByeSNS(state,payload){
        state.userInfo=null
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
    },
    changeNickname(context,payload){
        context.commit('changeNickname',payload)
    },
    changePassword(context,payload){
        context.commit("changePassword",payload)
    },
    ByeByeSNS(context,payload){
        context.commit('ByeByeSNS',payload)
    }

}
export const getter = {

}
