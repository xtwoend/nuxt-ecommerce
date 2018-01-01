<template>
  <ul :class="containerClass" v-if="!noLiSurround">
    <li :class="[prevClass, { disabled: firstPageSelected() }]">
      <a @click="prevPage()" @keyup.enter="prevPage()" :class="prevLinkClass" tabindex="0">
        <slot name="prevContent">
          <div class="back" style="width: 20px; height: 20px;">
            <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
              <g>
                <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                  c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
              </g>
            </svg>
          </div>
          <!-- <img src="/img/back.svg" width="20" height="20"> -->
        </slot>
      </a>
    </li>
    <li v-for="page in pages" :class="[pageClass, page.selected ? activeClass : '', { disabled: page.disabled } ]">
      <a v-if="page.disabled" :class="pageLinkClass" tabindex="0">{{ page.content }}</a>
      <a v-else @click="handlePageSelected(page.index)" @keyup.enter="handlePageSelected(page.index)" :class="pageLinkClass" tabindex="0">{{ page.content }}</a>
    </li>
    <li :class="[nextClass, { disabled: lastPageSelected() }]">
      <a @click="nextPage()" @keyup.enter="nextPage()" :class="nextLinkClass" tabindex="0">
        <slot name="nextContent">
          <div class="next" style="width: 20px; height: 20px;">
            <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
                <g>
                  <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                    c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                    " />
                </g>
            </svg>
          </div>
          <!-- <img src="/img/next.svg" width="20" height="20"> -->
        </slot>
      </a>
    </li>
  </ul>

  <div :class="containerClass" v-else>
    <a @click="prevPage()" @keyup.enter="prevPage()" :class="[prevLinkClass, { disabled: firstPageSelected() }]" tabindex="0">
      <slot name="prevContent">
        <!-- <img src="/img/back.svg" width="35" height="35"> -->
        <div class="back" style="width: 20px; height: 20px;">
          <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
            <g>
              <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
            </g>
          </svg>
        </div>
      </slot>
    </a>
    <template v-for="page in pages">
      <a v-if="page.disabled" :class="[pageLinkClass, page.selected ? activeClass : '', { disabled: page.disabled }]" tabindex="0">{{ page.content }}</a>
      <a v-else @click="handlePageSelected(page.index)" @keyup.enter="handlePageSelected(page.index)" :class="[pageLinkClass, { active: page.selected, disabled: page.disabled }]" tabindex="0">
        {{ page.content }}
      </a>
    </template>
    <a @click="nextPage()" @keyup.enter="nextPage()" :class="[nextLinkClass, { disabled: lastPageSelected() }]" tabindex="0">
      <slot name="nextContent">
        <!-- <img src="/img/next.svg" width="20" height="20"> -->
        <div class="next" style="width: 20px; height: 20px;">
          <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
              <g>
                <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                  c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                  " />
              </g>
          </svg>
        </div>
      </slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    pageCount: {
      type: Number,
      required: true
    },
    initialPage: {
      type: Number,
      default: 1
    },
    forcePage: {
      type: Number
    },
    clickHandler: {
      type: Function,
      default: () => { }
    },
    pageRange: {
      type: Number,
      default: 3
    },
    marginPages: {
      type: Number,
      default: 1
    },
    prevText: {
      type: String,
      default: 'Prev'
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    containerClass: {
      type: String
    },
    pageClass: {
      type: String
    },
    pageLinkClass: {
      type: String
    },
    prevClass: {
      type: String
    },
    prevLinkClass: {
      type: String
    },
    nextClass: {
      type: String
    },
    nextLinkClass: {
      type: String
    },
    activeClass: {
      type: String,
      default: 'active'
    },
    noLiSurround: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selected: (this.initialPage - 1)
    }
  },
  beforeUpdate () {
    if (this.forcePage === undefined) return
    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage
    }
  },
  computed: {
    pages: function () {
      let items = {}
      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected
          }
          items[index] = page
        }
      } else {
        let leftPart = this.pageRange / 2
        let rightPart = this.pageRange - leftPart

        if (this.selected < leftPart) {
          leftPart = this.selected
          rightPart = this.pageRange - leftPart
        } else if (this.selected > this.pageCount - this.pageRange / 2) {
          rightPart = this.pageCount - this.selected
          leftPart = this.pageRange - rightPart
        }

        let setPageItem = index => {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected
          }

          items[index] = page
        }

        let setBreakView = index => {
          let breakView = {
            content: '...',
            disabled: true
          }

          items[index] = breakView
        }

        // 1st - loop thru low end of margin pages
        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i)
        }

        // 2nd - loop thru selected range
        let selectedRangeLow = 0
        if (this.selected - this.pageRange > 0) {
          selectedRangeLow = this.selected - this.pageRange
        }

        // 3rd - loop thru high end of margin pages
        let selectedRangeHigh = this.pageCount
        if (this.selected + this.pageRange < this.pageCount) {
          selectedRangeHigh = this.selected + this.pageRange
        }

        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
          setPageItem(i)
        }

        // Check if there is breakView in the left of selected range
        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1)
        }

        // Check if there is breakView in the right of selected range
        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1)
        }
        // 2nd - loop thru high end of margin pages
        for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
          setPageItem(i)
        }
      }
      return items
    }
  },
  methods: {
    handlePageSelected (selected) {
      if (this.selected === selected) return

      this.selected = selected

      this.clickHandler(this.selected + 1)
    },
    prevPage () {
      if (this.selected <= 0) return

      this.selected--

      this.clickHandler(this.selected + 1)
    },
    nextPage () {
      if (this.selected >= this.pageCount - 1) return

      this.selected++

      this.clickHandler(this.selected + 1)
    },
    firstPageSelected () {
      return this.selected === 0
    },
    lastPageSelected () {
      return (this.selected === this.pageCount - 1) || (this.pageCount === 0)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  li > a {
    position: relative;
    display: block;
    padding: 6px .5rem;
    margin-left: 10px;
    margin-right: 10px;
    line-height: 1.20;
    text-align: center;
    color: rgba(0,0,0,.4);
  }
  .page-item {
    &.active > a {
      color: #fff;
      background-color: #ff6736;
      font-weight: 600;
      border-radius: 4px;
      text-align: center;
    }
    > a {
      min-width: 40px;
      position: relative;
      display: block;
      padding: .5rem .5rem;
      margin-left: 10px;
      margin-right: 10px;
      line-height: 1.20;
      color: rgba(0,0,0,.4);
      // color: #0275d8;
      // background-color: #fff;
      // border: 1px solid #ddd;
    }
  }
}
</style>
