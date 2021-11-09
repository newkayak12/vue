export default function({store, redirect}){
    if(!store.state.Users.me){
        redirect('/');
    }
}