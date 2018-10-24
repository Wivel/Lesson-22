let id;

function Timer() {
    id = window.setInterval(go, 200);
    document.getElementById('button').disabled = true;
}

function go() {
    let
        number,
        display = document.getElementById('display'),
        Stop = document.getElementById('stop');
    display.innerHTML = parseInt(display.innerHTML) - 1;
    number = +display.innerHTML;
    if (number == 0) {
        window.clearInterval(id);
        Stop.innerHTML = 'Расчёт окончен';
    }
}