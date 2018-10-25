let
    arr_img = ['img/1_smile.png', 'img/2_smile.png', 'img/3_smile.png',
        'img/4_smile.png', 'img/5_smile.png'],
    id;

function carousel() {
    id = window.setInterval(swap_img, 1000);
}
function stop_car() {
    window.clearInterval(id);
}
function swap_img() {
    let
        img1 = document.getElementById('img1'),
        img2 = document.getElementById('img2'),
        img3 = document.getElementById('img3'),
        img4 = document.getElementById('img4'),
        img5 = document.getElementById('img5'),
        buffer;
    buffer = img5.src;
    img5.src = img4.src;
    img4.src = img3.src;
    img3.src = img2.src;
    img2.src = img1.src;
    img1.src = buffer;
}

