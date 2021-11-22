import Vue from 'vue'
import posts from "@/pages/posts";
export const state = () => ({
    post:[],

})

export const mutations = {
    loadPost(state, payload){
        let i = 1;
        let dummyPost = [

            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : true,
                photo:[

                ],
                reply:[

                ],
                rt:{
                    postId: 4,
                    title : `제목4`,
                    writer : 'newakayk12',
                    writtenDate: new Date(),
                    content : `내용4`,
                    photo:[

                    ],
                }


            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                reply:[

                ]

            }, {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : true,
                photo:[

                ],
                reply:[

                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                reply:[

                ]

            }, {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : true,
                photo:[

                ],
                reply:[

                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                reply:[

                ]

            },


        ]

        // state.post = state.post.concat(dummyPost)
        // console.log(state.post)
        if(payload===1){
            state.post = []
            state.post=dummyPost;
            return;
        }
        //concat으로 post 붙여주기
    },
    writePost(state,payload){
        state.post.unshift(payload)
    },
    iLiked(state, payload) {
        let idx =state.post.findIndex((ele)=>{
            if(parseInt(ele.postId)===parseInt(payload.postId)){
                return ele;
            }
        })
        let temp = state.post[idx];
        temp.iLiked = payload.flag
        Vue.set(state.post, idx ,temp)
        console.log(temp)
    }

}
export const actions = {
    loadPosts(context, payload =1){
        context.commit('loadPost', payload)
    },
    writePost(context, payload){
        context.commit('writePost',payload)
    },
    iLiked(context, payload){
        context.commit('iLiked',payload)
    }


}
const getters = {

}