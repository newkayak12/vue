import Vue from 'vue'
export const state=()=>({
    boardOne:null,
})
export const mutations={
    loadBoard(state, payload) {
        // let dummy = this.$store.state.boards.board.board;

        let dummy = payload.board.board
        state.boardOne = dummy.find((element)=>{
            if(parseInt(element.boardId)===parseInt(payload.boardId)){
                return element
            }
        })

        //조회수
        state.boardOne.viewCount= parseInt(state.boardOne.viewCount)+1;

    },
    onThumbUp(state, payload) {

        if(payload.element.likeOrDislike.dislike!==null&&(payload.element.likeOrDislike.like!==payload.element.likeOrDislike.dislike)){
            console.log("안좋아요가 눌려있을 때만 작동")
            console.log(payload.element.likeOrDislike)
            payload.element.dislikeCount -= parseInt(payload.element.dislikeCount)===0? 0:1;
        }
        Vue.set(payload.element.likeOrDislike,'like',payload.flag)
        Vue.set(payload.element.likeOrDislike,'dislike',!payload.flag)
        payload.element.likeCount +=1;
    },
    onThumbDown(state, payload) {
            if(payload.element.likeOrDislike.like!==null&&(payload.element.likeOrDislike.like!==payload.element.likeOrDislike.dislike)){
                payload.element.likeCount -= parseInt(payload.element.likeCount)===0? 0:1;
                console.log("???")
            }
            Vue.set(payload.element.likeOrDislike,'dislike',payload.flag)
            Vue.set(payload.element.likeOrDislike,'like',!payload.flag)
            payload.element.dislikeCount += 1;

    },
    detachThumbUp(state, payload) {
        payload.element.likeCount-=1;
        Vue.set(payload.element.likeOrDislike,'dislike',payload.flag)
        Vue.set(payload.element.likeOrDislike,'like',payload.flag)

    },
    detachThumbDown(state, payload) {
        payload.element.dislikeCount-=1;
        Vue.set(payload.element.likeOrDislike,'dislike',payload.flag)
        Vue.set(payload.element.likeOrDislike,'like',payload.flag)
    }

}
export const actions={
    loadBoard(context, payload){
        context.commit('loadBoard',{boardId:payload, board: context.rootState.boards.board})
    },
    onThumbUp(context, payload) {
        let element = context.rootState.boards.board.board.find((ele,idx)=>{
            if(parseInt(ele.boardId)===parseInt(payload.boardId)){
               return ele;
            }
        })
        context.commit('onThumbUp',{boardId:payload.boardId, flag:payload.flag, element: element})
    },
    onThumbDown(context,payload){
        let element = context.rootState.boards.board.board.find((ele,idx)=>{
            if(parseInt(ele.boardId)===parseInt(payload.boardId)){
                return ele;
            }
        })
        context.commit('onThumbDown',{boardId:payload.boardId, flag:payload.flag, element: element})
    },
    detachThumbUp(context,payload){
        let element = context.rootState.boards.board.board.find((ele,idx)=>{
            if(parseInt(ele.boardId)===parseInt(payload.boardId)){
                return ele;
            }
        })
        context.commit('detachThumbUp',{boardId:payload.boardId, flag:payload.flag, element:element})

    },
    detachThumbDown(context,payload){
        let element = context.rootState.boards.board.board.find((ele,idx)=>{
            if(parseInt(ele.boardId)===parseInt(payload.boardId)){
                return ele;
            }
        })
        context.commit('detachThumbDown',{boardId:payload.boardId, flag:payload.flag, element:element})

    }

}
export const getters= {}