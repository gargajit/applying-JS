var guestList = ["Messi", "Ronaldo", "Modric", "Bellingham", "Mainoo", "Kroos", "Musiala"];

var guest = prompt("Enter your name:");
if (guestList.includes(guest)) {
  alert("Welcome to the club, " + guest + "!");
} else {
  alert("Sorry, you are not invited.");
}
