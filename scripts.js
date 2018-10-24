
let Timmer_ID;
function DoIt() {
    let elem = document.getElementById('display');
   elem.innerHTML = parseInt(elem.innerHTML)+1;
}
function Timer() {
    Timmer_ID       = window.setInterval(DoIt,1000);
    let elem        = document.getElementById('button'),
    elem_stop       = document.getElementById('Stop_button');
    elem.disabled       = true;
    elem_stop.disabled  = false;
}

function StopTimer() {
    window.clearInterval(Timmer_ID);
    let elem        = document.getElementById('button'),
        elem_stop       = document.getElementById('Stop_button');
    elem.disabled       = false;
    elem_stop.disabled  = true;
}