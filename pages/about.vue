<template lang="pug">
div
  h2.title About Page
  p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    | tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    | quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    | consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    | cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    | proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
export default {
  middleware: 'auth-app',
  name: 'about',
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>