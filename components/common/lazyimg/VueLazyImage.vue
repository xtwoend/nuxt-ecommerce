<template>
  <div
    ref="target"
    :class="_class"
    :data-src="src"
    :src="placeholder"
    width="100%"
    height="100%"
  ></div>
</template>

<script>
  /* eslint-disable */
  export default {
    data() {
      return {
        show: false
      }
    },
    computed: {
      _class() {
        let className;
        if (this.show) {
            if(this.imgClass instanceof Array) {
                className = this.imgClass.concat(['show']);
            }
            else className = this.imgClass + ' show';
        }
        return className;
      }
    },
    mounted() {
      this.$lazyImages.addImage(this.$refs.target);
      this.$refs.target.onload = () => {
        this.show = true;
      };
      this.$lazyImages.loadImage();
    },
    beforeDestroy() {
      this.$lazyImages.removeImage(this.$refs.target);
    },
    props: {
      src: {
        type: String,
        required: true
      },
      placeholder: String,
      imgClass: {
        type: [Array,String],
        default: ''
      }
    }
  }
</script>
<style lang="scss">
.lazyLoad {
  width: '100%';
  height: '100%';
}
.lazyimg__container {
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  // padding-top: 100%;
  display: block;
  position: relative;
  .lazyimg__img {
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>