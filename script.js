let start = document.getElementById('sBtn')
let reset = document.getElementById('rBtn')
let stopp = document.getElementById('spBtn')
let exx = document.getElementById('exxt')
let clockk = document.getElementById('ttttimer')
let cdiv = document.getElementById('adiv')

let fClera = null
let isRunning = false
let sec = 0;
let min = 0;
let temp = false
let hTOver = false;
let aT = true

function minsetter() {
    min = document.getElementById('timMin').value
    min = Number(min)

    if (sec < 10) {
        clockk.textContent = min + ':' + '0' + sec;
    }
    if (min < 10 && sec > 9) {
        clockk.textContent = '0' + min + ':' + sec;
    }
    if (sec < 10) {
        clockk.textContent = min + ':' + '0' + sec;
    }
    if (sec > 9 && min > 9) {
        clockk.textContent = min + ':' + sec;
    }
}

function secsetter() {
    sec = document.getElementById('timSec').value
    sec = Number(sec);

    if (sec > 59) {
        document.getElementById('timSec').value = null
        sec = 0
        min++
    }
    if (sec < 10) {
        clockk.textContent = min + ':' + '0' + sec;
    }
    if (min < 10 && sec > 9) {
        clockk.textContent = min + ':' + sec;
    }
    if (sec < 10) {
        clockk.textContent = min + ':' + '0' + sec;
    }
    if (sec > 9 && min > 9) {
        clockk.textContent = min + ':' + sec;
    }
}

function hsetter() {
    let HHH = document.getElementById('hhN')
    HHH.textContent = document.getElementById('hName').value.toUpperCase()
}

function asetter() {
    let AAA = document.getElementById('aaN')
    AAA.textContent = document.getElementById('aName').value.toUpperCase()
}

function hCSetter() {
    let clrdivH = document.getElementById('ttttimer')
    clrdivH.style.color = document.getElementById('hColor').value
}

function aCSetter() {
    let clrdivA = document.getElementById('ttttimer')
    clrdivA.style.backgroundColor = document.getElementById('aColor').value
}

function hLSetter() {
    acoloro = document.getElementById('hclc')
    acoloro.style.backgroundColor = document.getElementById('hLogo').value
}

function aLSetter() {
    hcoloro = document.getElementById('aclc')
    hcoloro.style.backgroundColor = document.getElementById('aLogo').value
}

function hgsetter() {
    document.getElementById('hg').textContent = document.getElementById('hGoal').value
}

function agsetter() {
    document.getElementById('ag').textContent = document.getElementById('aGoal').value
}


function autooS() {
    if (aT) {
        aT = false
        cdiv.style.backgroundColor = 'grey'
        cdiv.style.justifyContent = 'left'
    }
    else {
        aT = true
        cdiv.style.backgroundColor = 'rgb(56, 232, 255)'
        cdiv.style.justifyContent = 'right'
    }

}

document.getElementById('timMin').addEventListener("input", minsetter)
document.getElementById('timSec').addEventListener("input", secsetter)
document.getElementById('hName').addEventListener("input", hsetter)
document.getElementById('aName').addEventListener("input", asetter)
document.getElementById('hGoal').addEventListener("input", hgsetter)
document.getElementById('aGoal').addEventListener("input", agsetter)
document.getElementById('hColor').addEventListener("input", hCSetter)
document.getElementById('aColor').addEventListener("input", aCSetter)
document.getElementById('hLogo').addEventListener("input", hLSetter)
document.getElementById('aLogo').addEventListener("input", aLSetter)
document.getElementById('autoSwitcher').addEventListener("click", autooS)

async function checker() {
    if (!temp) {
        puranatime = Date.now() / (1000 * 60);
    }

    temp = true;

    while (!hTOver) {

        await new Promise(r => setTimeout(r, 30000));

        if (Math.round((Date.now() / (1000 * 60)) - puranatime) >= 19) {

            exx.style.visibility = 'hidden';

            if (!isRunning) {
                fClera = setInterval(ttemer, 1000);
            }

            isRunning = true;
            hTOver = true;

        }
    }
}

function ttemer() {
    if (isRunning) {

        sec++

        if (sec >= 60) {
            sec = 0;
            min++;
        }

        document.getElementById('timSec').value = sec
        document.getElementById('timMin').value = min

        if (sec < 10 && min < 10) {
            clockk.textContent = min + ':' + '0' + sec;
        }
        if (min < 10 && sec > 9) {
            clockk.textContent = min + ':' + sec;
        }
        if (min > 9 && sec < 10) {
            clockk.textContent = min + ':' + '0' + sec;
        }
        if (sec > 9 && min > 9) {
            clockk.textContent = min + ':' + sec;
        }
        if (min == 45 && sec == 0 && aT) {
            exx.style.visibility = 'visible';
            isRunning = false;
            let tt = clearInterval(fClera)
            checker();
        }
        if (min == 90 && sec == 0 && aT) {
            exx.textContent = '+8 MINS';
            exx.style.visibility = 'visible';
            isRunning = false;
            let tt = clearInterval(fClera)
        }
    }

}

start.onclick = function () {
    if (!isRunning) {
        fClera = setInterval(ttemer, 1000)
    }
    isRunning = true
}

rBtn.onclick = function () {
    clearInterval(fClera)
    exx.style.visibility = 'hidden'
    min = 0;
    sec = 0;
    clockk.textContent = '0:00';
    if (isRunning) {
        fClera = setInterval(ttemer, 1000);
    }
    document.getElementById('timSec').value = null
    document.getElementById('timMin').value = null
}

stopp.onclick = function stopTimerr() {
    isRunning = false;
    clearInterval(fClera)
}