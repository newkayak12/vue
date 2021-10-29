const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
//node 환경에서는 require를 쓴다고 그냥 일단 생각

//이건 node의 모듈 시스템 >> import/export 대신에 require


module.exports = {
    mode:'development',//'production'
    devtool :'eval', // hidden-source-map >> webpack build속도가 빠름,
    resolve:{
        extensions:['.js','.vue'], //여기에 넣어주면 main에서 import할 때 확장자를 제거할 수 있다.
    },
    //node의 모듈을 만들었다.
    //webpack == script가 너무 많아서 그걸 하나로 합치려고 쓴다.
    entry:{
        app: path.join(__dirname,'index.js'),
        //app은 하나로 합쳐질 이름
    },
    module:{
        //webpack의 핵심 >> 읽어내려가다 문제가 생기면 module을 참고하여 처리


        rules:[{
        //    어떻게 합치고 어떻게 처리할 건지?
            test:/\.vue$/,
            loader:'vue-loader',

        }],

    },
    plugins:[
        new VueLoaderPlugin(),
        //module을 만나다 최종 처리가 필요할 때
    ],
    output:{
        filename: 'app.js',
        path: path.join(__dirname, "dist"),

    }

};
