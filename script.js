
let configData = {
    "home_logo": "",
    "away_logo": "",
    "timer_property": "",
    "home": "",
    "away": "",
    "home_color": "",
    "away_color": "",
    "home_Goals": "",
    "away_Goals": "",
    "home_text_color": "",
    "away_text_color": "",
    "score_text_color": "",
    "score_background_color": "",
    "timer_text_color": "",
    "timer_background_color": "",
    "sTimeMin": "",
    "sTimeHour": ""
}

function updateConfig(newData) {
    configData = { ...configData, ...newData };
    console.log(configData)
}


let start = document.getElementById('sBtn')
let reset = document.getElementById('rBtn')
let stopp = document.getElementById('spBtn')
let coppy = document.getElementById('cBtn')
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
let tStartHour = null;
let tStartMin = null;
let aRun = false;


function minsetter() {
    min = document.getElementById('timMin').value
    updateConfig({ minute: document.getElementById('timMin').value });
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
    updateConfig({ second: document.getElementById('timSec').value });
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
    updateConfig({ home: document.getElementById('hName').value.toUpperCase() });
}

function asetter() {
    let AAA = document.getElementById('aaN')
    AAA.textContent = document.getElementById('aName').value.toUpperCase()
    updateConfig({ away: document.getElementById('aName').value.toUpperCase() });
}

function hCSetter() {
    let clrdivH = document.getElementById('ttttimer')
    clrdivH.style.color = document.getElementById('hColor').value
    updateConfig({ timer_text_color: document.getElementById('hColor').value });
}

function aCSetter() {
    let clrdivA = document.getElementById('ttttimer')
    clrdivA.style.backgroundColor = document.getElementById('aColor').value
    updateConfig({ timer_background_color: document.getElementById('aColor').value });
}

function hLSetter() {
    acoloro = document.getElementById('hclc')
    acoloro.style.backgroundColor = document.getElementById('hLogo').value
    updateConfig({ home_color: document.getElementById('hLogo').value });
}

function aLSetter() {
    hcoloro = document.getElementById('aclc')
    hcoloro.style.backgroundColor = document.getElementById('aLogo').value
    updateConfig({ away_color: document.getElementById('aLogo').value });
}

function hgsetter() {
    document.getElementById('hg').textContent = document.getElementById('hGoal').value
    updateConfig({ home_goal: document.getElementById('hGoal').value });
}

function agsetter() {
    document.getElementById('ag').textContent = document.getElementById('aGoal').value
    updateConfig({ away_goal: document.getElementById('aGoal').value });
}


function autoHoursetter() {
    aHour = document.getElementById('autoHour').value
    updateConfig({ sTimeHour: document.getElementById('autoHour').value });
    tStartHour = Number(aHour)
    if (tStartHour !== null && tStartMin !== null && !isRunning && !aRun) {
        ajC = setInterval(astr, 15000)
        aRun = true
    }
}

function autoMinsetter() {
    aMin = document.getElementById('autoMin').value
    updateConfig({ sTimeMin: document.getElementById('autoMin').value });
    tStartMin = Number(aMin)
    if (tStartHour !== null && tStartMin !== null && !isRunning && !aRun) {
        ajC = setInterval(astr, 15000)
        aRun = true
    }
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

coppy.onclick = function generateShareableLink() {
    const configString = encodeURIComponent(JSON.stringify(configData));
    const shareableLink = `${window.location.origin}${window.location.pathname}?config=${configString}`;

    navigator.clipboard.writeText(shareableLink)
        .then(() => {
            console.log("copied")
        })
        .catch(err => {
            console.error("Failed to copy link:", err);
        });
}

document.getElementById('timMin').addEventListener("input", minsetter)
document.getElementById('timSec').addEventListener("input", secsetter)
document.getElementById('autoMin').addEventListener("input", autoMinsetter)
document.getElementById('autoHour').addEventListener("input", autoHoursetter)
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

function astr() {
    console.log("15 Sec Interval")
    now = new Date();
    console.log(now.getHours())
    console.log(now.getMinutes())
    if (now.getHours() === tStartHour && now.getMinutes() >= tStartMin) {
        starttimer()
        console.log("Auto Started")
        if (now.getMinutes() > tStartMin) {
            min = now.getMinutes() - tStartMin;
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
            exx.textContent = '+8';
            exx.style.visibility = 'visible';
            isRunning = false;
            let tt = clearInterval(fClera)
        }
    }

}



function presetter() {

    if (configData.home) {
        let HHH = document.getElementById('hhN');
        HHH.textContent = configData.home.toUpperCase();
    }

    if (configData.away) {
        let AAA = document.getElementById('aaN');
        AAA.textContent = configData.away.toUpperCase();
    }

    if (configData.home_color) {
        let clrdivH = document.getElementById('hclc')
        let imgbackD = document.getElementById('imgBackH')
        clrdivH.style.backgroundColor = configData.home_color;
    }

    if (configData.away_color) {
        let clrdivA = document.getElementById('aclc')
        let imgbackC = document.getElementById('imgBackA')
        clrdivA.style.backgroundColor = configData.away_color;
    }
    if (configData.home_goal) {
        let hghg = document.getElementById('hg')
        hghg.textContent = Number(configData.home_goal);
    }
    if (configData.away_goal) {
        let agag = document.getElementById('ag')
        agag.textContent = Number(configData.away_goal);
    }
    if (configData.timer_text_color) {
        let HHHC = document.getElementById('ttttimer')
        HHHC.style.color = configData.timer_text_color;
    }

    if (configData.timer_background_color) {
        let AAAC = document.getElementById('ttttimer')
        AAAC.style.backgroundColor = configData.timer_background_color;
    }

    if (configData.sTimeHour) {
        tStartHour = Number(configData.sTimeHour)
        console.log(tStartHour)
    }

    if (configData.sTimeMin) {
        tStartMin = Number(configData.sTimeMin)
        ajC = setInterval(astr, 15000)
        aRun = true
    }

    if (configData.minute) {

        min = configData.minute
        min = Number(min)

        if (sec < 10 && min < 10) {
            clockk.textContent = '0' + min + ':' + '0' + sec;
        }
        if (min < 10 && sec > 9) {
            clockk.textContent = '0' + min + ':' + sec;
        }
        if (min > 9 && sec < 10) {
            clockk.textContent = min + ':' + '0' + sec;
        }
        if (sec > 9 && min > 9) {
            clockk.textContent = min + ':' + sec;
        }
    }

    if (configData.second) {

        sec = configData.second
        sec = Number(sec);

        if (sec > 59) {
            document.getElementById('timSec').value = null
            sec = 0
            min++
        }
        if (sec < 10 && min < 10) {
            clockk.textContent = '0' + min + ':' + '0' + sec;
        }
        if (min < 10 && sec > 9) {
            clockk.textContent = '0' + min + ':' + sec;
        }
        if (min > 9 && sec < 10) {
            clockk.textContent = min + ':' + '0' + sec;
        }
        if (sec > 9 && min > 9) {
            clockk.textContent = min + ':' + sec;
        }
    }

    if (configData.timer_property == "start") {
        let spend_time = Date.now() - configData.clock_start_time
        converttime(spend_time)
        starttimer();
    }

    if (configData.timer_property == "stop") {
        stopTimerr()
    }

    if (configData.timer_property == "reset") {
        resetbutt()
    }

}

start.onclick = function starttimer() {
    if (!isRunning) {
        fClera = setInterval(ttemer, 1000)
        updateConfig({ timer_property: "start" });
        updateConfig({ clock_start_time: Date.now() });
    }
    isRunning = true
}

function resetbutt() {

    clearInterval(fClera)
    exx.style.visibility = 'hidden'
    min = 0;
    sec = 0;
    clockk.textContent = '00:00';

    if (isRunning) {
        fClera = setInterval(ttemer, 1000);
    }

    document.getElementById('timSec').value = null
    document.getElementById('timMin').value = null
}

function stopTimerr() {
    isRunning = false;
    clearInterval(fClera)
}

function starttimer() {
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
    clockk.textContent = '00:00';
    if (isRunning) {
        fClera = setInterval(ttemer, 1000);
    }

    document.getElementById('timSec').value = null
    document.getElementById('timMin').value = null
}

stopp.onclick = function stopTimerr() {

    isRunning = false;
    clearInterval(fClera)

    updateConfig({ timer_property: "stop" });

    presetter();
}

function loadConfigFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const configString = urlParams.get("config");
    if (configString) {
        configData = JSON.parse(decodeURIComponent(configString));
    }
}

loadConfigFromURL();


presetter();
