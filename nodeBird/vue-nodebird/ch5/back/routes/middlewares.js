exports.isLoggedIn = (req,res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
        return res.status(401).send('로그인이 필요합니다.')
        // 스프링 필터랑 피슷하네

}

exports.isNotLoggedIn = (req,res,next)=>{

    if(!req.isAuthenticated()){
        return next();
    }
        return res.status(401).send('로그인한 사람은 할 수 없습니다.')
        // 스프링 필터랑 피슷하네
}

/*
    module.exports = ""는 대표적인 것들
    exports.~~ = 각각의 작은 모듈들
    module.exports를 하면  exports.~가 덮어씌워져서
    module.exports가 더 우선권이 있으니 둘이 같이 쓰면 안됨
    module.exports ={
        안에 작성하면  exports같이 쓸 수 있다.
    }

 */