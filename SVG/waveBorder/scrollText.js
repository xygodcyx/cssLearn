let allText = document.querySelectorAll('h2')

function reveal() {
  for (let i = 0; i < allText.length; i++) {
    let text = allText[i]
    let top = text.getBoundingClientRect().top
    let windowHeight = window.innerHeight
    let visible = 800
    if (top < windowHeight - visible) {
      text.classList.add('active')
    } else {
      text.classList.remove('active')
    }
  }
}
window.addEventListener('scroll', reveal)
