<template lang="pug">
.box-wrapper
  .box-title
    h4 Notifikasi baru di terima 
  .box-content
    .media(v-for="i in [1, 2, 3, 4]")
      figure.media-left
        img(class="image is-48x48" src="https://bulma.io/images/placeholders/128x128.png" alt="sample")
      .media-content
        div.item-name Lorem ipsum dolor sit amet, consectetur adipisicing elit
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          | tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
  .box-footer
    nuxt-link.button.is-fullwidth.is-primary(to="/") Lihat semua notifikasi
</template>

<script>
export default {
  name: 'notification',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
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
    .media-content {
      
    }
  }
  .box-footer {
    background-color: rgba(0,0,0,.02);
    padding: 10px;
  }
}
</style>