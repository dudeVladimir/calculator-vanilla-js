import { Component } from './../core/component'

export class HistoryComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    const backdrop = document.getElementById('backdrop')
    const historyBtn = document.getElementById('history-btn')

    historyBtn.addEventListener('click', open.bind(this))
    backdrop.addEventListener('click', close.bind(this))
  }
}

function open() {
  const backdrop = document.getElementById('backdrop')
  const historyBtn = document.getElementById('history-btn')

  historyBtn.classList.add('hide')
  backdrop.classList.remove('hide')
  this.$el.classList.remove('close')
}

function close() {
  const backdrop = document.getElementById('backdrop')
  const historyBtn = document.getElementById('history-btn')

  historyBtn.classList.remove('hide')
  backdrop.classList.add('hide')
  this.$el.classList.add('close')
}
