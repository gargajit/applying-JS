var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "red";

        setTimeout(function() {
            document.querySelector("h1").style.color = "black";
        }, 300);
    });
}
