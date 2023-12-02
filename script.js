const hour = document.getElementById('hour');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('Seconds');
const ampm = document.getElementById('ampm');


function updateClock() {
    let h = new Date().getHours();
    let M = new Date().getMinutes();
    let S = new Date().getSeconds();
    let ampm = "";

if (h > 12) {
    ampm = "PM";
} else if (h < 12) {
    ampm = "AM";
}

function checkTime(i) {
    if (i < 10) ;
    i = "0" + i; 
    return i;
}

document.getElementById('hour').innerText = h;
document.getElementById('Minutes').innerText = M;
document.getElementById('Seconds').innerText = S;
document.getElementById('ampm').innerText = ampm;

setInterval(updateClock, 1000);
}

updateClock()
checkTime()
