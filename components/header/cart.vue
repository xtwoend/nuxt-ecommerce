<template lang="pug">
.box-wrapper
  .box-title
    h4 Baru ditambahkan
  .box-content
    .media(v-for="i in [1, 2, 3, 4]")
      figure.media-left
        img(class="image is-48x48" src="https://bulma.io/images/placeholders/128x128.png" alt="sample")
      .media-content
        div.item-name Lorem ipsum dolor sit amet, consectetur adipisicing elit
        div.price Rp. 100.000,-
      .media-right
        button.delete(@click="removeItem")
        .qty 2 buah
  .box-footer
    .field.is-grouped
      .control
        nuxt-link.button.is-info.is-fullwidth(to="/") Lihat Keranjang
      .control
      nuxt-link.button.is-danger.is-fullwidth(to="/") Lanjut ke pembayaran
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {

    }
  },
  methods: {
    removeItem () {
      console.log('delete')
    }
  }
}
</script>

<style lang="scss">
.media+.media {
  border-top: none;
  margin-top: 10px;
  padding-top: 10px;
}
.box-wrapper {
  border-radius: 2px;
  overflow: hidden;
  .box-title {
    padding: 10px;
    h4{
      font-size: 16px;
      color: rgba(0,0,0,.26);
    }
  }
  .box-content {
    padding: 10px;
    .media-left {
      margin-right: 10px;
    }
    .media-right {
      text-align: center;
      .qty {
        font-size: 14px;
        color: rgba(0,0,0,.26);
      }
    }
    .media-content {
      .item-name {
        text-overflow: ellipsis;
        overflow: hidden;
        font-weight: 700;
        white-space: nowrap;
        width: 250px;
        // font-size: 1rem;
      }
      .price {
        font-size: 1rem;
        font-weight: 700;
        color: #ff5722;
      }
    }
  }
  .box-footer {
    background-color: rgba(0,0,0,.02);
    padding: 10px;
  }
}

</style>