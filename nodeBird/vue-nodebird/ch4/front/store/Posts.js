export const state = () =>({
   mainPosts:[],
    hasMorePost:true,
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
    },
    removeMainPost(state,payload){
        const index = state.mainPosts.findIndex(v=> v.id===payload.id);
        state.mainPosts.splice(index,1);
    },
    addComment(state,payload){
            const index = state.mainPosts.findIndex(v=>v.id === payload.postId)
            console.log(state.mainPosts)
            state.mainPosts[index].Comments.unshift(payload)

    },
    loadPosts(state) {
        const diff = totalPosts - state.mainPosts.length; // 아직 안불러온 게시글의 수
        const fakePosts = Array(diff>limit? limit : diff).fill().map(v=>({
            //아..
            id:Math.random(),
            User:{
                id:1,
                nickname:'YJ'
            },
            content:`HELLO INFINITE SCROLLING~ ${Math.random()}`,
            Comments:[],
            Images:[],

        }))
        state.mainPosts = state.mainPosts.concat(fakePosts);
        state.hasMorePost = (fakePosts.length === limit);
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
    },
    loadPosts({commit, state}, payload){
        if(state.hasMorePost){
            commit('loadPosts');
        }
    }
}