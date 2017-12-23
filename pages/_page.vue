<template>
  <section class="container">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    {{ $store.state.auth }}
    <nuxt-link to="/">Home</nuxt-link>
      <button @click="$modal.show('login')">Hello</button>
    <v-popover>
      <button>Click me</button>

      <template slot="popover">
        <a v-close-popover>Close</a>
      </template>
    </v-popover>
    
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
</style>