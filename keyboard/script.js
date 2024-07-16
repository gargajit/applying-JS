var key_btn = document.querySelectorAll(".keyboard_btn").length;
for (var i = 0; i < key_btn; i++) {

    document.querySelectorAll(".keyboard_btn")[i].addEventListener("click", function() {
        console.log(this.innerHTML);
    });



}

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    console.log(event.keyCode);
});


function anotherAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keydown",
        key: "a",
        keyCode: 100,
        duration: 2
    }

    if(eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

document.anotherAddEventListener("keydown", function(event){
    console.log(event.key);
    console.log(event.keyCode);
});
