let cloud = document.querySelector('.cloud')
// 665
// let allChars = '你好小倩'
let allChars = '我爱你'
function randonText() {
  let randomIndex = Math.floor(Math.random() * allChars.pointLength())
  return allChars.pointCharAt(randomIndex).toLocaleUpperCase()
}

function rain() {
  let e = pollGet()
  let left = Math.floor(Math.random() * 290)
  let size = Math.random() + 1
  let duration = Math.random() * 0.5
  if (e.parentElement !== cloud) {
    e.classList.add('drop')
    e.innerText = randonText()
    e.style.fontSize = `${0.5 + size}em`
    e.style.left = `${left}px`
    e.style.animationDuration = `${1 + duration}s`
    cloud.appendChild(e)
  }
  setTimeout(() => {
    pollReturn(e)
  }, 2000)
}

setInterval(rain, 20)
