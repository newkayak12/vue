import Vue from 'vue';
import VueRouter from 'vue-router'

import mainPage from '@/pages/main.vue'
import vue1 from '@/pages/vue1/index'
import vue2 from '@/pages/vue2/index'
import vue3 from '@/pages/vue3/index'
import annyon from "@/components/annyon";
import hello from "@/components/hello";
import hi from "@/components/hi";
import Test1 from "@/components/test/Test1";
import Test2 from "@/components/test/Test2";

Vue.use(VueRouter)
const router = new VueRouter({
    mode:'hash',
    linkActiveClass:'on',
    routes:[
        {path:'/', component:mainPage, redirect:'/vue1/',
            children:[
                {path:'/vue1/', component:vue1,
                    children:[
                        {path:'/vue1/annyon', component:annyon,
                            children:[
                                {path:"/vue1/annyon/test1/:id", component:Test1},
                                {path:"/vue1/annyon/test2/:id", component:Test2},
                            ]
                        },
                        {path:'/vue1/hello', component:hello},
                        {path:'/vue1/hi', component:hi},

                    ]
                },
                {path:'/vue2/', component:vue2},
                {path:'/vue3/', component:vue3}
            ]
        }
    ]

})

export default router