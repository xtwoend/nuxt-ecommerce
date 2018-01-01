<template lang="pug">
.main
  header-top
  .main-content
    nuxt
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
import mixins from '~/components/mixins'

export default {
  components: {
    HeaderTop,
    LoginModal,
    RegisterModal,
    forgotModal,
    loading
  },
  mixins: [mixins],
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    if (this.$store.getters['auth/loggedIn']) {
      this.subscribe()
      this.initPusher()
    }
    if (!window.AccountKit) {
      this.initAccountKit()
    }
  }
}
</script>

<style lang="sass">
  
</style>
