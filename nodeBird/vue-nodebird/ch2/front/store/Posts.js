export const state = () =>({
    mainPosts:[],

});

export const mutations = {
    addMainPost(state,payload){
        state.mainPosts.unshift(payload)
    },
    removeMainPost(state,payload){
        const index = state.mainPosts.findIndex(v=> v.id===payload.id);
        state.mainPosts.splice(index,1);
    },
    addComment(state,payload){
            const index = state.mainPosts.findIndex(v=>v.id === payload.postId)
            console.log(state.mainPosts)
            state.mainPosts[index].Comments.unshift(payload)

    }
}

export const actions = {
    add({commit}, payload){
        commit("addMainPost", payload)
        /*
            commit('이름', 페이로드 필요 없으면 null, {root: true} )
                                                          >>> index임?
                  모듈/이름
        * */
    },
    remove({commit}, payload){
        commit('removeMainPost', payload);
    },
    addComment({commit}, payload){
        commit('addComment',payload)
    }
}