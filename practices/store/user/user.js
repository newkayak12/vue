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
        console.log('login', payload)

        //dummy
        state.userInfo={
            email: payload.email,
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

    }

}
export const actions ={
    signup(context, payload){
        context.commit('signup',payload)
    },
    login(context, payload ){
        context.commit('login',payload)

    }
}
export const getter = {

}
