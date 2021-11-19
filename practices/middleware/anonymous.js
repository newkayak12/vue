export default function({store,redirect}){
    if(store.state.user.user.userInfo){
        console.log("anony")
        redirect('/')
    }
}
