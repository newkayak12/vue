function getDiff(first, second){
    let diff = Math.ceil((second-first)/(1000*60*60*24))
    let date = first.toLocaleString()
    return diff===1? date.substring(0, date.indexOf(date.substr(-12,3))): `${diff} 일 전`;
}