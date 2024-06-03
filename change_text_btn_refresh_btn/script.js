function defaultParagraph() {
    const para = document.getElementById("demo").innerHTML = "Default"
}

function changeParagraph() {
    const para = document.getElementById("demo").innerHTML = "Text changed using JS";  
}


const button1 = document.getElementById("change-text")

button1.addEventListener("click", changeParagraph);


const button2 = document.getElementById("toggle-btn")

button2.addEventListener("click", defaultParagraph)
