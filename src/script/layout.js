export const createElement = (tag, className, text, id) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  if (id) {
    elem.id = id
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    alt: 'Go back',
    width: '24',
    height: '24',
    src: '/svg/header_back.svg',
  },
  {
    alt: 'Avatar',
    width: '24',
    height: '24',
    src: '/img/header_avatar.jpg',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'header__button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('beforeend', button)
  })

  return header
}

export const createCard = (date, text, isGray) => {
  const cardStyle = isGray ? 'card--gray' : ''
  const cardTextStyle = isGray ? '' : 'card__text--light'

  const card = createElement('div', `card ${cardStyle}`)

  const cardInfo = createElement('div', 'card__info')

  const cardBadges = createElement('div', 'card__badges')

  const spanOrange = createElement(
    'span',
    'card__badge card__badge--orange',
    'Важливо',
  )

  const spanPink = createElement(
    'span',
    'card__badge card__badge--pink',
    'Нова',
  )

  const spanDate = createElement('span', 'card__date', date)

  const p = createElement(
    'p',
    `card__text ${cardTextStyle}`,
    text,
  )

  cardBadges.append(spanOrange, spanPink)
  cardInfo.append(cardBadges, spanDate)
  card.append(cardInfo, p)

  return card
}

const CARD_LIST = [
  {
    date: '25.01',
    text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    isGray: true,
  },
  {
    date: '15.01',
    text: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    isGray: false,
  },
  {
    date: '25.01',
    text: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    isGray: true,
  },
]

export const createCardList = () => {
  const cardList = createElement('section', 'cards__list')

  CARD_LIST.forEach(({ date, text, isGray }) => {
    const card = createCard(date, text, isGray)
    cardList.append(card)
  })

  return cardList
}

let TABS_LIST = [
  {
    id: 1,
    name: 'База знань',
    isActive: false,
  },
  {
    id: 2,
    name: 'Інформація',
    isActive: true,
    image: '/img/community.png',
    info: {
      title: 'Що таке база знань?',
      text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
    },
    button: {
      text: "Перейти до ком'юніті у Телеграм",
    },
  },
]

// TABS_LIST[0].isActive = true
// TABS_LIST[1].isActive = false
// console.log(TABS_LIST[0].isActive)

export const createTabs = () => {
  const tabsEl = createElement('section', 'tabs')

  const tabsHeader = createElement('div', 'tabs__header')

  tabsEl.append(tabsHeader)

  TABS_LIST.forEach((data) => {
    const tabStyle = data.isActive
      ? 'tab__title'
      : 'tab__title tab__title--inactive'

    const tabTitle = createElement(
      'button',
      tabStyle,
      data.name,
      data.id,
    )

    tabsHeader.append(tabTitle)

    if (data.isActive && data.info) {
      const img = createElement('img')
      img.src = data.image
      img.alt = data.name

      const infoTitle = createElement(
        'h2',
        'info__title',
        data.info.title,
      )

      const infoText = createElement(
        'p',
        'info__text',
        data.info.text,
      )

      const tabButton = createElement(
        'button',
        'tab__button',
        data.button.text,
      )

      tabsEl.append(img, infoTitle, infoText, tabButton)

      return tabsEl
    }
  })

  return tabsEl
}

// document.getElementsByClassName('tab__title').onclick = () => {
//     // TABS_LIST[0].isActive = true
// // TABS_LIST[1].isActive = false
// // console.log(TABS_LIST[0].isActive)
// }
