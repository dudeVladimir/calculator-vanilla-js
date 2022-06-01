import { Component } from '../core/component'

export class ButtonComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    this.$el.addEventListener('click', buttonHandler.bind(this))
  }
}

function buttonHandler(event) {
  const input = document.getElementById('input-fn')
  const history = document.getElementById('history-block')

  if (event.target.classList.contains('calc__btn-block_number')) {
  } else {
    let val = event.target.textContent
    if (val === 'C') {
      input.value = ''
    } else if (val === '=') {
      if (document.getElementById('empty')) {
        document.getElementById('empty').remove()
      }
      history.insertAdjacentHTML(
        'afterbegin',
        `
      <div class="fn-block">
        <span class="fn-block__result">= ${eval(input.value)}</span>
        <span class="fn-block__function">${input.value}</span>
      </div>
    `
      )
      input.value = eval(input.value)
    } else if (val === '()') {
      if (input.value.trim() === '') {
        input.value = input.value + '('
      } else if (!isNaN(input.value.slice(-1))) {
        input.value = input.value + ')'
      } else {
        input.value = input.value + '('
      }
    } else {
      input.value = input.value + val
    }
  }
}
