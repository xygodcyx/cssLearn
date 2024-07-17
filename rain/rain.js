const cloud = document.querySelector('.cloud')

function rain() {
  let e = document.createElement('div')
  e.classList.add('drop')
  let left = Math.floor(Math.random() * 310)
  let width = Math.random() * 5
  let height = Math.random() * 50
  let duration = Math.random() * 0.5
  e.style.left = `${left}px`
  e.style.width = `${0.5 + width}px`
  e.style.height = `${0.5 + height}px`
  e.style.animationDuration = `${1 + duration}s`
  cloud.appendChild(e)
  setTimeout(() => {
    cloud.removeChild(e)
  }, 2000)
}

setInterval(rain, 20)
