<template lang="pug">
.shippings
  .menu-label
    h4 <div class="icon icon-filter" /> Opsi Pengiriman
  ul.menu-list.categories.show-limit(ref="categories")
    item(
      v-for="(item, id) in items",
      :items="item",
      :key="id"
      @selected="selected"
    )
    li
      a(@click="showOthers" class="item-toggle" v-if="!showall") +{{ otherlength }} Lainnya 
      a(@click="showOthers" class="item-toggle" v-else) Sembunyikan
</template>

<script>
import { slice } from 'lodash'
import Item from './itemtree'

export default {
  name: 'shippings',
  props: {
    data: {
      type: Array
    }
  },
  components: {
    Item
  },
  data () {
    return {
      items: [],
      otherlength: 0,
      showall: false
    }
  },
  mounted () {
    this.items = this.getCategories(0, 7)
    this.otherlength = (this.data.length - this.items.length)
    this.showall = (!this.otherlength > 0)
  },
  methods: {
    selected () {
      this.$emit('selected')
    },
    getCategories (start, end) {
      // let categories = orderBy(this.data, ['main.order'], ['desc'])
      return slice(this.data, start, end)
    },
    showOthers () {
      if (this.items.length < this.data.length) {
        this.items = this.getCategories(0, this.data.length)
        this.showall = true
        this.$refs.categories.classList.remove('show-limit')
      } else {
        this.items = this.getCategories(0, 7)
        this.showall = false
        this.$refs.categories.classList.add('show-limit')
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>