document.addEventListener('mousemove', (e) => {
  createStar(e)
})
document.addEventListener('touchmove', (e) => {
  createStar(e.touches[0])
})

document.addEventListener('click', (e) => {
  createMultipleStars(e)
})

document.addEventListener('touchstart', (e) => {
  createMultipleStars(e.changedTouches[0])
})

function createStar(e) {
  let x = e.clientX
  let y = e.clientY
  const star = window.pollGet('span')
  let size = Math.floor(Math.random() * 2)
  let rotate = Math.floor(Math.random() * 360)
  star.style.transform = `rotate(${rotate}deg)`
  star.style.fontSize = 0.5 + size + 'rem'
  star.style.left = x + 'px'
  star.style.top = y + 'px'
  star.classList.remove('star')
  star.offsetHeight //quick hack to force repaint
  star.classList.add('star')
  if (star.parentElement !== document.body) {
    document.body.appendChild(star)
  }
  setTimeout(() => {
    window.pollReturn(star)
  }, 2000)
}

function createMultipleStars(e, count = 10) {
  for (let i = 0; i < count; i++) {
    createStar(e)
  }
}
