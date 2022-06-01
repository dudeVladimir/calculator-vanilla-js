import { Component } from '../core/component'

export class InputComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    const history = document.getElementById('history-block')

    this.$el.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        if (document.getElementById('empty')) {
          document.getElementById('empty').remove()
        }
        history.insertAdjacentHTML(
          'afterbegin',
          `
        <div class="fn-block">
          <span class="fn-block__result">= ${eval(this.$el.value)}</span>
          <span class="fn-block__function">${this.$el.value}</span>
        </div>
      `
        )
        this.$el.value = eval(this.$el.value)
      }
    })
  }
}
