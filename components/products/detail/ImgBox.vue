<template lang="pug">
div
  modal(
    name="img-box",
    @before-close="beforeClose",
    transition="zoom",
    :width="800",
    :height="580")
    .modal__content
      .modal__header
        h3 {{ data.name }}
        a.modal__link(@click.prevent="$modal.hide('img-box')") Close
      .image-wrapper.columns
        .column.is-7.big-image
          img(:src="'https://cf.shopee.co.id/file/'+ data.image_list[0]")
        .column.is-5
          h4.price <span v-if="data.price_before_discount > 0"> {{ (data.price_before_discount / 100000) | currency('') }}</span> {{ (data.price/100000) | currency('Rp. ') }}
          .buttons
            button.button.is-success Tambahkan Ke Whi
            button.button.is-danger Tambahkan Ke Keranjang

</template>

<script>
export default {
  name: 'ImgBox',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    beforeClose () {
      //
    }
  }
}
</script>

<style lang="scss">
.modal__header {
  h3 {
    font-size: 18px;
  }
}
.image-wrapper {
  padding: 2rem;
}
</style>