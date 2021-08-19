let min = document.getElementById('min')
let sec = document.getElementById('sec')
let msec = document.getElementById('msec')

let startBtn = document.getElementById('startbtn')
let stopBtn = document.getElementById('stopbtn')
let resetBtn = document.getElementById('resetbtn')

min.innerHTML = 0
sec.innerHTML = 0
msec.innerHTML = 0

let mcount = 0
let scount = 0
let mscount = 0

function myTimer(){
    mscount += 1
    msec.innerHTML = mscount
    if(mscount === 99){
        scount += 1
        sec.innerHTML = scount
        mscount = 0
    }
    if(scount === 59){
        mcount += 1
        scount = 0
        sec.innerHTML = scount
        min.innerHTML = mcount
    }
}

startBtn.addEventListener('click', function(event){
    var startMsec = setInterval(myTimer, 10)
    startBtn.disabled = true
    stopBtn.addEventListener('click', function(e){
        clearInterval(startMsec)
        startBtn.disabled = false
    })
    lapsBtn.disabled = false
})

resetBtn.addEventListener('click', function(e){
    mcount = 0
    scount = 0
    mscount = 0
    min.innerHTML = 0
    sec.innerHTML = 0
    msec.innerHTML = 0
    laps.innerHTML = ''
})

let lapsBtn = document.getElementById('lapsbtn')
let laps = document.getElementById('laps')

lapsBtn.disabled = true

lapsBtn.addEventListener('click', function(ev){
    let result = `${mcount} : ${scount} : ${mscount}`
    let li = document.createElement('li', result)
    li.setAttribute('name', 'items')
    li.innerHTML = result
    laps.appendChild(li)
})