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
        console.log('signup', payload)
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
                {
                    email: 'lzyjin@gmail.com',
                    nickname: 'yj'
                },
                {
                    email : 'woosik@gmail.com',
                    nickname: 'ws'
                },
                {
                    email : 'dongWoo@gmail.com',
                    nickname: 'dw'
                }
            ],
            follower:[
                {
                    email: 'lzyjin@gmail.com',
                    nickname: 'yj'
                },
                {
                    email:'dongWoo@gmail.com',
                    nickname:'dw'
                },
                {
                    email:'hyunsoo@gmail.com',
                    nickname: 'hs'
                }
            ],
            posts:[
                {
                    title:'title1',
                    writer:'newkayak12',
                    content:'content1',
                    writeDate:new Date(),

                },
                {
                    title:'title2',
                    writer:'newkayak12',
                    content:'content1',
                    writeDate:new Date(),

                },
                {
                    title:'title3',
                    writer:'newkayak12',
                    content:'content1',
                    writeDate:new Date(),

                },
                {
                    title:'title4',
                    writer:'newkayak12',
                    content:'content1',
                    writeDate:new Date(),

                },
                {
                    title:'title5',
                    writer:'newkayak12',
                    content:'content1',
                    writeDate:new Date(),

                },

            ]

        }

    },
    logout(state,payload){
        state.userInfo=null;
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
    }

}
export const getter = {

}
