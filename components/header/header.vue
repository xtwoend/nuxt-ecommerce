<template lang="pug">
  .header__top.is-fixed-top
    navbar
    .main__top
      .container
        .main__logo
          img(src="/img/store.svg" style="width: 2.5rem; height: 2.5rem;")
          h2.text__logo Pasar Kampung
        .search
          search
        .main__cart
          v-popover
            a.icon-menu.tooltip-target <img src="/img/cart.svg" />
            template(slot="popover")
              p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              | tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              | quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              | consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              | cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              | proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              a(v-close-popover) Close
</template>

<script>
import Navbar from '~/components/header/navbar'
import Search from '~/components/header/search'
export default {
  components: {
    'navbar': Navbar,
    'search': Search
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Chewy');
.header__top {
  background-image: linear-gradient(-180deg,#ff5722,#ff531d);
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.05);
  &.is-fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateZ(0);
    z-index: 100;
  }
  .main__top {
    min-height: 4rem;
    .container {
      display: flex;
      padding: .7rem 0;
      .main__logo {
        display: flex;
        flex: 0.3;
        h2.text__logo {
          font-size: 1.8rem;
          font-weight: 600;
          padding-left: 1rem;
          color: #fff;
          font-family: 'Chewy', cursive;
        }
      }
      .search {
        flex: 1;
      }
      .main__cart {
        text-align: center;
        flex: 0.2;
        img {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
}
</style>