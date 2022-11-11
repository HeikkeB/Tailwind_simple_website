function burgerMenu() {
  const menu = document.querySelector('#menu')
  const burger = document.querySelector('.burger')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')

    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  })
}

burgerMenu()
