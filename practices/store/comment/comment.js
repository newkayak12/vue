let i =1
export const state=()=>({
    comments:[],

})
export const mutations={
    loadComment(state, payload) {
        i = 1
        let dummy = [
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 1,
                refId: -1,
                writtenDate:new Date().setMonth(9)
            },
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 1,
                refId: -1,
                writtenDate:new Date().setDate(1)
            },
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 1,
                refId: -1,
                writtenDate:new Date()
            },
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 2,
                refId: 3,
                writtenDate:new Date()
            },
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 2,
                refId: 3,
                writtenDate:new Date()
            },
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 2,
                refId: 3,
                writtenDate:new Date()
            },
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 2,
                refId: 3,
                writtenDate:new Date()
            },
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 2,
                refId: 3,
                writtenDate:new Date()
            },
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 1,
                refId: -1,
                writtenDate:new Date()
            },
            {
                boardId : 2,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 1,
                refId: -1,
                writtenDate:new Date()
            },
            {
                boardId : 2,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 1,
                refId: -1,
                writtenDate:new Date()
            },
            {
                boardId : 2,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 1,
                refId: -1,
                writtenDate:new Date()
            },
            {
                boardId : 1,
                commentId : i,
                commentWriter : `작성자`+i,
                commentContent: '내용'+(i++),
                level: 1,
                refId: -1,
                writtenDate:new Date()
            },

        ]
        state.comments = [];
        dummy.map((comment=>{
            if(parseInt(comment.boardId)===parseInt(payload)){
                state.comments.push(comment)
            }
        }))
    },
     writeComment(state,payload){
        if(parseInt(payload.level)===1 && parseInt(payload.refId)===-1){
            //일반 댓글 달기
            payload.commentWriter = payload.userInfo.nickname
            delete payload.userInfo
            state.comments.unshift(payload)
            payload.commentId = Math.floor(Math.random()*1000+1);
            return;
        }

        //대댓글 달기
         let index = state.comments.findIndex((element, index)=>{
             if(element.boardId === payload.boardId && element.commentId === payload.refId){
                 return index;
             }
         })
         payload.commentId = Math.floor(Math.random()*1000000)+1


         let count = 0;
         state.comments.forEach((v,i)=>{
             if(v.refId === payload.refId){
                count++
             }
         })


         state.comments.splice(index+1+count,0, payload)

     }
}
export const actions={
    loadComment(context,payload){
        context.commit('loadComment',payload)
    },
    writeComment(context,payload){
        context.commit('writeComment',payload)
    }

}
export const getters={

}