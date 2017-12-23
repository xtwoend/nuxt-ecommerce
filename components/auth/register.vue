<template lang="pug">
    div
      modal(
        name="register",
        @before-close="beforeClose"
        transition="zoom",
        :width="500")
        .modal__content
          .modal__header 
            h2 Register
            a.modal__link(@click="openLogin") Login

</template>

<script>
export default {

  name: 'register',

  data () {
    return {

    }
  },
  methods: {
    beforeClose () {
      console.log('close modal register')
    },
    openLogin () {
      this.$modal.hide('register')
      this.$modal.show('login')
    }
  }
}
</script>

<style lang="css" scoped>
</style>