let a;
let date;
let time;
setInterval(() => {
a = new Date();
date = a.toLocaleDateString();
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
document.getElementById("time").innerHTML = 'Time ' + time;
document.getElementById("date").innerHTML = 'Date ' +  date;
}, 1000);