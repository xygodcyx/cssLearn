/**
 * canvas - canvas element
 * @type {HTMLCanvasElement} canvas - canvas element
 */
const canvas = document.getElementById('canvas')
/**
 * ctx - canvas context object
 * @type {CanvasRenderingContext2D} ctx - canvas context object
 */
const ctx = canvas.getContext('2d', {
  willReadFrequently: true,
})

function initCanvas() {
  canvas.width = window.innerWidth * devicePixelRatio
  canvas.height = window.innerHeight * devicePixelRatio
}
initCanvas()

function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1) + min)
}

class Particle {
  constructor() {
    const r = Math.min(canvas.width, canvas.height) / 2
    const cx = canvas.width / 2
    const cy = canvas.height / 2
    const rad = (getRandom(0, 360) * Math.PI) / 180
    this.x = cx + r * Math.cos(rad)
    this.y = cy + r * Math.sin(rad)
    this.size = getRandom(1 * devicePixelRatio, 2 * devicePixelRatio)
    this.duration = 500
  }
  draw() {
    ctx.beginPath()
    ctx.fillStyle = `#5445544d`
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
  }
  moveTo(tx, ty) {
    const sx = this.x
    const sy = this.y
    const startTime = Date.now()
    const xSpeed = (tx - sx) / this.duration
    const ySpeed = (ty - sy) / this.duration
    const _move = () => {
      const elapsedTime = Date.now() - startTime
      const x = sx + xSpeed * elapsedTime
      const y = sy + ySpeed * elapsedTime
      this.x = x
      this.y = y
      if (elapsedTime >= this.duration) {
        this.x = tx
        this.y = ty
        return
      }
      requestAnimationFrame(_move)
    }
    _move()
  }
}

const particles = []

for (let i = 0; i < 200; i++) {
  particles.push(new Particle())
}
let text = null
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function draw() {
  update()
  particles.forEach((particle) => particle.draw())
  requestAnimationFrame(draw)
}

draw()

function update() {
  const newText = getText()
  if (newText === text) {
    return
  }
  clear()
  text = newText
  // 画文本
  const { width, height } = canvas
  ctx.fillStyle = `#000000`
  ctx.font = `${140 * devicePixelRatio}px Arial`
  const x = width / 2 - ctx.measureText(text).width / 2
  const y = height / 2
  ctx.fillText(text, x, y)
  const points = getPoints()
  clear()
  console.log(particles.length, points.length)
  if (points.length < particles.length) {
    // particles.splice(points.length)
  }
  for (let i = 0; i < points.length; i++) {
    clear()
    let p = particles[i]
    if (!p) {
      p = new Particle()
      particles.push(p)
    }
    const [x, y] = points[i]
    p.duration = 100 + i * 3
    p.moveTo(x, y)
  }
}

function getText() {
  return '我爱你'
}

function getPoints() {
  const { width, height, data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const result = []
  const gap = 4
  for (let i = 0; i < width; i += gap) {
    for (let j = 0; j < height; j += gap) {
      const index = (i + width * j) * 4
      const r = data[index]
      const g = data[index + 1]
      const b = data[index + 2]
      const a = data[index + 3]
      if (r === 0 && g === 0 && b === 0 && a === 255) {
        // console.log(r, g, b, a)
        result.push([i, j])
      }
    }
  }
  // const result = []
  // for()
  return result
}
