
function Clock() {
    let
        elem            = document.getElementById('display'),
        now             = new Date();
        elem.innerHTML  = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
        Clock();
}

function Timer() {
    window.setInterval(Clock,1000);
}