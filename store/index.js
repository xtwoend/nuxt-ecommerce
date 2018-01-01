// import Cookie from 'cookie'
// import Cookies from 'js-cookie'

export const state = () => ({
  products: null,
  productDetail: null,
  filterSidebar: null,
  categories: [],
  filters: {},
  modalShow: '',
  loading: false,
  client: null
})

export const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products
  },
  SET_FILTERSIDBAR: (state, filters) => {
    state.filterSidebar = filters
  },
  SET_CATEGORIES: (state, categories) => {
    state.categories = categories
  },
  SET_FILTERS: (state, filters) => {
    state.filters = filters
  },
  SHOW_MODAL: (state, modal) => {
    state.modalShow = modal
  },
  SHOW_LOADING: (state, status) => {
    state.loading = status
  },
  SET_PRODUCT_DETAIL: (state, item) => {
    state.productDetail = item
  }
}

export const getters = {
  getProducts (state) {
    return state.products
  },
  getProductDetail (state) {
    return state.productDetail
  }
}

export const actions = {
  // async nuxtServerInit ({ commit }, ctx) {
  //   const cookieStr = process.browser ? document.cookie : ctx.req.headers.cookie
  //   const cookies = Cookie.parse(cookieStr || '') || {}
  //   let clientId = cookies['token']
  //   console.log(clientId)
  //   if (!clientId) {
  //     try {
  //       const data = await this.$axios.$get('/clientinfo', { headers: { cookie: '' } })
  //       clientId = data.clientId
  //       commit('SET_CLIENT', clientId)
  //       if (process.browser) {
  //         // ...Browser
  //         if (clientId) {
  //           Cookies.set('CL_ID', clientId)
  //         } else {
  //           Cookies.remove('CL_ID')
  //         }
  //       } else {
  //         // ...Server
  //         let params = {
  //           domain: '/'
  //         }
  //         if (!clientId) {
  //           let expires
  //           let date = new Date()
  //           expires = date.setDate(date.getDate() - 1)
  //           params.expires = new Date(expires)
  //         }
  //         res.setHeader('Set-Cookie', Cookie.serialize('CL_ID', clientId, params))
  //       }
  //     } catch (e) {
  //       if (e) console.log('Error: ', e)
  //     }
  //   }
  //   this.$axios.setHeader('cookie', `CL_ID=${clientId || ''}`)
  // }
}
