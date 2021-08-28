const ftrDate = '1 Jan 2022';

function countdown() {
    const currentDate = new Date();
    const futureDate = new Date(ftrDate);
    let delta = (futureDate - currentDate) / 1000;

    // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;
    // calculate (and subtract) whole hours
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    // calculate (and subtract) whole minutes
    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    // what's left is seconds
    const seconds = Math.floor(delta % 60);  // in theory the modulus is not required
    console.log(days, hours, minutes, seconds);
    changeTimer(days, hours, minutes, seconds);
}

const changeTimer = (d, h, m, s) => {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    days.innerText = (d >= 10)?d:'0'+d;
    // days.innerText = d;

    hours.innerText = (h >= 10)?h:'0'+h;
    minutes.innerText = (m >= 10)?m:'0'+m;
    seconds.innerText = (s >= 10)?s:'0'+s;
}


countdown();

setInterval(countdown, 1000);


