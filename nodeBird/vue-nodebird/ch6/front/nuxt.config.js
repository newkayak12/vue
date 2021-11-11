module.exports = {
    head: {
        title: 'NodeBird',
        meta:[{
            charset:'utf-8'
        },{
            name:'viewport',
            content:"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=yes, viewport-fit=cover"
        },{
            'http-equiv' : 'X-UA=Compatible', content: 'IE=edge'
        }]


    },
    modules: [
        '@nuxtjs/axios',
    ],
    buildModules: [
        '@nuxtjs/vuetify',
        `@nuxtjs/moment`
    ],
    moment:{
        locales:['ko'],
    },
    build:{
        analyze:false, //테스트할 때만 하고 배포할 떄는 뺴 놓고
        /*
            배포할 때 쓸 필요가 없는 파일을 덜어내는 작업을 트리쉐이킹(ThreeShaking)이라고 한다.

         */
        extractCSS: true,
        extend(config, {isClient,isServer}){

            /*
                webpack{
                devtool:'hidden-source-map' //> 소스코드 감춰줌
                //개발하면서 현재 설정
                devtool : 'cheap-module-source-map'
             */
            if(isServer && config.mode === 'production'){
                config.devtool = 'hidden-source-map';

            }
            console.log(`webpack`, config, isClient, isServer)
        },
    },
    vuetify: {},
    axios:{
        browserBaseURL:"http://localhost:3085",
        baseURL:'http://localhost:3085',
        https: false,
    },
    server:{
        // post:3080,
    //    여기에서도 설정이 가능하다.

    }

};