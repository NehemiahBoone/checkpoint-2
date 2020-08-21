let cheese = 0;
let updateCheese = document.getElementById("cheeseCount")
let updateShovels = document.getElementById("shovels")
let updateCheeseMachine = document.getElementById("cheeseM")
let updateMice = document.getElementById("mouse")
let updateFarmers = document.getElementById("cheeseF")
let updateCPS = document.getElementById("cps")
let updateTCM = document.getElementById("tcm")
let updateSP = document.getElementById("shovelPrice")
let updateCMP = document.getElementById("cheeseMachinePrice")
let updateMP = document.getElementById("mousePrice")
let updateFP = document.getElementById("farmerPrice")


let clickUpgrades = {
  shovels: {
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  cheeseMachine: {
    price: 300,
    quantity: 0,
    multiplier: 20
  }
}

let automaticUpgrades = {
  mouse: {
    price: 600,
    quantity: 0,
    multiplier: 15
  },
  cheeseFarmer: {
    price: 2000,
    quantity: 0,
    multiplier: 100
  }
}
let mouseArg = automaticUpgrades.mouse
let farmerArg = automaticUpgrades.cheeseFarmer


function mine() {
  cheese++
  if (clickUpgrades.shovels.quantity > 0) {
    cheese += (clickUpgrades.shovels.multiplier * clickUpgrades.shovels.quantity)
  }
  if (clickUpgrades.cheeseMachine.quantity > 0) {
    cheese += (clickUpgrades.cheeseMachine.multiplier * clickUpgrades.cheeseMachine.quantity)
  }
  update()
}

function update() {
  updateCheese.innerHTML = `
  ${cheese.toFixed(0)}
  `
  updateCPS.innerHTML = `
  ${(((automaticUpgrades.mouse.multiplier * automaticUpgrades.mouse.quantity) + (automaticUpgrades.cheeseFarmer.multiplier * automaticUpgrades.cheeseFarmer.quantity)) / 3).toFixed(0)}
  `
  updateTCM.innerHTML = `
  ${(clickUpgrades.shovels.multiplier * clickUpgrades.shovels.quantity) + (clickUpgrades.cheeseMachine.multiplier * clickUpgrades.cheeseMachine.quantity)}
  `
}

function buyShovel() {
  if (cheese >= clickUpgrades.shovels.price) {
    clickUpgrades.shovels.quantity++
    cheese -= clickUpgrades.shovels.price
    clickUpgrades.shovels.price += 8
    updateShovels.innerHTML = `
    ${clickUpgrades.shovels.quantity} Shovels
    `
    updateSP.innerHTML = `
    (${clickUpgrades.shovels.price.toFixed(0)}C)
    `
    update()
  }
}

function buyCheeseMachine() {
  if (cheese >= clickUpgrades.cheeseMachine.price) {
    clickUpgrades.cheeseMachine.quantity++
    cheese -= clickUpgrades.cheeseMachine.price
    clickUpgrades.cheeseMachine.price *= 1.1
    updateCheeseMachine.innerHTML = `
    ${clickUpgrades.cheeseMachine.quantity} Cheese Machines
    `
    updateCMP.innerHTML = `
    (${clickUpgrades.cheeseMachine.price.toFixed(0)}C)
    `
    update()
    console.log(clickUpgrades.cheeseMachine.quantity)
  }
}

function buyMouse() {
  if (cheese >= automaticUpgrades.mouse.price) {
    automaticUpgrades.mouse.quantity++
    cheese -= automaticUpgrades.mouse.price
    automaticUpgrades.mouse.price *= 1.1
    updateMice.innerHTML = `
    ${automaticUpgrades.mouse.quantity} Mice
    `
    updateMP.innerHTML = `
    (${automaticUpgrades.mouse.price.toFixed(0)}C)
    `
    update()
    setInterval(collectAutoUpgrades, 3000)
  }
}

function buyFarmer() {
  if (cheese >= automaticUpgrades.cheeseFarmer.price) {
    automaticUpgrades.cheeseFarmer.quantity++
    cheese -= automaticUpgrades.cheeseFarmer.price
    automaticUpgrades.cheeseFarmer.price *= 1.1
    updateFarmers.innerHTML = `
    ${automaticUpgrades.cheeseFarmer.quantity} Farmers
    `
    updateFP.innerHTML = `
    (${automaticUpgrades.cheeseFarmer.price.toFixed(0)}C)
    `
    update()
    setInterval(collectAutoUpgrades, 3000)
  }
}

function collectAutoUpgrades() {
  cheese += (automaticUpgrades.mouse.multiplier * automaticUpgrades.mouse.quantity)
  cheese += (automaticUpgrades.cheeseFarmer.multiplier * automaticUpgrades.cheeseFarmer.quantity)
  update()
}

function startInterval() {
  setInterval(collectAutoUpgrades, 3000)
}