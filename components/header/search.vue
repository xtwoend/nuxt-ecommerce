<template lang="pug">
.search_components
  .search__wrapper
    form(method="POST")
      .field.has-addons
        .control.search-input
          input(type="text", v-model="keyword", class="text-search", name="search")
        .control
          button(class="button") <img src="/img/magnifier.svg" style="width: 25px; height: 25px;" alt="sample">
  .populer__search
    a(href="") baju tidur
    a(href="") baju renang
    a(href="") kasur
    a(href="") koteka
    a(href="") coklat cref
    a(href="") coklat cref
    a(href="") coklat cref
    a(href="") coklat cref
    a(href="") coklat cref
    a(href="") baju tidur
    a(href="") baju renang
    a(href="") kasur
    a(href="") koteka
    a(href="") coklat cref
    a(href="") coklat cref
    a(href="") coklat cref
    a(href="") coklat cref
    a(href="") coklat cref
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
.populer__search {
  width: 800px;
  overflow: hidden;
  height: 1.4rem;
  text-overflow: ellipsis;
  // display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    color: #fff;
    padding-right: 15px;
    font-size: 14px;
    font-weight: 500;
  }
}
.search__wrapper {
  background-color: #fff;
  padding: 2px;
  border-radius: 2px;
  width: 100%;
  box-shadow: 0 0.2rem 0.4rem rgba(0,0,0,.09);
  .search-input {
    height: 36px;
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
      height: 36px;
      padding: 0 1.2rem;
      // background-color: #f74d18;
      background-color: hsl(141, 71%,  48%);
      border: none;
    }
  }
}
</style>