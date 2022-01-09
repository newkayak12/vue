##1. vue Router

vue-router로 페이지가 이동한 듯한 느낌이 들 수 있게 할 수 있다.<br>
vue router의 경우 페이지를 이동시킨 것과 같은 느낌을 받게 할 수도 있고 혹은 페이지 내에서 주소를 바꾸면서 일부만 변경할 수도 있다.<br>

```js
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
```
이와 같이 형제로 두어 페이지를 이동할 수도 ```<router-view></router-view>```를 통해서 페이지의 일부만 바꿀 수도 있다.



##2. EVENT BUS 
이벤트 버스는 관계가 없는 (혹은 있는) 컴포넌트 간의 통신을 할 때 사용한다.
```js
import vue from 'vue'
export default new vue();
```
와 같이 깡통 이벤트 버스를 하나 만들어주고 
```vue
methods:{
         eventBus(){
         eventBus.$emit('event')
         },
     }
```
으로 이벤트를 보내준다. 물론, 위의 이벤트를 받기 위해서는 
```vue
     eventBus.$on('event', this.alerter)
```
와 같은 이벤트 버스 이벤트를 등록해줘야한다.<br><br>
추가적으로 단순히 부모의 데이터를 바꾼다면
```vue
<script>
    methods:{
          
        
          changeRoot(val){
                       this.$parent.$data.bow=val
                      // 바로 위 부모의 데이터에 접근
                       this.$root.$data.bow = val
                      // 최상위 부모의 데이터에 접근
                  }
    }
</script>
```
위와 같이 접근할 수 있다. 자식의 데이터를 바꾼다면 
```vue
    <template>
            <div style="margin: 2rem">
              <div style="margin-top: 10rem; justify-content: center; display: flex; background-color: darkgreen; color: white">
                {{bow}}
              </div>
              <root-test ref="baby"/>
              <button @click="changeChild">자식 데이터 변경</button>
            </div>
    </template>
    <script>
    methods:{
      changeChild(){
        this.$refs.baby.$data.child= this.$refs.baby.$data.child==='성인'? '어린아이' :'성인'
        //ref로 자식 데이터 변경이 용이하네
      }
    }
    </script>
```
와 같이 ``this.$refs.~``로 접근하여 변경할 수도 있다.

##3. Mixin
mixin은 여러 컴포넌트에서 클래스를 재사용하는 방법이다. 
```js
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
```
와 같이 공통으로 쓸 부분을 추상화하여 미리 선언해 놓는 방식이다. 
mixin과 기존 컴포넌트의 요소들이 겹칠 수도 있는데 이에 대해선 기본적으로 각 컴포넌트의 요소들이 우선시 된다. 단, 이에 대해서 '사용자 정의 옵션 병합 전략'으로 
커스텀 로직을 사용해서 조정할 수 있다.
``Vue.config.optionMergeStrategies``에 함수를 추가하면 된다.
```js
var strategies = Vue.config.optionMergeStrategies
strategies.myOption = strategies.methods
```
```js
const merge = Vue.config.optionMergeStrategies.computed
Vue.config.optionMergeStrategies.vuex = function (toVal, fromVal) {
    if (!toVal) return fromVal
    if (!fromVal) return toVal
    return {
        getters: merge(toVal.getters, fromVal.getters),
        state: merge(toVal.state, fromVal.state),
        actions: merge(toVal.actions, fromVal.actions)
    }
}
```