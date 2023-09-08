// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є

const test2 = require('./test2')

const hometask = require('./hometask')

// Об'єднайте файли роутів за потреби
router.use('/', test)
// Використовуйте інші файли роутів, якщо є

router.use('/', test2)

router.use('/', hometask)

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву контейнера
    name: 'index',
    // вказуємо назву компонентів
    data: {
      comments: [
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
      ],
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

// Експортуємо глобальний роутер
module.exports = router
