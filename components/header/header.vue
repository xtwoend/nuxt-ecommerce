<template lang="pug">
.header__top.is-fixed-top
  navbar
  .main__top
    .container
      .main__logo
        //- img(src="/img/store.svg" style="width: 2.5rem; height: 2.5rem;" alt="sample")
        .icon-logo
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <path d="M0,208c0,29.781,20.438,54.594,48,61.75V480H16c-8.813,0-16,7.156-16,16s7.188,16,16,16h480c8.875,0,16-7.156,16-16   s-7.125-16-16-16h-32V269.75c27.562-7.156,48-31.969,48-61.75v-16H0V208z M320,272c35.375,0,64-28.656,64-64   c0,29.781,20.438,54.594,48,61.75V480H192V272c35.375,0,64-28.656,64-64C256,243.344,284.688,272,320,272z M176,269.75V480H80   V269.75c27.563-7.156,48-31.969,48-61.75C128,237.781,148.438,262.594,176,269.75z M448,48H64L0,176h512L448,48z M135.188,83.563   l-32,64c-1.438,2.813-4.25,4.438-7.188,4.438c-1.188,0-2.406-0.25-3.563-0.844c-3.938-1.969-5.563-6.781-3.563-10.719l32-64   c2-3.938,6.781-5.531,10.719-3.594C135.563,74.813,137.125,79.625,135.188,83.563z M199.188,83.563l-32,64   c-1.438,2.813-4.25,4.438-7.188,4.438c-1.188,0-2.406-0.25-3.563-0.844c-3.938-1.969-5.563-6.781-3.563-10.719l32-64   c2-3.938,6.813-5.531,10.719-3.594C199.563,74.813,201.125,79.625,199.188,83.563z M264,144c0,4.438-3.562,8-8,8   c-4.406,0-8-3.563-8-8V80c0-4.438,3.594-8,8-8c4.438,0,8,3.563,8,8V144z M355.875,151c-1.25,0.688-2.562,1-3.875,1   c-2.812,0-5.562-1.5-7-4.156l-35-64c-2.125-3.875-0.688-8.75,3.188-10.844c3.813-2.125,8.75-0.75,10.875,3.156l35,64   C361.125,144.031,359.75,148.906,355.875,151z M419.562,151.156C418.438,151.75,417.25,152,416,152   c-2.938,0-5.75-1.625-7.125-4.438l-32-64c-2-3.938-0.375-8.75,3.562-10.719c3.875-1.969,8.75-0.375,10.75,3.594l32,64   C425.125,144.375,423.562,149.188,419.562,151.156z M136,386.438v-36.875c-4.688-2.812-8-7.688-8-13.562c0-8.844,7.188-16,16-16   c8.875,0,16,7.156,16,16c0,5.875-3.281,10.75-8,13.562v36.875c4.719,2.813,8,7.688,8,13.563c0,8.844-7.125,16-16,16   c-8.813,0-16-7.156-16-16C128,394.125,131.313,389.25,136,386.438z M64,16c0-8.844,7.188-16,16-16h352c8.875,0,16,7.156,16,16   s-7.125,16-16,16H80C71.188,32,64,24.844,64,16z M280.438,357.656l-11.312-11.313l45.25-45.25l11.312,11.313L280.438,357.656z    M280.438,402.906l-11.312-11.313l90.5-90.5l11.312,11.313L280.438,402.906z M359.625,346.344l11.312,11.313l-45.25,45.25   l-11.312-11.313L359.625,346.344z" fill="#FFFFFF"/>
            </g>
          </svg>
        h2.text__logo.is-hidden-touch Kampung
      .search
        search
      .main__cart
        popover(placement="bottomLeft", :width=400, trigger="click")
          .icon-svg.pointer
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  x="0px" y="0px" viewBox="0 0 492.066 492.066" style="enable-background:new 0 0 492.066 492.066;" xml:space="preserve">
              <g id="Icons_38_">
                <path d="M485.128,100.778c-7.25-10.449-19.168-16.69-31.902-16.69H212.607c-8.981,0-16.272,7.288-16.272,16.278    c0,8.987,7.291,16.275,16.272,16.275h240.618c2.051,0,3.99,1,5.167,2.71c1.178,1.685,1.448,3.846,0.731,5.77L414.03,246.495    c-0.906,2.454-3.29,4.108-5.899,4.108H155.277L115.001,78.741c-5.01-21.338-23.812-36.25-45.747-36.25h-44.84    C10.92,42.491,0,53.42,0,66.906C0,80.395,10.92,91.32,24.414,91.32h43.38l54.232,231.405    c4.908,20.918,23.108,35.574,44.474,36.146c-12.56,9.117-20.791,23.812-20.791,40.516c0,27.722,22.46,50.189,50.181,50.189    c27.706,0,50.176-22.468,50.176-50.189c0-16.642-8.198-31.281-20.661-40.412h93.623c-12.481,9.131-20.679,23.77-20.679,40.412    c0,27.722,22.471,50.189,50.175,50.189c27.723,0,50.198-22.468,50.198-50.189c0-16.642-8.204-31.281-20.678-40.412h22.757    c13.495,0,24.416-10.928,24.416-24.415c0-13.486-10.92-24.414-24.416-24.414H169.232l-6.326-26.99h245.226    c16.131,0,30.771-10.164,36.399-25.313l45.11-121.396C494.059,124.523,492.374,111.182,485.128,100.778z" fill="#FFFFFF"/>
              </g>
            </svg>
          div(slot="content")
            cart
      

</template>

<script>
import * as Header from '~/components/header'
import popover from '~/components/popover'
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    'navbar': Header.Navbar,
    'search': Header.Search,
    'cart': Header.Cart,
    popover,
    NoSSR
  },
  data () {
    return {

    }
  },
  methods: {
    openCartPopover () {
      console.log('popover')
    }
  }
}
</script>

<style lang="scss">
@import "~assets/scss/variables";

.header__top {
  // background-image: linear-gradient(-180deg,#ff5722,#ff531d);
  background: rgba(60,162,245,1);
  background: -moz-linear-gradient(-45deg, rgba(60,162,245,1) 0%, rgba(60,162,245,1) 26%, rgba(60,162,245,1) 54%, rgba(65,175,247,1) 70%, rgba(74,200,251,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(60,162,245,1)), color-stop(26%, rgba(60,162,245,1)), color-stop(54%, rgba(60,162,245,1)), color-stop(70%, rgba(65,175,247,1)), color-stop(100%, rgba(74,200,251,1)));
  background: -webkit-linear-gradient(-45deg, rgba(60,162,245,1) 0%, rgba(60,162,245,1) 26%, rgba(60,162,245,1) 54%, rgba(65,175,247,1) 70%, rgba(74,200,251,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(60,162,245,1) 0%, rgba(60,162,245,1) 26%, rgba(60,162,245,1) 54%, rgba(65,175,247,1) 70%, rgba(74,200,251,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(60,162,245,1) 0%, rgba(60,162,245,1) 26%, rgba(60,162,245,1) 54%, rgba(65,175,247,1) 70%, rgba(74,200,251,1) 100%);
  background: linear-gradient(135deg, rgba(60,162,245,1) 0%, rgba(60,162,245,1) 26%, rgba(60,162,245,1) 54%, rgba(65,175,247,1) 70%, rgba(74,200,251,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3ca2f5', endColorstr='#4ac8fb', GradientType=1 );
  // background-color: #195ca7;
  &.is-fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateZ(0);
    z-index: 100;
  }
  .main__top {
    min-height: 5.5rem;
    .container {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0 0;
      // padding: .7rem 0;
      .main__logo {
        display: flex;
        flex: 1;
        padding-right: 40px;
        // padding-top: 5px;
        h2.text__logo {
          font-size: 1.8rem;
          font-weight: 600;
          padding-left: 1rem;
          color: #fff;
          // font-family: 'Chewy', cursive;
        }
        .icon-logo {
          width: 45px;
          height: 45px;
        }
      }
      .search {
        flex: 3;
        // width: 800px;
      }
      .main__cart {
        // text-align: center;
        padding-left: 40px;
        padding-top: 11px;
        flex: 1;
        .icon-svg {
          width: 32px;
          height: 32px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>