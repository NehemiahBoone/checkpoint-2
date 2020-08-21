let cheese = 0;
let updateCheese = document.getElementById("cheeseCount")
let updateShovels = document.getElementById("shovels")
let updateCheeseMachine = document.getElementById("cheeseM")


let clickUpgrades = {
  shovels: {
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  cheeseMachine: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
}

let automaticUpgrades = {
  cheeseMouse: {
    price: 500,
    quantity: 0,
    multiplier: 2
  }
}


function mine() {
  cheese++
  if (clickUpgrades.shovels.quantity > 0) {
    cheese += clickUpgrades.shovels.multiplier * clickUpgrades.shovels.quantity
  }
  if (clickUpgrades.cheeseMachine.quantity > 0) {
    cheese += clickUpgrades.cheeseMachine.multiplier * clickUpgrades.cheeseMachine.quantity
  }
  update()
}

function update() {
  updateCheese.innerHTML = `
  ${cheese}
  `
}

function buyShovel() {
  if (cheese >= clickUpgrades.shovels.price) {
    clickUpgrades.shovels.quantity++
    cheese -= clickUpgrades.shovels.price
    updateShovels.innerHTML = `
    ${clickUpgrades.shovels.quantity} Shovels
    `
    update()
  }
}

function buyCheeseMachine() {
  if (cheese >= clickUpgrades.cheeseMachine.price) {
    clickUpgrades.cheeseMachine.quantity++
    cheese -= clickUpgrades.cheeseMachine.price
    updateCheeseMachine.innerHTML = `
    ${clickUpgrades.cheeseMachine.quantity} Cheese Machines
    `
    update()
    console.log(clickUpgrades.cheeseMachine.quantity)
  }
}