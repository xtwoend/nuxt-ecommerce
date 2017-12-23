<template lang="pug">
  .container
    .columns
      .column.is-half.is-offset-one-quarter
        .form-login
          input.input(name="username", v-model="username", type="text")
          input.input(name="password", v-model="password", type="password")
          button.button(@click="postLogin") Login
</template>

<script>
export default {
  middleware: 'no-auth',
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    postLogin () {
      this.$store.dispatch('auth/login', {
        fields: {
          email: this.username,
          password: this.password
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>