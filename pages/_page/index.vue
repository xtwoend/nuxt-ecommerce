<template lang="pug">
  section.container
    nav(class="breadcrumb" aria-label="breadcrumbs")
      ul
        li
          nuxt-link(to="/") Home
        li
          nuxt-link(to="#") Komputer & Aksesoris
        li
          nuxt-link(to="#") Mini PC
        li.is-active
          nuxt-link(to="#") {{ item.name }}
    
    img-box(:data="item")

    .columns
      .column.is-4
        item-pics(:data="item")
      .column.is-8
        .card__product
          info(:data="item")
</template>

<script>
import * as ProductDetail from '~/components/products/detail'
export default {
  async asyncData ({ app, store, params, query }) {
    let slug = params.page
    let extract = slug.split('.')
    let queryDef = {
      productId: extract[2],
      shopId: extract[1]
    }
    let data = await app.$axios.$get('product_detail', {params: queryDef})
    store.commit('SET_PRODUCT_DETAIL', data)
  },
  components: {
    'item-pics': ProductDetail.ImageItem,
    'shiping': ProductDetail.Shiping,
    'info': ProductDetail.BasicInfo,
    'img-box': ProductDetail.ImgBox
  },
  data () {
    return {
      item: this.$store.state.productDetail
    }
  },
  head () {
    return {
      title: this.item.name,
      meta: [
        { hid: 'description', name: 'description', content: this.item.description }
      ]
    }
  }
}
</script>

<style lang="scss">
.card__product {
  background-color: #fff;
}
</style>