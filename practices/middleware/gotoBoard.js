export default function({store,redirect}){
    if(!store.state.user.user.userInfo){
        console.log("????")
        redirect('/boards/1')
    }
}