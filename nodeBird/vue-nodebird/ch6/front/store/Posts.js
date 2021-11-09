import throttles from 'lodash.throttle';


export const state = () =>({
   mainPosts:[],
    hasMorePost:true,
    imagePaths:[],
});
const totalPosts = 51;
const limit = 10;
//실무에서는 스로틀링을 사용하고 리밋은 따로 사용하지 않는다.
/*
   Throttling : 서버와 통신 중에 요청이 너무 많이 가면 서버에 더욱 부담이 된다. 이러한 무차별적인 요청을 막으려면 쓰로틀링으로
    limit : 사람들이 게시글을 삭제하고 작성하고 하다보면 totalPosts가 계속 바뀐다. >> 그래서 lastId(마지막으로 불러운 게시글의 아이디를 기반으로)기반으로 10개 이렇게 불러오는 식으로 한다.
 */
//무한 스크롤 >> 전체 게시물의 수를 알아내는 것은 DB에 부담... >> 그냥 10개씩 가져오다 10개 미만으로 줄면 더 이상 게시물이 없구나 정도로 생각하는 것이 좋다.
export const mutations = {
    addMainPost(state,payload){
        state.mainPosts.unshift(payload)
        state.imagePaths = [];
    },
    removeMainPost(state,payload){
        const index = state.mainPosts.findIndex(v=> v.id===payload.postId);
        state.mainPosts.splice(index,1);
    },
    addComment(state,payload){
            const index = state.mainPosts.findIndex(v=>v.id === payload.PostId)
            console.log("addcomment/mutations")
            console.log("======")
            console.log(payload)
            console.log("======")
            console.log(state.mainPosts)
            console.log(index)
        state.mainPosts[index].Comments.unshift(payload)

    },
    loadComments(state,payload){
        const index = state.mainPosts.findIndex(v=>v.id ===payload.postId);
        state.mainPosts[index].Comments = payload.data
    },
    loadPost(state, payload){
        state.mainPosts = [payload];
        console.log("is it work?")
    },
    loadPosts(state, payload) {
        if(payload.reset){
            state.mainPosts = payload.data;
        } else {
            state.mainPosts = state.mainPosts.concat(payload.data);
        }
        state.hasMorePost = (payload.data.length === limit);

    },concatImagePaths(state,payload){
        state.imagePaths = state.imagePaths.concat(payload)
        //기존에 있던 것과 추가적으로 업로드 하는 것 반영
    },
    removeImagePath(state,payload){
        state.imagePaths.splice(payload,1);
    },
    likePost(state,payload){
        const index = state.mainPosts.findIndex(v=>v.id ===payload.postId);
        state.mainPosts[index].Likers.push({
            id:payload.userId
        })
    },
    unlikePost(state, payload) {
        const index = state.mainPosts.findIndex(v=>v.id === payload.postId);
        const userIndex = state.mainPosts[index].Likers.findIndex(v=>v.id === payload.userId);

        state.mainPosts[index].Likers.splice(userIndex,1);
    }
}



/////////////////////////////////////////////////////

export const actions = {
    add({commit, state}, payload){
        /*
            commit('이름', 페이로드 필요 없으면 null, {root: true} )
                                                          >>> index임?
                  모듈/이름
        * */
        this.$axios.post('/post', {
            content:payload.content,
            image: state.imagePaths
        },{
            withCredentials:true
        })
        .then((res)=>{
            commit('addMainPost',res.data)

        })
        .catch(()=>{

        });
    },
    remove({commit}, payload){
        this.$axios.delete(`/post/${payload.postId}`,{
            withCredentials:true
        }).then(()=>{
            commit('removeMainPost', payload);
        }).catch((err)=>{
            console.error(err)
        })

    },
    addComment({commit}, payload){
        this.$axios.post(`/post/${payload.postId}/comment`, {
            content:payload.content
        },{
            withCredentials:true
        })
            .then((res)=>{
            commit('addComment',res.data)
        })
            .catch((err)=>{
                console.error(err)
            })
    },
    loadComment({commit},payload){
        const res = this.$axios.get(`/post/${payload.postId}/comments`)
            .then((res)=>{
                    commit('loadComments', {
                        postId:payload.postId,
                        data:res.data,
                    })
            })
            .catch((err)=>{
            })

    },
    async loadPost  ({commit, state}, payload){
            try {
                    const res = await this.$axios.get(`/post/${payload}`);
                    commit('loadPost', { data: res.data,});
                    return;
            } catch (err) {
                console.error(err);
            }

        },

    loadPosts: throttles( async function({commit, state}, payload){
        try {
            if (payload && payload.reset) {
                const res = await this.$axios.get(`/posts?limit=10`);
                commit('loadPosts', {
                    data: res.data,
                    reset: true,
                });
                return;
            }
            if (state.hasMorePost) {
                const lastPost = state.mainPosts[state.mainPosts.length - 1];
                const res = await this.$axios.get(`/posts?lastId=${lastPost && lastPost.id}&limit=10`);
                commit('loadPosts', {
                    data: res.data,
                });
                return;
            }
        } catch (err) {
            console.error(err);
        }

            // if(payload&&payload.reset){
            //     this.$axios.get("/posts?limit=10")
            //     .then((res)=>{
            //         commit(`loadPosts`,{
            //             data:res.data,
            //             reset:true
            //         })
            //     })
            //     .catch((e)=>{
            //         console.error(e)
            //     })
            // }
            //
            // if(state.hasMorePost){
            //     const lastPost = state.mainPosts[state.mainPosts.length-1];
            //     await this.$axios.get(`/posts?offset=${lastPost&&lastPost.id}&limit=10`)
            //         .then((res)=>{
            //             commit('loadPosts', {data: res.data, reset:true});
            //         })
            //         .catch((err)=>{
            //             console.error(err)
            //         })
            // }

        // 이 두 개의 차이점을 정확하게 모르겠는데 분명 자바스크립트 상에서는 미묘하게 차이가 있을 것도 같은데
        /*
            throttle : 실행하고 3초 기다리고 다시 실행 할 수 있다.
            debounce : 기다리고 모았다가 실행
         */
    }, 2000),

    // async loadPosts({ commit, state }, payload) {
    //
    //     if(state.hasMorePost) {
    //
    //         try {
    //
    //             const res = await this.$axios.get(`http://localhost:3085/posts?offset=${state.mainPosts.length}&limit=10`);
    //             console.log("test")
    //             commit('loadPosts', res.data);
    //
    //         } catch (err) {
    //
    //             console.error(err);
    //
    //         }
    //
    //     }
    //
    // },
    uploadImages({commit}, payload){

        console.log("Posts/uploadImage")
        console.log(payload)
        this.$axios.post("/post/images", payload, {
            withCredentials:true
        })
        .then((res)=>{
            commit('concatImagePaths', res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },
    retweet({commit}, payload){
        console.log(`rt:${payload.postId}`)
        this.$axios.post(`/post/${payload.postId}/retweet`,{},{
            withCredentials:true
        })
        .then((res)=>{
            commit('addMainPost',res.data)
        })
        .catch((err)=>{
            console.error(err)
            alert(err.response.data)
        })
    },
    likePost({commit},payload){
        console.log(`likePost:${payload.postId}`)
        this.$axios.post(`/post/${payload.postId}/like`,{},{
            withCredentials:true
        })
        .then((res)=>{
                commit('likePost',{
                    userId:res.data.userId,
                    postId:payload.postId,
                })
        })
        .catch((err)=>{
            console.error(err)
        })

    },
    unlikePost({commit},payload){
        console.log(`unlikePost:${payload.postId}`)
        this.$axios.delete(`/post/${payload.postId}/like`,{
            withCredentials:true
        })
        .then((res)=>{
            commit('unlikePost',{
                userId:res.data.userId,
                postId:payload.postId,
            })
        })
        .catch((err)=>{
            console.error(err)
        })

    },
    loadUserPosts: throttles (async function({commit},payload){
        // try{
        //     if(payload && payload.reset){
        //         const res = await this.$axios.get(`/user/${payload.userId}/posts?limit=10`);
        //         commit('loadPosts',
        //             {
        //                 data: res.data,
        //                 reset:true
        //             }
        //     );
        //         return;
        //     }
        //     if(state.hasMorePost){
        //         const lastPost = state.mainPosts[state.mainPosts.length - 1];
        //         const res = await this.$axios.get(`/user/${payload.userId}/posts?lastId=${lastPost && lastPost.id}&limit=10`);
        //         console.log('OtherPosts')
        //         console.log(res.data)
        //         commit(`loadPosts`,
        //             {
        //                 data: res.data,
        //                 reset:true
        //            }
        //         );
        //         return;
        //     }
        // }catch (e) {
        //     console.error(e)
        // }


        try {
            if (payload && payload.reset) {
                const res = await this.$axios.get(`/user/${payload.userId}/posts?limit=10`);
                commit('loadPosts', {
                    data: res.data,
                    reset: true,
                });
                return;
            }
            if (state.hasMorePost) {
                const lastPost = state.mainPosts[state.mainPosts.length - 1];
                const res = await this.$axios.get(`/user/${payload.userId}/posts?lastId=${lastPost && lastPost.id}&limit=10`);
                commit('loadPosts', {
                    data: res.data,
                });
                return;
            }
        } catch (err) {
            console.error(err);
        }
    },2000),

    loadHashtagPosts: throttles (async function({commit},payload){

        try {
            if (payload && payload.reset) {
                const res = await this.$axios.get(`/hashtag/${payload.hashtag}?limit=10`);
                commit('loadPosts', {
                    data: res.data,
                    reset: true,
                });
                return;
            }
            if (state.hasMorePost) {
                const lastPost = state.mainPosts[state.mainPosts.length - 1];
                const res = await this.$axios.get(`/hashtag/${payload.hashtag}/posts?lastId=${lastPost && lastPost.id}&limit=10`);
                commit('loadPosts', {
                    data: res.data,
                });
                return;
            }
        } catch (err) {
            console.error(err);
        }
    },2000)




}