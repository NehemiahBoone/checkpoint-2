let cheese = 0;
let updateCheese = document.getElementById("cheeseCount")
let updateShovels = document.getElementById("shovels")
let clickUpgrades = {
  shovels: {
    price: 50,
    quantity: 0,
    multiplier: 1
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
    console.log(clickUpgrades.shovels.quantity)
  }
}