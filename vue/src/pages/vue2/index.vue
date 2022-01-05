<template>
     <ul class="directive">
          directive!

          <li>
               <p>v-text</p>
               <div v-text="hi"></div>
               textContent를 건드는 듯
          </li>
          <li>
               <p> v-html </p>
               <div v-html="html"></div>
               innerHTML 건드는 듯
          </li>
          <li>
               <p>v-show</p>
               <div v-show="showoff">show</div>
               <button @click = 'showoff=!showoff'>show?</button>
          </li>
          <li>
               <p>v-if</p>
               <div v-if="ifValue===1" style="background-color: red; color:white;"> 1</div>
               <div v-else-if="ifValue===2" style="background-color: yellow">2</div>
               <div v-else style="background-color: blue;color:white;">3</div>
               <button @click="ifValue=1">1</button>
               <button @click="ifValue=2">2</button>
               <button @click="ifValue=3">3</button>
          </li>
          <li>
               <p>v-for</p>
               <div v-for="(index, value) in 3">{{`index: ${index} = value : ${value}`}}</div>
          </li>
          <li>
               <p>v-pre</p>
               <div v-pre>
                    {{`렌더링 됨?`}}
                    <br>
                    <div>??</div>
                    <br>
                    <div>{{2*24}}</div>
               </div>
<!--
     이 엘리먼트와 모든 자식 엘리먼트에 대한 컴파일을 건너 뜁니다. 원시 mustache 태그를 표시하는데 사용할 수 있습니다. 디렉티브가 없는 많은 수의 노드를 뛰어 넘으면 컴파일 속도가 빨라집니다.
-->
          </li>
          <li>
               <p>v-cloak</p>
               <div v-cloak>
                    <h1>{{val}}</h1>
                    <h1 v-if="val>5"> val이 5보다 큼 </h1>
                    <h1 v-else-if="val===5"> val이 5</h1>
                    <h1 v-else> val이 5보다 작음 </h1>
                    <h1 v-pre> {{ `그대로 렌더링 `}}</h1>
               </div>
               <button @click="val=1">+1</button>
               <button @click="val=-1">-1</button>
<!--
     이 디렉티브는 Vue 인스턴스가 컴파일을 완료할 때까지 엘리먼트에 남아있습니다.
     [v-cloak] { display: none }와 같은 CSS규칙과 함께 이 디렉티브는 Vue인스턴스가 준비될 때까지 컴파일되지 않은 mustache 바인딩을 숨기는데 사용할 수 있습니다.
-->
          </li>
          <li>
               <p>v-once</p>
               <div v-once>{{value}}</div>
<!--
     이 디렉티브를 사용하면, 컴포넌트를 초기에 딱 한번만 렌더링한다
     즉, 자바스크립트에서 사용하는 데이터를 사용하긴 하는데, 변동이 없고 한결같은 정적인 부분을 보여줄 때 사용한다.
-->
          </li>
          <li>
               <p>custom directive</p>
               <div>
                    'v-' 접두어는 알아서 붙고 focusing은 내가 만듦
                    커스텀 이벤트랑 똑같네
               </div>
               <input type="text" v-focusing v-press-enter  v-model="inputValue" >
          </li>

          <li>
               <p>v-on</p>
<!--
.stop - event.stopPropagation() 을 호출합니다.
.prevent - event.preventDefault() 을 호출합니다.
.capture - 캡처 모드에서 이벤트 리스너를 추가합니다.
.self - 이벤트가 이 엘리먼트에서 전달된 경우에만 처리 됩니다
.{keyCode | keyAlias} - 특정 키에 대해서만 처리 됩니다.
.native - 컴포넌트의 루트 엘리먼트에서 네이티브 이벤트를 수신합니다.
.once - 단 한번만 처리됩니다.
.left - (2.2.0) 왼쪽 버튼 마우스 이벤트 트리거 처리기.
.right - (2.2.0) 오른쪽 버튼 마우스 이벤트 트리거 처리기.
.middle - (2.2.0) 가운데 버튼 마우스 이벤트 트리거 처리기.
.passive - (2.3.0+) DOM 이벤트를 { passive: true }와 연결합니다.
-->
               <div>
                    <h5>.stop</h5>
                    <div @click="alertMsg('outer')" style="padding: 1rem; border: 1px black solid;">
                         outer
                         <button @click="alertMsg('inner')">inner</button>
                         <button @click.stop="alertMsg('inner (stop)')">inner(stop propagation)</button>
                    </div>
               </div>

               <div>
                    <h5>.prevent</h5>
                    <form action="/vue2/">
                         <input type="text" ref="prevent">
                         <button @click.prevent="alertMsg(`prevent : ${$refs.prevent.value}`)">SUBMIT</button>
                    </form>

                    <ul>
                         <li>캡처링 단계 – 이벤트가 하위 요소로 전파되는 단계</li>
                         <li>타깃 단계 – 이벤트가 실제 타깃 요소에 전달되는 단계</li>
                         <li>버블링 단계 – 이벤트가 상위 요소로 전파되는 단계</li>
                    </ul>
               </div>

               <div>
                    <h5>.capture</h5>
                    <div @click.capture="alertMsg('outer')" style="padding: 1rem; border: 1px black solid;">
                         outer
                         <button @click="alertMsg('inner')">inner</button>
                    </div>
                    <pre>.caputre를 하면 내부의 DOM의 이벤트를 트리거 해도 바깥부터 시작한다.
                    capture가 없으면 inner> outer
                    .capture : outer > inner
                    .stop  : inner
                    </pre>
               </div>

               <div>
                    <h5>.self</h5>
                    <div @click="alertMsg('selfNone')" style="padding: 1rem; border: 1px black solid;">
                         outer(self X)
                         <div style="padding: 1rem; border: 1px red solid;">
                              inner
                         </div>
                    </div>
                    <div @click.self="alertMsg('selfNone')" style="padding: 1rem; border: 1px black solid;">
                         outer(self O)
                         <div style="padding: 1rem; border: 1px red solid;">
                              inner
                         </div>
                    </div>
                    <p>
                         캡쳐링을 막는 듯함..
                    </p>
               </div>

               <div>
                    <h5>.{keyCode|keyAlias}</h5>
                    <input type="text" @keyup.13="alertMsg($refs.keycode.value)" ref="keycode">
                    <input type="text" @keyup.enter="alertMsg($refs.keycode.value)" ref="keycode">
                    <p>특정 키에 반응하도록</p>
               </div>

               <div>
                    <h5>.once</h5>
                    <input type="text" @keyup.once="alertMsg($refs.keycode.value)" ref="keycode">
                    <p>한 번만 반응</p>
               </div>

               <div>
                    <h5>.left</h5>
                    <div ref="left" @click.left="alertMsg($refs.left.innerHTML)">leftMouseClick</div>
               </div>
               <div>
                    <h5>.right</h5>
                    <div ref="right" @click.prevent.right="alertMsg($refs.right.innerHTML)" oncontextmenu="return false" ondragstart="return false" onselect="return false">rightMouseClick</div>

               </div>
               <div>
                    <h5>.middle</h5>
                    <div ref="middle" @click.middle="alertMsg($refs.middle.innerHTML)" >middleMouseClick</div>
               </div>
               <div>
                    <h5>.passive</h5>
                    <div style="height: 100px; overflow-y: auto" @scroll="">
                         scroll<br>
                         scroll<br>
                         scroll<br>
                         scroll<br>
                         scroll<br>
                         scroll<br>
                         scroll<br>
                         scroll<br>

                    </div>
               </div>
          </li>

     </ul>
</template>

<script>
import Vue from 'vue'
Vue.directive('focusing',{
     inserted:function(el){
          console.log(el)
          el.focus()
     }
})
Vue.directive('PressEnter',{
     inserted:function(el, binding, vnode, oldVnode){
          console.log(el, binding, vnode, oldVnode)
          el.onkeyup = e  =>{
               if(e.key==='Enter'){
                    vnode.context.customDirective(vnode.context.inputValue)
                    vnode.context.inputValue = ""
               }
          }
     }
})
export default {
     name: 'index',
     description: '',
     data(){
          return{
               hi:'hi',
               html:'<div> hello </div> <br> <h1> holly! </h1>',
               show:true,
               if:1,
               value:4,
               inputValue:''

          }
     },
     computed:{
          showoff:{
             get(){
                  return this.show
             },
             set(value){
              this.show = value
             }
          },
          ifValue:{
               get(){
                    return this.if
               },
               set(value){
                    console.log(`if new Value : `, value)
                    console.log(this.if)
                    this.if = value
               }
          },
          val:{
               get(){
                    return this.value
               },
               set(newValue){
                    // console.log(newValue)
                    // console.log(this.value)
                    console.log(this.value)
                    console.log(newValue)
                    this.value += newValue
               }

          }

     },
     methods:{
          customDirective(val){
               alert(val)
          },
          customDirective2(val){
               alert(val)
          },
          customDirective3(val){
               alert(val)
          },
          alertMsg(val){
               alert(val)
          },

     }
}
</script>

<style scoped>
     .directive > li{
          margin: 1rem;
          border: 1px black dotted;
     }
     .directive > li> p{
           color:red;
          margin: 0;
          font-weight: bolder;
          padding-left: 1rem;
      }
     .directive > li >div{
          margin-top: 1rem;
          padding: 0.5rem;
          border: 1px darkgreen dotted;
     }
     [v-cloak]::before{
          content:'loading.......'
     }
     [v-cloak]>*{
          display: none;
     }
</style>