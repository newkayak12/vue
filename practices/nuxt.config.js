module.exports = {
    head:{
        title:'SNS'
    },
    modules :[
        '@nuxtjs/vuetify',
        '@nuxtjs/axios'
    ],
    vuetify:{

    },
    plugins:[

    ],
    build: {
        babel: {
            plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
        },
    },

}
