<template lang="pug">
  .top__nav
    .container
      ul.nav-start
        li
          nuxt-link.item-menu(to="/") Hubungi Kami
        li.spacer
          span.sparator
        li
          nuxt-link.item-menu(to="/about") Download
      ul.nav-end
        li
          v-popover
            a.item-menu.icon-menu.tooltip-target <img src="/img/bell.svg" class="icon-bell" /> Notifikasi 
            template(slot="popover")
              p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              | tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              | quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              | consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              | cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              | proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              a(v-close-popover) Close
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
export default {
  name: 'navbar',
  data () {
    return {
    }
  },
  methods: {
    async logout () {
      this.$store.commit('SHOW_LOADING', true)
      await this.$store.dispatch('auth/logout')
      this.$store.commit('SHOW_LOADING', false)
    }
  }
}
</script>

<style lang="scss">

@import "~assets/scss/tooltips";

.top__nav {
  background-color: #f74d18;
  > .container {
    display: flex;
    align-items: stretch;
    height: 2rem !important;
    justify-content: space-between;
    .item-menu {
      color: #fff;
      font-size: 0.95rem;
      font-weight: 600;
      position: relative;
      &.strong {
        font-weight: 800;
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
</style>