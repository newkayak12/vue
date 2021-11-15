export default function({store,redirect}){
    if(store.state.user.user.userinfo){
        console.log("anony")
        redirect('/')
    }
}
