<template lang="pug">
.main
  header-top
  .main-content <nuxt/>
  login-modal
  register-modal
  forgot-modal
  loading(
    :show="$store.state.loading",
    label="Mohon tunggu...")
</template>

<script>
import HeaderTop from '~/components/header/header'
import LoginModal from '~/components/auth/login'
import RegisterModal from '~/components/auth/register'
import forgotModal from '~/components/auth/forgot'
import loading from '~/components/common/Loading'
export default {
  components: {
    HeaderTop,
    LoginModal,
    RegisterModal,
    forgotModal,
    loading
  }
}
</script>

<style lang="sass">
  @import "~assets/bulma/bulma"
  .main
    margin-top: 6.8rem
</style>
