<template lang="pug">
  modal(
    name="signinSms",
    @before-close="beforeClose",
    transition="zoom",
    :width="500")
    .modal__content
      .modal__header 
        h2 Login dengan nomor handphone
        //- a.modal__link(@click.prevent="openLogin") Login
      form.form__login(@submit.prevent="sendSms")
        .caption__title Masukkan nomor telepon anda
        input.input(type="text", v-model="country_code")
        input.input(type="text", v-model="phone_number")
        .button-group
          button.button.is-plan(@click.prevent="$modal.hide('forgotPassword')") Batal
          button.button.is-orange(@click="sendSms", type="submit") Send


</template>

<script>
export default {

  name: 'sms',

  data () {
    return {
      country_code: '62',
      phone_number: ''
    }
  },
  mounted () {
    this.accountKitInit()
  },
  methods: {
    beforeClose () {
      console.log('close modal register')
    },
    openLogin () {
      this.$modal.hide('forgotPassword')
      this.$modal.show('signinSms')
    },
    sendSms () {
      window.AccountKit.login(
        'PHONE',
        {countryCode: this.country_code, phoneNumber: this.phone_number}, (res) => {
          console.log(res)
        }
      )
    },
    accountKitInit () {
      window.AccountKit.init(
        {
          appId: '1530509847230241',
          state: '21ebf35a5ef6bd25ad0fe23044cd7ee4',
          version: 'v1.0',
          fbAppEventsEnabled: true
          // redirect: ''
        }
      )
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