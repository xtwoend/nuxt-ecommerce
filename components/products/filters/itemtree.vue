<template lang="pug">
li.item-menu
  a(@click="selected") 
    //- span {{ items.main.category.display_name }} 
    //- span ({{ items.main.count }})
    span {{ items.name }} 
    span.text-muted(v-if="items.count > 0") ({{ items.count }})
  a.dropdown__toggle(v-if="isParent" @click="toggle")
    .toggle_arrow.__reverse(v-if="open")
      <svg class="svg-icon icon-bold-arrow" enable-background="new 0 0 9 6" viewBox="0 0 9 6" x="0" y="0"><g><g transform="translate(-324 -410)"><g transform="translate(154 232)"><g transform="translate(1 90)"><polygon fill="#757575" points="173.5 93.6 169.5 89.5 170.5 88.5 173.5 91.4 176.5 88.5 177.5 89.5"></polygon></g></g></g></g></svg>
    .toggle_arrow(v-else)
      <svg class="svg-icon icon-bold-arrow" enable-background="new 0 0 9 6" viewBox="0 0 9 6" x="0" y="0"><g><g transform="translate(-324 -410)"><g transform="translate(154 232)"><g transform="translate(1 90)"><polygon fill="#757575" points="173.5 93.6 169.5 89.5 170.5 88.5 173.5 91.4 176.5 88.5 177.5 89.5"></polygon></g></g></g></g></svg>
  ul(v-show="open" v-if="isParent" ref="child" class="sub-categories")
    item(
      class="item",
      v-for="(sub, i) in items.subs",
      :items="sub",
      :key="i"
      @selected="selected"
    )

</template>

<script>
import Item from '~/components/products/filters/itemtree'

export default {
  name: 'item',
  props: {
    items: {
      type: Object
    }
  },
  components: {
    Item
  },
  data () {
    return {
      open: false
    }
  },
  mounted () {
    // console.log(this.items)
  },
  computed: {
    isParent: function () {
      return this.items.subs && this.items.subs.length
    }
  },
  methods: {
    toggle () {
      if (this.isParent) {
        this.open = !this.open
        if (this.open) {
          let height = this.$refs.child.outerHeight(true)
          this.$refs.child.height(height)
        }
      }
    },
    selected () {
      this.$emit('selected')
    }
  }
}
</script>

<style lang="scss" scoped>
.item-menu {
  position: relative;
  transition: height 200ms;
  a {
    font-weight: 600;
    .text-muted {
      font-weight: 400;
    }
  }
  // display: flex;
  // justify-content: space-between;
}
.dropdown__toggle {
  // text-align: right;
  width: 14px;
  height: 14px;
  position: absolute;
  right: 0;
  top: 0;
  .toggle_arrow {
    width: 9px;
    height: 9px;
    .svg-icon {
      font-size: 9px;
    }
    &.__reverse {
      transform: rotate(180deg);
      margin-top: 9px;
    }
  }
}
</style>