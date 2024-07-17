/**
 * pool - a simple pool implementation.
 * @type {HTMLElement[]} pool -
 */
let pool = []
let initCount = 20
pollInit()
function pollInit() {
  for (let i = 0; i < initCount; i++) {
    pollAdd(document.createElement('div'))
  }
}

function pollAdd(obj) {
  pool.push(obj)
}

function pollReturn(obj) {
  obj.style.visibility = 'hidden'
  pollAdd(obj)
}

/**
 * pollGet - get an element from the pool or create a new one if the pool is empty.
 * @param {string} type - the type of element to create if the pool is empty.
 * @returns {HTMLElement}
 */
function pollGet(type = 'div') {
  // console.log('pool size:', pool.length)
  let obj = pool.shift()
  let result = null
  if (obj) {
    result = obj
  } else {
    let element = document.createElement(type)
    pool.push(element)
    result = element
    // console.log('created new element')
  }
  result.style.visibility = 'visible'
  return result
}
