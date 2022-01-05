export default {
    data(){
        return {
            value : 0,
            title:'mixin.js'
        }
    },
    created(){
        this.changeValue();
    },
    methods:{
        changeValue(){
            this.value++
        }
    }
}