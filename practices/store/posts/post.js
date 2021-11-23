import Vue from 'vue'
import throttle from "lodash.throttle"
const totalPosts = 120;
const limit = 10;
let q = 11;
let w = 41;
export const state = () => ({
    post:[],
    hasMorePost: true,

})


export const mutations = {
    loadPost(state, payload){
        let i = 1;
        let j = 1;
        let dummyPost = [

            {
                postId: i,
                title : `제목${i}`,
                writer : 'newkayak12',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : true,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++} 내용을 채우는데 있어서 가장 좋은 방법은 무엇일까요 저는 정말 궁금하네요. 아 참 내용 채우기 어렵네요 이걸 db로 옮기면 정말 힘들거 같을거 같다는 생각은 저만 드나요? `,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'newkayak12',
                        content: `내용${j++} 내용을 채우는데 있어서 가장 좋은 방법은 무엇일까요 저는 정말 궁금하네요. 아 참 내용 채우기 어렵네요 이걸 db로 옮기면 정말 힘들거 같을거 같다는 생각은 저만 드나요? `,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'joonmin',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    }, {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    }, {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    }, {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    }, {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    }, {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    }, {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    }, {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    }, {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'newkayak12',
                        content: `내용${j++} + TTEST`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'newkayak12',
                        content: `내용${j++} + TTEST`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'newkayak12',
                        content: `내용${j++} + TTEST_Fin`,
                        writtenDate: new Date()
                    },
                ],
                rt:{
                    postId: 4,
                    title : `제목4`,
                    writer : 'lzyjin',
                    writtenDate: new Date(),
                    content : `내용4`,
                    photo:[

                    ],
                }


            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newkayak12',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++}`,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'joonmin',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                ]

            },
            {
                postId: i,
                title : `제목${i}YEAH!`,
                writer : 'taehee',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++}`,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },

                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'lzyjin',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : true,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++}`,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'joonmin',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'woosik',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++}`,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'joonmin',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                ]

            }, {
                postId: i,
                title : `제목${i}`,
                writer : 'dongwoo',
                writtenDate: new Date(),
                content : `내용${i++}`,
                iLiked : true,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++}`,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'joonmin',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'newkayak12',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++}`,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'joonmin',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'joongmin',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++}`,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'joonmin',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'joongmin',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++}`,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'joonmin',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                ]

            },
            {
                postId: i,
                title : `제목${i}`,
                writer : 'joongmin',
                writtenDate: new Date().setFullYear(2020,12,24),
                content : `내용${i++}`,
                photo:[

                ],
                comment:[
                    {
                        postCommentId : j,
                        writer : 'lzyjin',
                        content: `내용${j++}`,
                        writtenDate: new Date()

                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'woosik',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'joonmin',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'dongwoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                    {
                        postCommentId : j,
                        writer : 'hyeonsoo',
                        content: `내용${j++}`,
                        writtenDate: new Date()
                    },
                ]

            },


        ]

        // state.post = state.post.concat(dummyPost)
        // console.log(state.post)
        if(payload===1){
            state.post = []
            state.post=dummyPost;
        }
        //concat으로 post 붙여주기
    },
    postsInfiniteScroll(state,payload){
        state.hasMorePost = state.post.length>=totalPosts? false:true
        const diff = totalPosts - state.post.length;//아직 안불러온 게시글 수
        const fakePosts = Array(diff>limit? limit:diff).fill().map(v=>({
            postId: q,
            title : `제목${q}`,
            writer : 'newkayak12',
            writtenDate: new Date().setFullYear(2020,12,24),
            content : `내용${q++}`,
            photo:[

            ],
            comment:[
                {
                    postCommentId : w,
                    writer : 'lzyjin',
                    content: `내용${w++}`,
                    writtenDate: new Date()

                },
                {
                    postCommentId : w,
                    writer : 'woosik',
                    content: `내용${w++}`,
                    writtenDate: new Date()
                },
                {
                    postCommentId : w,
                    writer : 'woosik',
                    content: `내용${w++}`,
                    writtenDate: new Date()
                },
                {
                    postCommentId : w,
                    writer : 'joonmin',
                    content: `내용${w++}`,
                    writtenDate: new Date()
                },
                {
                    postCommentId : w,
                    writer : 'dongwoo',
                    content: `내용${w++}`,
                    writtenDate: new Date()
                },
                {
                    postCommentId : w,
                    writer : 'hyeonsoo',
                    content: `내용${w++}`,
                    writtenDate: new Date()
                },
            ]

        }))
        state.post = state.post.concat(fakePosts)
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
    },
    modifyPost(state, payload) {
        let idx = state.post.findIndex((ele)=>{
            if(parseInt(ele.postId)===parseInt(payload.postId)){
                return ele
            }
        });
        Vue.set(state.post, idx, payload)
    },
    deletePost(state,payload){
        let idx = state.post.findIndex((ele)=>{
            if(parseInt(ele.postId)===parseInt(payload)){
                return ele
            }
        })
        state.post.splice(idx,1)
    },
    deleteComment(state, payload) {
        state.post.forEach((v,i)=>{
            let idx = v["comment"].findIndex((ele)=>{
                if(parseInt(ele.postCommentId)===parseInt(payload)){

                    return ele;
                }

            })
            if(parseInt(idx)!==-1){
                v["comment"].splice(idx,1)
            }
        })

    },
    writeComment(state,payload){
        state.post.find((ele)=>{
            if(parseInt(ele.postId)==parseInt(payload.postId)){
                ele.comment.unshift({
                    postCommentId : payload.postCommentId,
                    writer : payload.writer,
                    content: payload.content,
                    writtenDate: payload.writtenDate
                })
            }
        })

    }


}
export const actions = {
    loadPosts(context, payload =1){
        context.commit('loadPost', payload)
    },
    postsInfiniteScroll:throttle(function(context,payload){
        context.commit('postsInfiniteScroll')
    },1000),
    writePost(context, payload){
        context.commit('writePost',payload)
    },
    iLiked(context, payload){
        context.commit('iLiked',payload)
    },
    modifyPost(context,payload){
        context.commit("modifyPost",payload)
    },
    deletePost(context,payload){
        context.commit("deletePost",payload)
    },
    deleteComment(context,payload){
        context.commit('deleteComment',payload)
    },
    writeComment(context,payload){
        context.commit('writeComment',payload)
    },

}



const getters = {

}