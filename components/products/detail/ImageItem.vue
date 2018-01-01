<template lang="pug">
div.item__pictures
  .main__pic.lazyimg__container
    .lazyimg__placeholder
      <svg viewBox="355 217 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(355.000000, 217.000000)">
              <rect id="Rectangle" fill="#E8E8E8" x="0" y="0" width="250" height="250"></rect>
              <g id="Group-3" transform="translate(84.000000, 93.612335)" fill="#FFFFFF">
                  <polygon id="Shape" points="0 0 0 53.2305433 10.25 53.2305433 10.25 47.907489 5.125 47.907489 5.125 5.32305433 66.625 5.32305433 66.625 10.6461087 71.75 10.6461087 71.75 0"></polygon>
                  <path d="M20.5,47.2643214 C20.5,49.6950044 21.525,51.8494734 23.11375,53.2305433 L71.75,53.2305433 L71.75,21.3554505 C70.46875,21.0792365 70.725,21.7973929 69.3925,21.7973929 C63.29375,21.7973929 58.57875,24.7805038 54.99125,29.4761414 C54.325,26.9902156 52.1725,25.1672034 49.66125,25.1672034 C46.6375,25.1672034 44.1775,27.8741003 44.1775,31.1334252 L44.22875,31.9620672 L44.1775,31.9620672 C38.28375,31.9620672 33.36375,36.2710052 31.98,42.0714987 C30.75,41.0771284 29.26375,40.4694576 27.5725,40.4694576 C23.6775,40.4694576 20.5,43.065869 20.5,47.2643214 L20.5,47.2643214 Z M25.83,28.4265283 C25.83,29.8075982 26.90625,30.9676969 28.1875,30.9676969 C29.46875,30.9676969 30.545,29.8075982 30.545,28.4265283 C30.545,26.9902156 29.46875,25.8853597 28.1875,25.8853597 C26.90625,25.8853597 25.83,26.9902156 25.83,28.4265283 L25.83,28.4265283 Z" id="Shape"></path>
                  <path d="M10.25,10.6461087 L10.25,63.876652 L82,63.876652 L82,10.6461087 L10.25,10.6461087 L10.25,10.6461087 Z M15.375,15.969163 L76.875,15.969163 L76.875,58.5535977 L15.375,58.5535977 L15.375,15.969163 L15.375,15.969163 Z" id="Shape"></path>
              </g>
          </g>
      </svg>
    no-ssr
      a(@click="showBox")
        lazy-image(
          class="lazyimg__img",
          :src="'https://cf.shopee.co.id/file/'+bigImage"
        )
    //- figure.image.is-256x256
    //-   img(:src="'https://cf.shopee.co.id/file/'+ bigImage" @click="showBox")
  .thumb__pic.columns
    .column.image-thumb.is-one-fifth(v-for="img in data.image_list")
      a(@click.prevent="selected(img)")
        figure.image.is-square
          img(:src="'https://cf.shopee.co.id/file/' + img")
</template>

<script>
import NoSSR from 'vue-no-ssr'
export default {
  name: 'ImageItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    NoSSR
  },
  data () {
    return {
      bigImage: this.data.image_list[0]
    }
  },
  methods: {
    selected (img) {
      this.bigImage = img
    },
    showBox () {
      this.$modal.show('img-box')
    }
  }
}
</script>

<style lang="scss" scoped>
.item__pictures {
  // padding: 1.5rem;
  padding: 0;
  // padding-right: 0.5rem;
  // padding-left: 0.5rem;
  // padding: .5rem !important;
  .image-thumb {
    padding: 0.3rem;
  }
  .thumb__pic {
    // padding: 0;
    // margin: 0;
    padding: 5px;
    margin-top: 12px;
    background-color: #fff;
    margin-left: 0;
    margin-right: 0;
    // min-height: 6rem;
    // display: flex;
  }
}
</style>