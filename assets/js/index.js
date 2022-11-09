var s = 0;
var m = 0;
var h = 0;
var timer = setInterval(counter, 1000);
var sRecord = sessionStorage.getItem("Seconds");
var mRecord = sessionStorage.getItem("Minutes");
var hRecord = sessionStorage.getItem("Hours");

if (sRecord && mRecord && hRecord) {
    s = Number(sRecord);
    m = Number(mRecord);
    h = Number(hRecord);
}

function counter() {

    if (s == 60) {
        s = 0;
        m++;
    } if (m == 60) {
        m = 0;
        h++;
    }
    s++;

    sessionStorage.setItem("Seconds", s);
    sessionStorage.setItem("Minutes", m);
    sessionStorage.setItem("Hours", h);

    document.querySelector(".display-4").innerHTML = `Tempo: ${h} h ${m} m ${s} s`;

}

window.addEventListener("DOMContentLoaded", counter);

var title = document.getElementById('title');
var del = document.getElementById('delet');

login = () => {
    var usr = document.getElementById('usr').value;
    document.getElementById('usr').value = '';
    localStorage.setItem('user', usr);
    title.innerHTML = 'Benvenuto/a ' + usr;
};

delet = () => {
    var usr = document.getElementById('usr').value;
    document.getElementById('usr').value = '';
    localStorage.removeItem('user', usr);
    title.innerHTML = '';
};