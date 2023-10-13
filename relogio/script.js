//Calendar

const toDay = document.getElementById('todayDay');
const toMonth = document.getElementById('todayMonth');
const toYars = document.getElementById('dayYears');

//Clock

const today = document.getElementById('date');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let date = new Date()

    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    let h = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m

    if (h < 10) h = '0' + h;
    if (min < 10) min = '0' + min;
    if (sec <10) sec = '0' + sec;

    toDay.textContent = d;
    toMonth.textContent = m;
    toYars.textContent = y
    
    hours.textContent = h;
    minutes.textContent = min;
    seconds.textContent = sec;
})
