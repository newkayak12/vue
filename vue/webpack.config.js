const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');
const webpack = require('webpack');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}


module.exports = {
    context:path.resolve(__dirname, '../'),
    entry:{
      app:'./vue/src/main'
    },
    devServer:{
        hot: true,
        static :path.join(__dirname,'/')
            
    },
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.js','.vue', '.json'],
        alias: {
            '@': path.join(__dirname, '..', 'vue/src')
        }
    },
    module:{
        rules:[{
                test:/\.vue$/,
                loader:'vue-loader',
    
            },{
                test:/\.css$/,
                use:['vue-style-loader',
                    'css-loader',]
            }],
    },
    plugins:[
        new VueLoaderPlugin(),
    ],
    output:{
        filename:'[name].js',
        path:path.join(__dirname,"dist"),
        publicPath:"/dist"

    }
}