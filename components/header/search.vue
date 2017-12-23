<template lang="pug">
  .search__wrapper
    form(method="POST")
      .field.has-addons
        .control.search-input
          input(type="text", v-model="keyword", class="text-search")
        .control
          button(class="button") <img src="/img/magnifier.svg" style="width: 25px; height: 25px;">
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      keyword: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search__wrapper {
  background-color: #fff;
  padding: 2px;
  border-radius: 2px;
  width: 100%;
  box-shadow: 0 0.2rem 0.4rem rgba(0,0,0,.09);
  .search-input {
    height: 32px;
    width: 100%;
    input {
      border: none !important;
      width: 100%;
      height: 100%;
      outline: none;
      padding: .5rem 1rem;
      font-size: 1rem;
    }
  }
  .field.has-addons {
    .button {
      border-radius: 2px;
      height: 32px;
      padding: 0 1.2rem;
      background-color: #f74d18;
    }
  }
}
</style>