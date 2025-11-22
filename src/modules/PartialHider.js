import MatchMedia from '@/constants/MatchMedia'

const rootSelector = '[data-js-partial-hider]'

class PartialHider {
  selectors = {
    root: rootSelector,
    item: '[data-js-partial-hider-item]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.itemElements = this.rootElement.querySelectorAll(this.selectors.item)
    this.bindEvents()
  }

  hideHalf() {
    const total = this.itemElements.length
    const half = Math.floor(total / 2)

    Array.from(this.itemElements).forEach((itemElement, i) => {
      if (i >= total - half) {
        itemElement.style.display = 'none'
      } else {
        itemElement.style.display = 'flex'
      }
    })
  }

  showAll() {
    Array.from(this.itemElements).forEach((itemElement) => {
      itemElement.style.display = 'flex'
    })
  }

  onResize = () => {
    if (MatchMedia.mobile.matches) {
      this.hideHalf()
    } else {
      this.showAll()
    }
  }

  bindEvents() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }
}

class PartialHiderCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new PartialHider(element)
    })
  }
}

export default PartialHiderCollection
