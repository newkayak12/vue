export const state=()=>({
    boardOne:null,
})
export const mutations={
    loadBoard(state, payload) {
        // let dummy = this.$store.state.boards.board.board;
        // let dummy = [1,2,3]
        // state.boardOne = dummy.find((element)=>{
        //     console.log(element)
        // })
    }
}
export const actions={
    loadBoard(context, payload){
        context.commit('loadBoard',payload)
    }

}
export const getters={

}