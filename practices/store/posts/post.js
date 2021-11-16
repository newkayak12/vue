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

                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : false,
                photo:[

                ],
                reply:[

                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : false,
                photo:[

                ],
                reply:[

                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : false,
                photo:[

                ],
                reply:[

                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : false,
                photo:[

                ],
                reply:[

                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : false,
                photo:[

                ],
                reply:[

                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : false,
                photo:[

                ],
                reply:[

                ]

            },

            {
                postId: i,
                title : `제목${i}`,
                writer : 'newakayk12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : true,
                photo:[
                    {src:'dummy'},
                    {src:'dummy2'}

                ],
                reply:[

                ]

            },
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
    }
}
export const actions = {
    loadPosts(context, payload =1){
        context.commit('loadPost', payload)
    }

}
const getters = {

}