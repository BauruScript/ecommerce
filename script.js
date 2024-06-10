const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.querySelector('.navbar');
const product = document.querySelector('.pro-container');

let mainImg = document.getElementById("main-img");
let smallImg = document.getElementsByClassName("small-img");

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
} 

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


const updateMainImg = function(e) {
    let tempSrc = mainImg.src;
    mainImg.src = smallImg[e].src;
    smallImg[e].src = tempSrc;
}

for(let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        updateMainImg(i);
    }
}

product.onclick = function() {
    window.location.href = "sproduct.html"
}