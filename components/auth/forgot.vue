<template lang="pug">
  modal(
    name="forgotPassword",
    @before-close="beforeClose",
    transition="zoom",
    :width="500")
    .modal__content
      .modal__header 
        h2 Lupa password
        a.modal__link(@click.prevent="openLogin") Login
      form.form__login(@submit.prevent="sendReset")
        .caption__title Masukkan alamat email ataupun nomor telepon yang terdaftar di <strong>Pasar Kampung</strong>
        input.input(type="text", v-model="username")
        .button-group
          button.button.is-plan(@click.prevent="$modal.hide('forgotPassword')") Batal
          button.button.is-orange(@click="sendReset", type="submit") Reset


</template>

<script>
export default {

  name: 'forgot',

  data () {
    return {
      username: ''
    }
  },
  methods: {
    beforeClose () {
      console.log('close modal register')
    },
    openLogin () {
      this.$modal.hide('forgotPassword')
      this.$modal.show('login')
    },
    sendReset () {
      console.log(this.username)
    }
  }
}
</script>

<style lang="scss">
.form__login {
  .caption__title {
    margin-bottom: 1rem;
  }
}
</style>