const btn = document.querySelector('.button2');
const dropMenu = document.querySelector('.dropmenu');
function myfunction(params) {
    if (dropMenu.style.display == 'none') {
        dropMenu.style.display = 'block'
    } else {
        dropMenu.style.display = 'none'
    }
}

btn.addEventListener('click', myfunction);