function getMilk(money, costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of Milk.");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, costPerBottle);
}


function calcBottles(money, costPerBottle) {
  var numberOfBottles = Math.floor(money / costPerBottle);
  return numberOfBottles;
}

function calcChange(money, costPerBottle) {
  var change = money % costPerBottle;
  return change;
}

console.log("Hello Master, here is your " + getMilk(4, 1.5) + " change.");

