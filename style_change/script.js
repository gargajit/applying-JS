function makeDangerous() {
    document.getElementById('heading').style.color = 'red';
    document.getElementById('heading').textContent = 'Can you make me look dangerous and ANGRY?';
}

function makeAngry() {
    document.getElementById('heading').style.textTransform = 'uppercase';
}

const btn1 = document.getElementById('btn-1');
btn1.addEventListener("click", makeDangerous);

const btn2 = document.getElementById('btn-2');
btn2.addEventListener("click", makeAngry);
