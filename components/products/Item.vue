<template lang="pug">
  .list-products.item__card
    a.product__link.muted(@click.prevent="detail")
      .product__card
        .product__img.lazyimg__container
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
            lazy-image(
              class="lazyimg__img",
              :src="'https://cf.shopee.co.id/file/'+item.image"
            )
        .product__attribute
          .item__name {{ item.name }}
          .item__price
            .price <span v-if="item.price_before_discount !== 0">{{ (item.price_before_discount / 100000) | currency('') }}</span> {{ (item.price / 100000) | currency('Rp') }}
            .ship 
          .item-spacer &nbsp;
          .item__actions
            .likes <div class="icon heart" />
              span {{ item.liked_count }}
            .rating
              star-rating(
                :voters="item.rating_count[0]",
                :rating="item.rating_star"
                v-if="item.rating_count[0] > 0"
              )
              span(v-else) belum ada penilaian
          .item-shop
            .shop__name <div class="icon shop" /> Toko MajuJaya
            .shop__location <div class="icon placeholder" /> Tangerang


</template>

<script>
import StarRating from '~/components/common/rating'
import NoSSR from 'vue-no-ssr'

export default {
  name: 'Item',
  props: [ 'item' ],
  components: {
    StarRating,
    NoSSR
  },
  data () {
    return {
    }
  },
  methods: {
    detail () {
      let item = this.item
      let url = this.strToSlug(item.name) + '.' + item.shopid + '.' + item.itemid
      this.$store.commit('SET_PRODUCT_DETAIL', item)
      this.$router.push(url)
    },
    strToSlug (str) {
      /* eslint-disable */
      return str.toString()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
      /* eslint-enable */
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.product__link {
  text-decoration: none;
  color: #333;
}

.product__card {
  // box-shadow: 0 0.1rem 0.2rem 0 rgba(0,0,0,.1);
  border-radius: 2px;
  overflow: hidden;
  overflow: visible;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  &:hover {
    // -webkit-transition: all 0.1s ease-in-out;
    // -moz-transition: all 0.1s ease-in-out;
    // -o-transition: all 0.1s ease-in-out;
    // transform: translate(0,-5px);
    // -webkit-transform: translate(0,-5px);
    // -o-transform: translate(0,-5px); 
    // -moz-transform: translate(0,-5px);
    // box-shadow: 0.1rem 0.2rem 0.2rem 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 10px rgba(0,0,0,.3);
  }
  > .product__attribute {
    padding: 0 10px 10px;
    font-size: 1rem;
    .item__name {
      overflow: hidden;
      word-wrap: break-word;
      line-height: 1.3rem;
      height: 2.6rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: rgba(0,0,0,.8);
      text-align: left;
    }
    .item__price {
      display: flex;
      .price {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #ff5722;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        max-width: 100%;
        line-height: 1.2;
        font-size: 0.9rem;
        span {
          color: rgba(0,0,0,.54);
          text-decoration: line-through;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .ship {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
    }
    .item-spacer {
      line-height: 1.3rem;
    }
    .item__actions {
      line-height: 1.2;
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      color: #aaa;
      margin-bottom: .5rem;
      .likes {
        text-align: left;
        position: relative;
        .icon.heart {
          width: 0.95rem;
          height: 0.95rem;
          position: absolute;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGc+PHBhdGggZD0iTTQ3Mi4wOCw4MS4xMmMtMjYuOTYtMjcuNTcyLTYzLjAyMi00Mi43NTctMTAxLjU0Ni00Mi43NTdjLTM3LjkzLDAtNzMuNTkzLDE0Ljc3My0xMDAuNDIxLDQxLjYwMkwyNTYuMjY3LDkzLjgybC0xMy44NTktMTMuODU5Yy0yNi44MjYtMjYuODI2LTYyLjQ4Mi00MS41OTktMTAwLjQwMS00MS41OTljLTM3LjkzMSwwLTczLjU5MywxNC43NzMtMTAwLjQxNyw0MS41OTlDMTQuNzcsMTA2Ljc4LDAsMTQyLjQzOSwwLDE4MC4zN3MxNC43Nyw3My41OSw0MS41OSwxMDAuNDA5TDIxOS4wNzIsNDU4LjI2YzEwLjI1MywxMC4yNTEsMjMuNzE3LDE1LjM3NywzNy4xODQsMTUuMzc3YzEzLjQ2NC0wLjAwMSwyNi45MzEtNS4xMjYsMzcuMTgxLTE1LjM3NmwxNzYuMzM5LTE3Ni4zMjNDNTI1LjE2MSwyMjYuNTUxLDUyNi4xOTUsMTM2LjQ2Niw0NzIuMDgsODEuMTJ6IE00NTEuMTgzLDI2My4zNDZMMjc0Ljg0NSw0MzkuNjcxYy0xMC4yNTEsMTAuMjUtMjYuOTMxLDEwLjI1LTM3LjE4MS0wLjAwMUw2MC4xODEsMjYyLjE4NmMtMjEuODU0LTIxLjg1My0zMy44ODktNTAuOTA5LTMzLjg4OS04MS44MTdzMTIuMDM1LTU5Ljk2NCwzMy44ODktODEuODE4YzIxLjg1OC0yMS44NTksNTAuOTE4LTMzLjg5Nyw4MS44MjYtMzMuODk3YzMwLjg5NiwwLDU5Ljk1LDEyLjAzOCw4MS44MDksMzMuODk3bDEzLjg2NiwxMy44NjZsLTIxLjIzMywyMS4yNDljLTUuMTMyLDUuMTM2LTUuMTI4LDEzLjQ1OSwwLjAwNywxOC41OTFjMi41NjcsMi41NjUsNS45MjksMy44NDcsOS4yOTIsMy44NDdjMy4zNjcsMCw2LjczMi0xLjI4Niw5LjI5OS0zLjg1NGw1My42NTgtNTMuN2MyMS44NTktMjEuODU5LDUwLjkxOC0zMy44OTcsODEuODI2LTMzLjg5N2MzMS4zODksMCw2MC43NzUsMTIuMzc2LDgyLjc0NywzNC44NDdDNDk3LjM3NCwxNDQuNTk3LDQ5Ni40MzMsMjE4LjA5Nyw0NTEuMTgzLDI2My4zNDZ6Ii8+PC9nPjwvZz48Zz48Zz48cGF0aCBkPSJNNDY2LjI5LDE3NC40MDNjLTEuNDQ1LTIzLjM4LTExLjM1LTQ1LjM2Ni0yNy44OTEtNjEuOTA5Yy0xMS43MTItMTEuNzEyLTI2LjI0NS0yMC4yMjItNDIuMDI2LTI0LjYxNWMtNi45OTUtMS45NDYtMTQuMjQyLDIuMTQ3LTE2LjE4OCw5LjE0MmMtMS45NDYsNi45OTQsMi4xNDcsMTQuMjQyLDkuMTQyLDE2LjE4OGMxMS40MjcsMy4xNzksMjEuOTY3LDkuMzYsMzAuNDgyLDE3Ljg3NWMxMi4wMDQsMTIuMDA0LDE5LjE5MiwyNy45NjMsMjAuMjQxLDQ0LjkzOGMwLjQzMSw2Ljk3MSw2LjIxOCwxMi4zMzYsMTMuMTA5LDEyLjMzNmMwLjI3MiwwLDAuNTQ3LTAuMDA4LDAuODIzLTAuMDI2QzQ2MS4yMjgsMTg3Ljg4Nyw0NjYuNzM4LDE4MS42NSw0NjYuMjksMTc0LjQwM3oiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==);
        }
        span {
          padding-left: 1.5rem; 
        }
      }
      .rating {
        text-align: right;
        .vue-star-rating {
          display: inherit;
          align-items: right;
        }
        .hide {
          display: none;
        }
      }
    }
    .item-shop {
      padding-top: 0.5rem;
      border-top: 1px dashed #ccc;
      font-size: .9rem;
      position: relative;
      padding-left: 1.5rem;
      color: #aaa;
      .shop__name, .shop__location {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        .icon.shop {
          width: 1rem;
          height: 1rem;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS40IDQ4OS40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODkuNCA0ODkuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnPjxwYXRoIGQ9Ik0zNDcuNywyNjMuNzVoLTY2LjVjLTE4LjIsMC0zMywxNC44LTMzLDMzdjUxYzAsMTguMiwxNC44LDMzLDMzLDMzaDY2LjVjMTguMiwwLDMzLTE0LjgsMzMtMzN2LTUxQzM4MC43LDI3OC41NSwzNjUuOSwyNjMuNzUsMzQ3LjcsMjYzLjc1eiBNMzU2LjcsMzQ3Ljc1YzAsNS00LjEsOS05LDloLTY2LjVjLTUsMC05LTQuMS05LTl2LTUxYzAtNSw0LjEtOSw5LTloNjYuNWM1LDAsOSw0LjEsOSw5VjM0Ny43NXoiLz48cGF0aCBkPSJNNDg5LjQsMTcxLjA1YzAtMi4xLTAuNS00LjEtMS42LTUuOWwtNzIuOC0xMjhjLTIuMS0zLjctNi4xLTYuMS0xMC40LTYuMUg4NC43Yy00LjMsMC04LjMsMi4zLTEwLjQsNi4xbC03Mi43LDEyOGMtMSwxLjgtMS42LDMuOC0xLjYsNS45YzAsMjguNywxNy4zLDUzLjMsNDIsNjQuMnYyMTEuMWMwLDYuNiw1LjQsMTIsMTIsMTJoNjYuM2MwLjEsMCwwLjIsMCwwLjMsMGg5M2MwLjEsMCwwLjIsMCwwLjMsMGgyMjEuNGM2LjYsMCwxMi01LjQsMTItMTJ2LTIwOS42YzAtMC41LDAtMC45LTAuMS0xLjNDNDcyLDIyNC41NSw0ODkuNCwxOTkuODUsNDg5LjQsMTcxLjA1eiBNOTEuNyw1NS4xNWgzMDUuOWw1Ni45LDEwMC4xSDM0LjlMOTEuNyw1NS4xNXogTTM0OC4zLDE3OS4xNWMtMy44LDIxLjYtMjIuNywzOC00NS40LDM4Yy0yMi43LDAtNDEuNi0xNi40LTQ1LjQtMzhIMzQ4LjN6IE0yMzIsMTc5LjE1Yy0zLjgsMjEuNi0yMi43LDM4LTQ1LjQsMzhzLTQxLjYtMTYuNC00NS41LTM4SDIzMnogTTI0LjgsMTc5LjE1aDkwLjljLTMuOCwyMS42LTIyLjgsMzgtNDUuNSwzOEM0Ny41LDIxNy4yNSwyOC42LDIwMC43NSwyNC44LDE3OS4xNXogTTIwMS42LDQzNC4zNWgtNjl2LTEyOS41YzAtOS40LDcuNi0xNy4xLDE3LjEtMTcuMWgzNC45YzkuNCwwLDE3LjEsNy42LDE3LjEsMTcuMXYxMjkuNUgyMDEuNnogTTQyMy4zLDQzNC4zNUgyMjUuNnYtMTI5LjVjMC0yMi42LTE4LjQtNDEuMS00MS4xLTQxLjFoLTM0LjljLTIyLjYsMC00MS4xLDE4LjQtNDEuMSw0MS4xdjEyOS42SDY2di0xOTMuM2MxLjQsMC4xLDIuOCwwLjEsNC4yLDAuMWMyNC4yLDAsNDUuNi0xMi4zLDU4LjItMzFjMTIuNiwxOC43LDM0LDMxLDU4LjIsMzFzNDUuNS0xMi4zLDU4LjItMzFjMTIuNiwxOC43LDM0LDMxLDU4LjEsMzFjMjQuMiwwLDQ1LjUtMTIuMyw1OC4xLTMxYzEyLjYsMTguNywzNCwzMSw1OC4yLDMxYzEuNCwwLDIuNy0wLjEsNC4xLTAuMUw0MjMuMyw0MzQuMzVMNDIzLjMsNDM0LjM1eiBNNDE5LjIsMjE3LjI1Yy0yMi43LDAtNDEuNi0xNi40LTQ1LjQtMzhoOTAuOUM0NjAuOCwyMDAuNzUsNDQxLjksMjE3LjI1LDQxOS4yLDIxNy4yNXoiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==);
        }
      }
      .shop__location {
        text-transform: lowercase;
        .icon.placeholder {
          width: 1rem;
          height: 1rem;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYxLjE2OCA2MS4xNjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxLjE2OCA2MS4xNjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMzAuOTM4LDI2LjU4NGMzLjg1OSwwLDctMy4xNDEsNy03cy0zLjE0MS03LTctN3MtNywzLjE0MS03LDdTMjcuMDc4LDI2LjU4NCwzMC45MzgsMjYuNTg0eiBNMzAuOTM4LDE0LjU4NGMyLjc1NywwLDUsMi4yNDMsNSw1cy0yLjI0Myw1LTUsNXMtNS0yLjI0My01LTVTMjguMTgxLDE0LjU4NCwzMC45MzgsMTQuNTg0eiIvPjxwYXRoIGQ9Ik01MC4yMTYsMzcuNTg0aC03LjE2MWwzLjA0Ny00LjRjNS43NTUtNy42NzEsNC45MjItMjAuMjgtMS43ODEtMjYuOTgyYy0zLjYyMS0zLjYyMi04LjQzNy01LjYxNy0xMy41Ni01LjYxN2MtNS4xMjIsMC05LjkzOCwxLjk5NS0xMy41Niw1LjYxN2MtNi43MDMsNi43MDItNy41MzYsMTkuMzEyLTEuODA0LDI2Ljk1MmwzLjA2OCw0LjQzMWgtNy41MTNMMCw2MC41ODRoNjEuMTY4TDUwLjIxNiwzNy41ODR6IE0xNy4wMiwzMS45ODRjLTUuMTk5LTYuOTMzLTQuNDU0LTE4LjMyLDEuNTk2LTI0LjM2OWMzLjI0NC0zLjI0NCw3LjU1OC01LjAzMSwxMi4xNDYtNS4wMzFzOC45MDEsMS43ODcsMTIuMTQ2LDUuMDMxYzYuMDUsNi4wNDksNi43OTUsMTcuNDM3LDEuNTczLDI0LjM5OUwzMC43NjEsNTEuODI3bC05Ljg2My0xNC4yNDNoMEwxNy4wMiwzMS45ODR6IE0xMi4yMTYsMzkuNTg0aDcuNjM0bDEwLjkxMSwxNS43NTdsMTAuOTEtMTUuNzU3aDcuMjgxbDkuMDQ4LDE5SDMuMTY4TDEyLjIxNiwzOS41ODR6Ii8+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==);
        }
      }
      .icon {
        position: absolute;
        left: 0;
        fill: #ddd;
      }
    }
  }
}
</style>