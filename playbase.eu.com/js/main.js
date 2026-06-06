//Mobile Menu
const button = document.querySelector('.header__button-menu')
const headerMenu = document.querySelector('.header__menu')

button.addEventListener('click', () => {
  button.classList.toggle('active')
  headerMenu.classList.toggle('open')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && headerMenu.classList.contains('open')) {
    button.classList.remove('active')
    headerMenu.classList.remove('open')
  }
})

//Header Language
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.header__language')
  const toggleBtn = wrapper.querySelector('.header-language__button')
  const menu = wrapper.querySelector('.header-language__list')
  const closeBtn = wrapper.querySelector('.header-list__close')
  const langLinks = wrapper.querySelectorAll('a[data-lang]')

  const currentFlag = toggleBtn.querySelector('img')
  const currentLangSpan = toggleBtn.querySelector('span')

  const closeMenu = () => {
    menu.classList.remove('open')
    wrapper.classList.remove('active')
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    menu.classList.toggle('open')
    wrapper.classList.toggle('active')
  })

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      closeMenu()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu()
    }
  })

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      closeMenu()
    })
  }

  langLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.stopPropagation()

      const selectedImg = link.querySelector('img')
      const selectedText =
        link.childNodes[link.childNodes.length - 1].nodeValue.trim()
      const langCode = link.dataset.lang

      currentFlag.src = selectedImg.src
      currentLangSpan.textContent = selectedText

      closeMenu()
    })
  })
})

//Table of contents
const sidebarBtn = document.querySelector('.navigation__button')

sidebarBtn.addEventListener('click', () => {
  const menu = sidebarBtn.closest('.navigation')
  const list = menu?.querySelector('ul')

  if (!menu || !list) return

  menu.classList.toggle('open')
  list.style.height =
    menu.classList.contains('open') ? `${list.scrollHeight}px` : '0px'
})

//FAQ
document.querySelectorAll('.faq-item__question').forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq__item')
    if (!item) return

    const answer = item.querySelector('.faq-item__answer')
    if (!answer) return

    const isOpen = item.classList.contains('open')

    if (isOpen) {
      answer.style.height = '0px'
      item.classList.remove('open')
    } else {
      item.classList.add('open')
      answer.style.height = `${answer.scrollHeight}px`
    }
  })
})

// Scroll
const scrollButton = document.querySelector('.scroll')

function toggleScrollButton() {
  if (window.scrollY > 300) {
    scrollButton.classList.add('visible')
  } else {
    scrollButton.classList.remove('visible')
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

window.addEventListener('scroll', toggleScrollButton)

scrollButton.addEventListener('click', scrollToTop)

toggleScrollButton()
