import Vue from 'vue'

const vueGg = {}
vueGg.install = function install (Vue, options) {
  // (function (d, s, id) {
  //   let js = d.getElementsByTagName(s)[0]
  //   let fjs = d.getElementsByTagName(s)[0]
  //   if (d.getElementById(id)) { return }
  //   js = d.createElement(s)
  //   js.id = id
  //   js.src = '//apis.google.com/js/api:client.js'
  //   fjs.parentNode.insertBefore(js, fjs)
  //   console.log('setting google sdk')
  // }(document, 'script', 'google-jssdk'))
  if (window.gapi) {
  // console.log(window.gapi)
    Vue.prototype.$gapi = window.gapi
  } else {
    Vue.prototype.$gapi = undefined
  }
}

Vue.use(vueGg)
