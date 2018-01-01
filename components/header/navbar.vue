<template lang="pug">
  .top__nav
    .container
      ul.nav-start
        li
          nuxt-link.item-menu(to="/") Hubungi Kami
        li.spacer
          span.sparator
        li
          popover(placement="bottom")
            a(class="item-menu") Download
            div(slot="content")
              .mini-wrapper
                qriously(value="https://play.google.com/store/apps/details?id=com.bm.sc.bebasbayar", :size="140")
      ul.nav-end
        li
          popover(placement="bottomLeft", :width=400, trigger="hover")
            //- a(class="item-menu")
            .item-icon
              .icon-bell
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
                  <g>
                    <g id="notifications-none">
                      <path d="M255,510c28.05,0,51-22.95,51-51H204C204,487.05,226.95,510,255,510z M420.75,357V216.75    c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25,17.85,275.4,0,255,0c-20.4,0-38.25,17.85-38.25,38.25V56.1    c-73.95,17.85-127.5,81.6-127.5,160.65V357l-51,51v25.5h433.5V408L420.75,357z M369.75,382.5h-229.5V216.75    C140.25,153,191.25,102,255,102s114.75,51,114.75,114.75V382.5z" fill="#FFFFFF"/>
                    </g>
                  </g>
                </svg>
              span.item-menu Notifikasi
            //- <img src="/img/bell.svg" class="icon-bell" alt="sample" /> Notifikasi
            div(slot="content")
              notification
        li(v-if="! $store.getters['auth/loggedIn']")
          a.item-menu.strong(@click.prevent="$modal.show('register')") Daftar
        li(v-else)
          a.item-menu.strong {{ $store.state.auth.user.name }}
        li.spacer
          span.sparator
        li(v-if="! $store.getters['auth/loggedIn']")
          a.item-menu.strong(@click.prevent="$modal.show('login')") Login
        li(v-else)
          a.item-menu.strong(@click.prevent="logout") Logout

</template>

<script>
import NoSSR from 'vue-no-ssr'
import mixins from '~/components/mixins'
import popover from '~/components/popover'
import notification from './notification'

export default {
  name: 'navbar',
  mixins: [mixins],
  components: {
    NoSSR,
    popover,
    notification
  },
  data () {
    return {
    }
  },
  methods: {
    async logout () {
      this.$store.commit('SHOW_LOADING', true)
      await this.unsubscribe()
      await this.$store.dispatch('auth/logout')
      this.$router.go({
        path: '/',
        force: true
      })
      this.$store.commit('SHOW_LOADING', false)
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/variables";
.mini-wrapper {
  padding: 5px;
}
.item-icon {
  display: flex;
  align-items: baseline;
  position: relative;
  .icon-bell {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 2px;
    // margin-top: 10px;
  }
  > .item-menu {
    margin-left: 20px;
  }
}
.top__nav {
  // background-color: #f74d18;
  height: 2.2rem !important;
  background-color: $birutua;
  line-height: 2.5rem;
  > .container {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .item-menu {
      color: #fff;
      // font-size: 0.95rem;
      font-weight: 500;
      position: relative;
      &.strong {
        font-weight: 700;
      }
      &.icon-menu {
        padding-left: 1.4rem;
      }
      .icon-bell {
        height: 1.2rem;
        width: 1.2rem;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .nav-start, .nav-end {
      display: flex;
      list-style: none;
      li {
        line-height: 2rem;
        padding: 0rem .5rem;
        text-align: center;
        &.spacer {
          .sparator {
            border-right: 1px solid hsla(0,0%,100%,.4);
            height: 1.3rem;
          }
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
          border: none;
        }
      }
    }
  }
}
div[data-popover="notification"] {
  line-height: 1.3;
}
</style>