module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ecommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1' },
      { hid: 'description', name: 'description', content: 'e-commerce project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: '/fonts/fonts.min.css' }
    ],
    script: [
      // { src: 'https://apis.google.com/js/api:client.js' }
    ]
  },
  css: [
    { src: '~/assets/scss/main.scss', lang: 'sass' }
  ],
  loading: { color: '#FFE542' },
  plugins: [
    { src: '~/plugins/lazy-img', ssr: false },
    { src: '~/plugins/currency', ssr: true },
    { src: '~/plugins/modal', ssr: true },
    { src: '~/plugins/vimage', ssr: true },
    { src: '~/plugins/qrcode', ssr: true },
    // { src: '~/plugins/fbsdk', ssr: false },
    // { src: '~/plugins/googlesdk', ssr: false }
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/webpackmonitor',
    // ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }] // for spa only
  ],
  axios: {
    // proxyHeaders: false,
    // redirectError: {
    //   401: '/login'
    // },
    errorHandler (errorReason, { error, store }) {
      console.log(errorReason)
      // error('Request Error: ' + errorReason)
    }
  },
  proxy: [
    ['/api', { target: process.env.PROXY_API_URL || 'http://api.ecommerce.loc', pathRewrite: { '^/api': '/v1' } }],
    ['/oauth', { target: process.env.PROXY_API_URL || 'http://api.ecommerce.loc', pathRewrite: { '^/oauth': '/oauth' } }],
  ],
  workbox: {
    // Workbox options
    importScripts: [
      '/notifSw.js'
    ]
  },
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
      notLoggedIn: '/authorize',
      loggedIn: '/'
    },
    token: {
      enabled: true,
      type: 'Bearer',
      localStorage: false,
      name: 'token',
      cookie: true,
      cookieName: 'UUID'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    extractCSS: true,
    /**
     * [publicPath description]
     * @type {String}
     */
    publicPath: '/assets/',
    vendor: [
      'vue-lazy-images',
      'v-tooltip'
    ],

    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      config.devtool = false
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
