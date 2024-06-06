function moveIt() {
    let id = null;
    const x = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            x.style.top = pos + "px";
            x.style.left = pos + "px";
        }
    }
}
