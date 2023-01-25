
let sessionTime = parseInt(sessionStorage.getItem('sessionTime')) || 0

const refreshTime = function () {
  timer.innerText = sessionTime
}

const timer = document.getElementById('timer')

refreshTime()

const addASec = function () {
  sessionTime++
  refreshTime()
  sessionStorage.setItem('sessionTime', sessionTime)
}

let autoTiming = setInterval(addASec, 1000)
console.log("Timer avviato!")

const stop = () => {
  clearInterval(autoTiming)
  console.log("Timer interrotto! Ricarica la pagina per riavviare")
  sessionTime = 0
  sessionStorage.clear('sessionTime')
  refreshTime()
}

document.querySelector('#stopBtn').onclick = stop