module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ecommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'e-commerce project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://apis.google.com/js/api:client.js' }
    ]
  },
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~/plugins/lazy-img', ssr: false },
    { src: '~/plugins/currency', ssr: true },
    { src: '~/plugins/tooltip', ssr: false },
    { src: '~/plugins/modal', ssr: true },
    { src: '~/plugins/fbsdk', ssr: false },
    { src: '~/plugins/googlesdk', ssr: false }
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/webpackmonitor',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }]
  ],
  axios: {
    // proxyHeaders: false,
    // redirectError: {
    //   401: '/login'
    // },
    errorHandler (errorReason, { error, store }) {
      // console.log(errorReason)
      // error('Request Error: ' + errorReason)
      store.commit('SHOW_MODAL', 'login')
    }
  },
  proxy: [
    ['/api', { target: process.env.PROXY_API_URL || 'http://api.ecommerce.loc', pathRewrite: { '^/api': '/v1' } }],
    ['/oauth', { target: process.env.PROXY_API_URL || 'http://api.ecommerce.loc', pathRewrite: { '^/oauth': '/oauth' } }]
  ],
  auth: {
    user: {
      endpoint: 'auth/user',
      propertyName: 'data',
      resetOnFail: true
    },
    login: {
      endpoint: 'auth/signin',
    },
    logout: {
      endpoint: 'auth/logout',
      method: 'GET',
    },
    redirect: {
      notLoggedIn: '/',
      loggedIn: '/'
    },
    token: {
      enabled: true,
      type: 'Bearer',
      localStorage: true,
      name: 'token',
      cookie: true,
      cookieName: 'token'
    }
  },
  /*
  ** Build configuration
  */
  build: {

    /**
     * [publicPath description]
     * @type {String}
     */
    publicPath: '/assets/',

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
