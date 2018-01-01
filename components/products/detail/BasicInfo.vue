<template lang="pug">
.information
  h3.title {{ data.name }}
  .wrapper__price
    .box-price 
      h4.price <span v-if="data.price_before_discount > 0"> {{ (data.price_before_discount / 100000) | currency('') }}</span> {{ (data.price/100000) | currency('Rp. ') }}
      span.last_update Perbahan harga terakhir: 14-12-2017 14:00 WIB
    .discount(v-if="data.show_discount > 0")
      .bedge_discount {{ data.discount }}

</template>

<script>
export default {
  name: 'BasicInfo',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.information {
  padding: 1.5rem;
  .title {
    font-size: 1.4rem;
    font-weight: 400;
  }
  .wrapper__price {
    display: flex;
    .box-price {
      border: 1px solid #ddd;
      padding: 1rem;
      width: 300px;
      .price {
        font-size: 1.8rem;
        color: #f74d18;
        span {
          font-size: 1.3rem;
          color: rgba(0,0,0,.54);
          text-decoration: line-through;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      span.last_update {
        color: #888;
        font-size: 0.8rem;
        font-style: italic;
      }
    }
  }
}
</style>