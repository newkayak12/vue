export const state = () => ({
    board:[],
    boardTotalData :11,
    pageNo: 0,
    pageEnd : state.pageNo*pageBarSize+1,

})

const pageBarSize = 5;

export const mutations = {

    loadBoard(state, payload){
        state.pageNo = payload;


        let i = 1;
        let dummyBoard = [
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        src:'img1'
                    },
                    {
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
            },


        ]
        // state.board = state.board.concat(dummyBoard)

            state.board = dummyBoard;
            return

    },

}
export const actions ={
    loadBoard(context,payload ){
        context.commit('loadBoard',payload)
        console.log('action', payload)
    },



}