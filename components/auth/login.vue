<template lang="pug">
  div
    modal(
      name="login",
      @before-close="beforeClose",
      transition="zoom",
      :width="500",
      :height="420")
      .modal__content
        .modal__header 
          h2 Login
          a.modal__link(@click.prevent="openRegister") Register
        form.form__login(@submit.prevent="postLogin")
          //- span(v-if="error") Login tidak valid 
          input.input(name="username", v-model="username", type="text")
          input.input(name="password", v-model="password", type="password")
              
          .forgot__wrapper
            a.modal__link(@click.prevent="forgotPassword") Lupa password
          .button-group
            button.button.is-plan(@click.prevent="$modal.hide('login')") Batal
            button.button.is-orange(type="submit") Login

        .other__login.is-fullwidth
          .caption__title Login dengan cara lain
          ul
            //- li
            //-   a(@click.prevent="signinFacebook") 
            //-     img(src="/img/facebook.png")
            //-     span Facebook
            li
              a(href="/oauth/facebook") 
                img(src="/img/facebook.png")
                span Facebook
            //- li
            //-   a(@click.prevent="signinGoogle", ref="googleBtn")
            //-     img(src="/img/google.png")
            //-     span Google
            li
              a(href="/oauth/google")
                img(src="/img/google.png")
                span Google
            li
              a(@click="signinViaSMS")
                img(src="/img/sms.png")
                span SMS

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      error: false,
      country_code: '+62',
      phone_number: '',
      fbParams: {
        scope: 'email',
        return_scopes: true
      }
    }
  },
  methods: {
    beforeClose () {
      console.log('close modal login')
    },
    async postLogin () {
      this.error = false
      this.$store.commit('SHOW_LOADING', true)
      let data = await this.$axios.$post('auth/signin', { email: this.username, password: this.password })
      if (data['token'] !== undefined) {
        this.$store.dispatch('auth/updateToken', data.token)
        await this.$store.dispatch('auth/fetch')
        // this.$modal.hide('login')
        this.$router.go({
          path: '/',
          force: true
        })
      }
      this.error = true
      this.$store.commit('SHOW_LOADING', false)
    },
    openRegister () {
      this.$modal.hide('login')
      this.$modal.show('register')
    },
    forgotPassword () {
      this.$modal.hide('login')
      this.$modal.show('forgotPassword')
    },
    signinFacebook () {
      this.$FB.login((res) => {
        console.log(res)
      }, this.fbParams)
    },
    signinGoogle () {
      // this.$store.commit('SHOW_LOADING', true)
      this.$gapi.load('auth2', () => {
        const auth2 = this.$gapi.auth2.init({
          client_id: '1074810823153-n4s4cfa65sqel3l0s1h16vu7vrbrf0dh.apps.googleusercontent.com',
          scope: 'profile'
        })
        auth2.signIn().then((res) => {
          this.$axios.$post('oauth/signin', { email: res.w3.U3, name: res.w3.ig }).then((data) => {
            if (data['token'] !== undefined) {
              this.$store.dispatch('auth/updateToken', data.token)
              this.$store.dispatch('auth/fetch')
              this.$modal.hide('login')
              // this.$store.commit('SHOW_LOADING', false)
            }
          })
        })
      })
    },
    signinViaSMS () {
      this.$modal.hide('login')
      window.AccountKit.login(
        'PHONE',
        {countryCode: this.country_code, phoneNumber: this.phone_number}, (res) => {
          console.log(res)
          if (res.status === 'PARTIALLY_AUTHENTICATED') {
            this.$axios.$post('auth/otp', { code: res.code }).then((data) => {
              // console.log(data)
              if (data['token'] !== undefined) {
                this.$store.dispatch('auth/updateToken', data.token)
                this.$store.dispatch('auth/fetch')
                this.$router.go({
                  path: '/',
                  force: true
                })
                // this.$store.commit('SHOW_LOADING', false)
              }
            })
          }
        }
      )
    }
  }
}
</script>

<style lang="scss">
.v--modal {
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(0,0,0,.14);
}
.modal__content {
  // padding: 1rem;
  position: relative;
  .modal__header {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 22px;
      margin-bottom: 0;
    }
  }
  .form__login {
    padding: 1rem 2rem;
    .input {
      padding: 1.3rem 1rem;
      margin-bottom: 1rem;
      border-radius: 2px;
    }
  }
  .forgot__wrapper {
    text-align: right;
    margin-bottom: 1rem;
  }
  .modal__link {
    font-size: 1rem;
    font-weight: 600;
    color: #003376;
    line-height: 24px;
  }
  .button {
    font-weight: 500;
    font-size: 1rem;
    border-radius: 2px;
    padding: 0.5rem 1rem;
    width: 9rem;
    margin-right: 1rem;
    height: auto !important;
    &.is-orange {
      border: none;
      background-color: #CC2A00;
      color: #fff;
      margin-right: 0;
    }
    &.is_plan {
      border: none;
    }
  }
  .button-group {
    text-align: right;
  }
  .other__login {
    padding: 0 2rem;
    .caption__title {
      padding: 0.6rem 0;
      font-weight: 500;
    }
    ul {
      display: flex;
      li {
        flex: 1;
        padding: 1rem 1rem; 
        text-align: center;
        a {
          font-weight: 500;
          line-height: 20px;
          display: flex;
          justify-content: center;
          color: #003376;
          img {
            width: 20px;
            height: 20px;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>