
export const state = () => ({
    board:[],
    numberPerPage : 10,
    pageBarSize : 5,
    totalData: 0,
    totalPage: 0,
    cPage:1,
    pageBarHead:1,
    pageBarEnd:0,
    pageBar:[]

})

export const mutations = {

    loadBoard(state, payload){
        let i = 1;
        let dummyBoard = [
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `newkayak12`,
                viewCount : `${i+5550}`,
                writtenDate : new Date().setFullYear(2020,12,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: true,
                    dislike:null

                }
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+1230}`,
                writtenDate : new Date().setFullYear(2020,9,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:"newkayak12",
                    like: null,
                    dislike:true

                }
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+2522220}`,
                writtenDate : new Date().setFullYear(2020,10,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: true,
                    dislike:null

                }
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+220}`,
                writtenDate : new Date().setFullYear(2020,10,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:true

                }
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date().setFullYear(2020,10,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:true

                }
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+22220}`,
                writtenDate : new Date().setFullYear(2020,10,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:true

                }
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+2120}`,
                writtenDate : new Date().setFullYear(2020,10,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:true

                }
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+220}`,
                writtenDate : new Date().setFullYear(2020,10,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: true,
                    dislike:null

                }
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date().setFullYear(2020,10,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            },
            {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date().setFullYear(2020,10,i),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            }, {
                boardId : i,
                boardTitle : `게시판 제목 ${i}`,
                boardContent : `게시판 내용 ${i}`,
                boardWriter : `작성자 ${i}`,
                viewCount : `${i+20}`,
                writtenDate : new Date(),
                photo :[
                    {
                        idx:1,
                        src:'img1'
                    },
                    {
                        idx:2,
                        src:'img2'
                    }
                ],
                replyCount: i+10,
                likeCount:i,
                dislikeCount: (i++)+10,
                likeOrDislike: {
                    email:'newkayak12',
                    like: null,
                    dislike:null

                }
            },
        ]
        state.totalData = dummyBoard.length
        let totalPg =  Math.ceil(state.totalData/state.numberPerPage)
        state.totalPage = totalPg
        state.cPage = parseInt(payload);
        state.pageBarHead = Math.floor((parseInt(payload)-1)/state.pageBarSize) * state.pageBarSize +1;
        let pgEnd = state.pageBarHead+state.pageBarSize-1
        state.pageBarEnd   = pgEnd


        let offset = (state.numberPerPage*(state.cPage-1))
        state.board =dummyBoard.slice(offset, offset+state.numberPerPage);
        //slice가 아닌 그냥 대입으로 집어 넣으면 된다.


        let no = state.pageBarHead
        state.pageBar = []

        while(!(no>pgEnd || no > totalPg)){
            state.pageBar.push(no++)
        }
    },
    sortingBoard(state,payload){


        state.board = state.board.sort((o1, o2)=>{
            if(payload.sortingWay==='NONE'){
                console.log('NONE')
                return o1.boardId-o2.boardId
            }
            if(payload.sortingWay==='ASC'){
                if(payload.standard==='viewCount'){
                    console.log('viewcount ASC')
                    return o1.viewCount-o2.viewCount
                }
                if(payload.standard==='writtenDate'){
                    console.log('writtenDate ASC')
                    return o1.writtenDate-o2.writtenDate
                }
                return 0;
            }
            if(payload.sortingWay==='DESC'){
                if(payload.standard==='viewCount'){
                    console.log('viewcount desc')
                    return o2.viewCount-o1.viewCount
                }
                if(payload.standard==='writtenDate'){
                    console.log('writtenDate desc')
                    return o2.writtenDate-o1.writtenDate
                }

            }
        })
        console.log(state.board)
    },
    writeBoard(state, payload) {
        state.board.unshift(payload)
    },
    deleteBoard(state,payload){
        let idx = state.board.findIndex((ele)=>{
            if(parseInt(ele.boardId)===parseInt(payload)){
                return ele
            }
        })
        state.board.splice(idx,1)
    }

}
export const actions ={
    loadBoard(context,payload ){
        context.commit('loadBoard',payload)
        // {offset, cPage}
        let offset = (state.numberPerPage*(state.cPage-1))
    },
    sortingBoard(context,payload){
        // DB에서 진행
        // if(payload.sortingWay==='NONE'){
        //     console.log('NONE')
        //     return o1.boardId-o2.boardId
        // }
        // if(payload.sortingWay==='ASC'){
        //     if(payload.standard==='viewCount'){
        //         console.log('viewcount ASC')
        //         return o1.viewCount-o2.viewCount
        //     }
        //     if(payload.standard==='writtenDate'){
        //         console.log('writtenDate ASC')
        //         return o1.writtenDate-o2.writtenDate
        //     }
        //     return 0;
        // }
        // if(payload.sortingWay==='DESC'){
        //     if(payload.standard==='viewCount'){
        //         console.log('viewcount desc')
        //         return o2.viewCount-o1.viewCount
        //     }
        //     if(payload.standard==='writtenDate'){
        //         console.log('writtenDate desc')
        //         return o2.writtenDate-o1.writtenDate
        //     }
        //
        // }

        context.commit('sortingBoard',payload)
    },
    writeBoard(context, payload){
        context.commit('writeBoard',payload)
    },
    deleteBoard(context,payload){
        context.commit('deleteBoard',payload)

    }



}