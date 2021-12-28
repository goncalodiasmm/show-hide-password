// PROJECT
const showHidePassword = (inputOverlay, inputPassword, inputIcon) => {
  const overlay = document.getElementById(inputOverlay)
  const password = document.getElementById(inputPassword)
  const icon = document.getElementById(inputIcon)

  // WHEN THE ICON IS CLICKED:
  // PASSWORD TYPE ATTRIBUTE IS CHANGED (PASSWORD-TEXT)
  // ICON CLASS IS CHANGED (SHOW-HIDE)
  icon.addEventListener('click', () => {
    if (password.type === 'password') {
      password.type = 'text'
      icon.classList.add('bx-show')
    } else {
      password.type = 'password'
      icon.classList.remove('bx-show')
    }

    overlay.classList.toggle('overlay-full')
  })
}

showHidePassword('input-overlay', 'input-password', 'input-icon')
