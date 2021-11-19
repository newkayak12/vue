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
            payload.commentId = Math.floor(Math.random()*10000000)+10000;
            return;
        }

        //대댓글 달기
         let index = state.comments.findIndex((element, index)=>{
             if(element.boardId === payload.boardId && element.commentId === payload.refId){

                 console.log(`\n${element.boardId} : ${payload.boardId}`)
                 console.log(`${element.commentId} : ${payload.refId}`)
                 console.log(index+"\n")
                 return index;
             }
         })//기존 대댓글이 하나도 없을 때 사용하는 인덱스

         payload.commentWriter = payload.userInfo.nickname
         payload.commentId = Math.floor(Math.random()*1000000)+1000
         delete payload.userInfo

         const plusIndex = (function(){
             let count = 0;
             state.comments.forEach((v,i)=>{
                 if(v.refId === payload.refId){
                     count = i;
                 }
             })

             return count;
         })// 추가로 대댓글이 있다면 사용하는 인덱스


         let cocomentIndex = parseInt(plusIndex())===0? index+1:(parseInt(plusIndex()))+1
         state.comments.splice(cocomentIndex,0, payload)
         //문제점 : 방금 단 댓글에 댓글을 달면 인덱스를 찾지 못해서 맨 위에 달리는 불상사가 생김

     },
    deleteComment(state,payload){
        console.log(state.comments)
        let idx = state.comments.findIndex((ele)=>{
            if(parseInt(ele.commentId)===parseInt(payload)){
                return ele;
            }
        })
        console.log(idx)
        state.comments.splice(idx,1)
    }

}
export const actions={
    loadComment(context,payload){
        context.commit('loadComment',payload)
    },
    writeComment(context,payload){
        context.commit('writeComment',payload)
    },
    deleteComment(context,payload){
        context.commit('deleteComment', payload)
    }

}
export const getters={

}