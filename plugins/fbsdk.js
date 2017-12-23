import Vue from 'vue'

const vueFb = {}
vueFb.install = function install (Vue, options) {
  (function (d, s, id) {
    let js = d.getElementsByTagName(s)[0]
    let fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) { return }
    js = d.createElement(s)
    js.id = id
    js.src = '//connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
    console.log('setting fb sdk')
  }(document, 'script', 'facebook-jssdk'))
  window.fbAsyncInit = function onSDKInit () {
    window.FB.init(options)
    window.FB.AppEvents.logPageView()
    Vue.prototype.$FB = window.FB
    window.dispatchEvent(new Event('fb-sdk-ready'))
  }
  Vue.prototype.$FB = undefined
}

Vue.use(vueFb, {
  appId: '1530509847230241',
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v2.10'
})
