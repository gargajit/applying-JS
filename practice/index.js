var data = document.querySelector('ul').lastElementChild;
data.innerHTML = 'Suiiiiiii';


function changeBackground() {
    document.querySelector('body').classList.toggle('change_bg_color');
    document.querySelector('h1').classList.toggle('huge');
}


document.addEventListener("click", changeBackground);
