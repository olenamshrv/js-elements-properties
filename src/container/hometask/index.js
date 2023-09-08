import {
  createElement,
  createHeader,
  createTabs,
} from '../../script/layout'

const body = document.querySelector('body')

const mainEl = createElement('main', 'main')

body.prepend(mainEl)

const main = document.querySelector('.main')

const header = createHeader()

main.append(header)
main.append(createElement('h1', 'title', 'Коммьюніті'))

main.append(createTabs())
