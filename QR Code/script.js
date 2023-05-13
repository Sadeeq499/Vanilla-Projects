var btn = document.querySelector('.btn');
btn.addEventListener('click',myfun);

function myfun(){
    img = document.querySelector('.QR-code');
    img.style = "opacity : 1"; 
    img.style.pointerEvents = "auto";
}