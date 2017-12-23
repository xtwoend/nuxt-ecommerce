<template lang="pug">
  div(v-show="isActive")
    vue-content-loading(:width="100", :height="200")
      rect(x="75" y="13" rx="4" ry="4" width="100" height="15")
      rect(x="75" y="37" rx="4" ry="4" width="50" height="10")
</template>

<script>
import VueContentLoading from 'vue-content-loading'
export default {
  name: 'LoadingItem',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VueContentLoading
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>