function addFriends(num) {
  var names = [];
  for (let x = 0; x < num; x++) {
    var aName = prompt(`Enter Name ${x+1}:`);
    names.push(aName);
  }
  alert("Let's find out who is going to pay today.");
  alert(whosPaying(names));
}

function whosPaying(names) {
  var i = Math.random();
  i = i *names.length;
  i = Math.floor(i);
  console.log(i);
  return (names[i] + " is going to buy lunch today!");
}

var tableFor = prompt("How many people are in your party?");
addFriends(tableFor);

