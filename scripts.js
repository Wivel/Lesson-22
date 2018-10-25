let
    arr_img = ['img/1_smile.png', 'img/2_smile.png', 'img/3_smile.png',
        'img/4_smile.png', 'img/5_smile.png'];

function carousel() {
    window.setInterval(swap_img, 1000);
}

function swap_img() {
    let
        img1 = document.getElementById('img1'),
        img2 = document.getElementById('img2'),
        img3 = document.getElementById('img3'),
        buffer;
    buffer = img3.src;
    img3.src = img2.src;
    img2.src = img1.src;
    img1.src = buffer;
}

