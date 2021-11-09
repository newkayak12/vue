module.exports = {
    head: {
        title: 'NodeBird',
    },
    modules: [
        '@nuxtjs/axios',
    ],
    buildModules: [
        '@nuxtjs/vuetify',
    ],
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