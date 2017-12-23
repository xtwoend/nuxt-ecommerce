<template lang="pug">
  .products--view
    .item(v-for="item in items")
      product-item(:item="item")
    .page__control
      paginate(
        :page-count="20",
        :page-range="2",
        :margin-pages="1",
        :initial-page="initialPage",
        :click-handler="changePage",
        :container-class="'pagination'",
        :page-class="'page-item'")
</template>

<script>
import ListItem from '~/components/products/ListItem'
import Paginate from '~/components/common/Paginate'

export default {
  name: 'List',
  props: {
    currentPage: {
      type: Number,
      default: 1
    }
  },
  components: {
    'product-item': ListItem,
    'paginate': Paginate
  },
  data () {
    return {
      items: this.$store.state.products,
      initialPage: (this.currentPage - 1)
    }
  },
  methods: {
    changePage (pageNum) {
      // console.log(pageNum)
      this.initialPage = (pageNum - 1)
      this.$router.push({
        path: '',
        query: {
          page: pageNum
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.products--view {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -4px;
  margin-left: -4px;
  > .item {
    padding: 0.7rem .3rem 0;
    width: 20%;
    box-sizing: border-box;

  }
  .page__control {
    margin: 20px auto;
  }
}
</style>