const buttons = document.querySelectorAll('.acc-btn')

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.acc-item')
    const open = item.classList.toggle('is-open')

    btn.setAttribute('aria-expanded', open)

    const icon = btn.querySelector('.acc-icon')

    if (open) {
      icon.src = 'assets/img/icon-minus.svg'
      icon.alt = 'Collapse icon'
    } else {
      icon.src = 'assets/img/icon-plus.svg'
      icon.alt = 'Expand icon'
    }
  })
})
