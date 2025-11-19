const rootSelector = "[data-js-expandable-content]"

class ExpandableContent {
  selectors = {
    root: rootSelector,
    button: "[data-js-expandable-content-button]",
    content: "[data-js-expandable-content-content]"
  }

  stateClasses = {
    isExpanded: "is-expanded"
  }

  animationParams = {
    duration: 500,
    easing: "ease",
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.buttonElement = this.rootElement.querySelector(this.selectors.button)
    this.contentElement = this.rootElement.querySelector(this.selectors.content)
    this.bindEvents()
  }

   toggle() {
    const {offsetHeight, scrollHeight} = this.contentElement

    const isExpanded = this.rootElement.classList.contains("is-expanded")

    this.rootElement.classList.toggle(this.stateClasses.isExpanded, !isExpanded)
    this.buttonElement.classList.toggle(this.stateClasses.isExpanded, !isExpanded)

    if(!isExpanded) {
      this.buttonElement.innerHTML = "Show Less"
      this.contentElement.animate([
        {
          maxHeight: offsetHeight + "px"
        },
        {
          maxHeight: scrollHeight + "px"
        }
      ], this.animationParams)
    } else {
      this.buttonElement.innerHTML = "Show More"
      this.contentElement.animate([
        {
          maxHeight: scrollHeight + "px"
        },
        {
          maxHeight: "201px"
        }
      ], this.animationParams)
    }
  }

  onButtonClick = () => {
      this.toggle()
  }


  bindEvents() {
    this.buttonElement.addEventListener("click", this.onButtonClick)
  }
}

class ExpandableContentCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new ExpandableContent(element)
    })
  }
}

export default ExpandableContentCollection