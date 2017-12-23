<template lang="pug">
  section.container
    .columns
      .column.is-one-fifth.products__filters
        .header-category.menu
          .menu-label
            h4 <img src="/img/list.svg" class="icon icon-list" /> Semua Katagori
          ul.menu-list
            li(v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")
              a(href="#", :class="[i==4? 'is-active': '']") Komputer & Aksesoris

        .header-category.menu
          .menu-label
            h4 <div class="icon icon-filter" /> Filter
          ul.menu-list
            li(v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]")
              a(href="#") Komputer & Aksesoris

      .column
        .product-options
          .tabs.is-fullwidth
            ul
              li.is-active
                a
                  span POPULER
              li
                a
                  span TERBARU
              li
                a
                  span TERLARIS
              li
                a
                  span HARGA
        .product-results
          product-view(:currentPage="$store.state.filters.page > 0? parseInt($store.state.filters.page): 1")
</template>

<script>
import ProductList from '~/components/products/List'
export default {
  async fetch ({ app, store, params, query }) {
    let res = await app.$axios.$get('products', {query: { page: query.page }})
    store.commit('SET_PRODUCTS', res)
    store.commit('SET_FILTERS', { page: query.page })
  },
  components: {
    'product-view': ProductList
  },
  mounted () {
    this.$modal.show(this.$store.modalShow)
  }
}
</script>

<style lang="scss">
.product-options {
  .tabs {
    background-color: #fff;
    height: 50px;
    a {
      font-weight: 500;
      padding: 1.1em 1em;
      border-bottom-width: 2px;
    }
  }
}
.mt30 {
  margin-top: 30px;
}
.products__filters {
  max-width: 220px;
  .header-category {
    margin-bottom: 2rem;
    h4 {
      // object {
      //   width: 1.2rem;
      //   position: absolute;
      //   left: 0;
      // }
      .icon-list {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTExLjYyNnB4IiBoZWlnaHQ9IjUxMS42MjZweCIgdmlld0JveD0iMCAwIDUxMS42MjYgNTExLjYyNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjYyNiA1MTEuNjI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+PHBhdGggZD0iTTU0LjgxOCwyMDAuOTk5Yy0xNS4yMywwLTI4LjE3MSw1LjMyNy0zOC44MzIsMTUuOTg3QzUuMzMsMjI3LjY0MiwwLDI0MC41ODMsMCwyNTUuODEzYzAsMTUuMjIzLDUuMzMsMjguMTcyLDE1Ljk5LDM4LjgzYzEwLjY2LDEwLjY1NiwyMy42MDQsMTUuOTg0LDM4LjgzMiwxNS45ODRjMTUuMjI1LDAsMjguMTY3LTUuMzI4LDM4LjgyOC0xNS45ODRjMTAuNjU3LTEwLjY1NywxNS45ODctMjMuNjA2LDE1Ljk4Ny0zOC44M2MwLTE1LjIzLTUuMzMtMjguMTcxLTE1Ljk5LTM4LjgyOEM4Mi45ODksMjA2LjMyOSw3MC4wNDYsMjAwLjk5OSw1NC44MTgsMjAwLjk5OXoiLz48cGF0aCBkPSJNNTQuODIxLDU0LjgxN2MtMTUuMjMsMC0yOC4xNzEsNS4zMy0zOC44MzIsMTUuOTg3QzUuMzMzLDgxLjQ2NCwwLjAwMyw5NC40MDUsMC4wMDMsMTA5LjYzMmMwLDE1LjIyOSw1LjMyNywyOC4xNzEsMTUuOTg2LDM4LjgzMWMxMC42NiwxMC42NTcsMjMuNjA0LDE1Ljk4NSwzOC44MzIsMTUuOTg1YzE1LjIyNSwwLDI4LjE2Ny01LjMyOSwzOC44MjgtMTUuOTg1YzEwLjY1Ny0xMC42NiwxNS45ODctMjMuNjAzLDE1Ljk4Ny0zOC44MzFjMC0xNS4yMjctNS4zMy0yOC4xNjgtMTUuOTg3LTM4LjgyOEM4Mi45OTMsNjAuMTQ3LDcwLjA1MSw1NC44MTcsNTQuODIxLDU0LjgxN3oiLz48cGF0aCBkPSJNNTQuODIxLDM0Ny4xOGMtMTUuMjMsMC0yOC4xNzUsNS4zMjUtMzguODMyLDE1Ljk4MUM1LjMzMywzNzMuODI0LDAuMDAzLDM4Ni43NjcsMC4wMDMsNDAxLjk4OWMwLDE1LjIzNSw1LjMyNywyOC4xNzEsMTUuOTg2LDM4LjgzNGMxMC42NiwxMC42NTcsMjMuNjA0LDE1Ljk4NSwzOC44MzIsMTUuOTg1YzE1LjIyNSwwLDI4LjE2Ny01LjMyOCwzOC44MjgtMTUuOTg1YzEwLjY1Ny0xMC42NjMsMTUuOTg3LTIzLjU5OSwxNS45ODctMzguODM0YzAtMTUuMjIzLTUuMzMtMjguMTcyLTE1Ljk4Ny0zOC44MjhDODIuOTkzLDM1Mi41MDUsNzAuMDUxLDM0Ny4xOCw1NC44MjEsMzQ3LjE4eiIvPjxwYXRoIGQ9Ik01MDguOTE3LDc1LjhjLTEuODEzLTEuODAzLTMuOTQ5LTIuNzA4LTYuNDI3LTIuNzA4SDE1NS4zMTNjLTIuNDczLDAtNC42MTUsMC45MDItNi40MjMsMi43MDhjLTEuODA3LDEuODEyLTIuNzEyLDMuOTQ5LTIuNzEyLDYuNDIzdjU0LjgyMWMwLDIuNDc1LDAuOTA1LDQuNjExLDIuNzEyLDYuNDI0YzEuODA5LDEuODA1LDMuOTUxLDIuNzA4LDYuNDIzLDIuNzA4SDUwMi40OWMyLjQ3OCwwLDQuNjE2LTAuOSw2LjQyNy0yLjcwOGMxLjgxLTEuODEyLDIuNzEtMy45NDksMi43MS02LjQyNFY4Mi4yMjRDNTExLjYyNiw3OS43NSw1MTAuNzIzLDc3LjYwOSw1MDguOTE3LDc1Ljh6Ii8+PHBhdGggZD0iTTUwMi40OSwyMTkuMjcxSDE1NS4zMTNjLTIuNDczLDAtNC42MTUsMC45LTYuNDIzLDIuNzEyYy0xLjgwNywxLjgwNy0yLjcxMiwzLjk0OS0yLjcxMiw2LjQyM3Y1NC44MTljMCwyLjQ3MiwwLjkwNSw0LjYxMywyLjcxMiw2LjQyMWMxLjgwOSwxLjgxMywzLjk1MSwyLjcxNCw2LjQyMywyLjcxNEg1MDIuNDljMi40NzgsMCw0LjYxNi0wLjksNi40MjctMi43MTRjMS44MS0xLjgwOCwyLjcxLTMuOTQ5LDIuNzEtNi40MjF2LTU0LjgxOWMwLTIuNDc0LTAuOTAzLTQuNjItMi43MS02LjQyM0M1MDcuMTAzLDIyMC4xNzUsNTA0Ljk2NywyMTkuMjcxLDUwMi40OSwyMTkuMjcxeiIvPjxwYXRoIGQ9Ik01MDIuNDksMzY1LjQ0N0gxNTUuMzEzYy0yLjQ3MywwLTQuNjE1LDAuOTAzLTYuNDIzLDIuNzE0Yy0xLjgwNywxLjgxLTIuNzEyLDMuOTQ5LTIuNzEyLDYuNDJWNDI5LjRjMCwyLjQ3OCwwLjkwNSw0LjYxNiwyLjcxMiw2LjQyN2MxLjgwOSwxLjgwNywzLjk1MSwyLjcwNyw2LjQyMywyLjcwN0g1MDIuNDljMi40NzgsMCw0LjYxNi0wLjksNi40MjctMi43MDdjMS44MS0xLjgxMSwyLjcxLTMuOTQ5LDIuNzEtNi40Mjd2LTU0LjgxOWMwLTIuNDcxLTAuOTAzLTQuNjE3LTIuNzEtNi40MkM1MDcuMTAzLDM2Ni4zNTcsNTA0Ljk2NywzNjUuNDQ3LDUwMi40OSwzNjUuNDQ3eiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);
      }

      .icon-filter {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnPjxwYXRoIGQ9Ik01MTAuMDc4LDM1LjUwOWMtMy4zODgtNy4zMDQtMTAuNzA5LTExLjk3Ny0xOC43NjEtMTEuOTc3SDIwLjY4MmMtOC4wNTEsMC0xNS4zNzIsNC42NzItMTguNzYxLDExLjk3N3MtMi4yMywxNS45MTEsMi45NjksMjIuMDZsMTgzLjM2NCwyMTYuODI4djE0Ni4zMjRjMCw3LjgzMyw0LjQyNiwxNC45OTUsMTEuNDMzLDE4LjQ5OWw5NC4xMjcsNDcuMDYzYzIuOTE5LDEuNDYsNi4wODgsMi4xODMsOS4yNDksMi4xODNjMy43ODIsMCw3LjU1Mi0xLjAzNiwxMC44NzQtMy4wODljNi4wOTctMy43NjksOS44MDktMTAuNDI2LDkuODA5LTE3LjU5NFYyNzQuMzk3TDUwNy4xMSw1Ny41NjlDNTEyLjMwOSw1MS40Miw1MTMuNDY2LDQyLjgxMyw1MTAuMDc4LDM1LjUwOXogTTI4Ny4yNywyNTMuNDY5Yy0zLjE1NywzLjczNC00Ljg4OSw4LjQ2Ni00Ljg4OSwxMy4zNTVWNDM0LjMybC01Mi43NjMtMjYuMzgxVjI2Ni44MjVjMC00Ljg5LTEuNzMzLTkuNjIxLTQuODktMTMuMzU1TDY1LjI1OSw2NC44OTZoMzgxLjQ4MkwyODcuMjcsMjUzLjQ2OXoiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==);
      }
      .icon {
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 0;
      }
    }
  }
}
</style>
