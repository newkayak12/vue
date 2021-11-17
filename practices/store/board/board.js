export const state=()=>({
    boardOne:null,
})
export const mutations={
    loadBoard(state, payload) {
        // let dummy = this.$store.state.boards.board.board;

        let dummy = payload.board.board
        console.log(dummy)
        state.boardOne = dummy.find((element)=>{
            if(parseInt(element.boardId)===parseInt(payload.boardId)){
                return element
            }
        })
        console.log(state.boardOne)

    }
}
export const actions={
    loadBoard(context, payload){
        context.commit('loadBoard',{boardId:payload, board: context.rootState.boards.board})
    }

}
export const getters={


}