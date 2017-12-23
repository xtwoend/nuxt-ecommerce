export const state = () => ({
  products: [],
  categories: [],
  filters: {},
  modalShow: '',
  loading: false
})

export const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products
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
  }
}

export const getters = {
  getProducts (state) {
    return state.products
  }
}
