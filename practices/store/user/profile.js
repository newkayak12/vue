export const state =()=>({
    targetInfo:null
})
export const mutations = {
    loadTarget(state,payload){
        let others = [
            {
                email: 'lzyjin@gmail.com',
                nickname:'lzyjin',
                lastLoggedIn: new Date(),
                following: [
                //내가 팔로잉 한 사람들
                    {
                        email: 'newkayak12@gmail.com',
                        nickname: 'newkayak12'
                    },
                    {
                        email : 'woosik@gmail.com',
                        nickname: 'woosik'
                    },
                ],
                follower:[
                //나를 팔로우 한 사람들
                    {
                        email: 'newkayak12@gmail.com',
                        nickname: 'newkayak12'
                    },
                ],
            },
            {
                email: 'woosik@gmail.com',
                nickname:'woosik',
                lastLoggedIn: new Date(),
                following: [
                    //내가 팔로잉 한 사람들
                    {
                        email: 'newkayak12@gmail.com',
                        nickname: 'newkayak12'
                    },
                    {
                        email : 'donwoo@gmail.com',
                        nickname: 'dongwoo'
                    },
                ],
                follower:[
                    //나를 팔로우 한 사람들
                    {
                        email: 'dongwoo@gmail.com',
                        nickname: 'dongwoo'
                    },
                ],
            },
            {
                email: 'dongwoo@gmail.com',
                nickname:'dongwoo',
                lastLoggedIn: new Date(),
                following: [
                    //내가 팔로잉 한 사람들
                    {
                        email: 'newkayak12@gmail.com',
                        nickname: 'newkayak12'
                    },
                    {
                        email : 'woosik@gmail.com',
                        nickname: 'woosik'
                    },
                ],
                follower:[
                    //나를 팔로우 한 사람들
                    {
                        email: 'newkayak12@gmail.com',
                        nickname: 'newkayak12'
                    },
                ],
            },


        ]
        let result = others.find((ele)=>{
            if(ele.nickname===payload){
                return ele
            }
        })

        state.targetInfo = result

    }
}
export const actions = {
    loadTarget(context,payload){
        context.commit('loadTarget',payload)
    }
}