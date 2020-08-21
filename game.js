let souls = 0;
let updateSouls = document.getElementById("cheeseCount")
let updateSoulResin = document.getElementById("shovels")
let updateSerpentRing = document.getElementById("cheeseM")
let updateHollowFriend = document.getElementById("mouse")
let updateSolaire = document.getElementById("cheeseF")
let updateSPS = document.getElementById("cps")
let updateHM = document.getElementById("tcm")
let updateSRP = document.getElementById("shovelPrice")
let updateSSRP = document.getElementById("cheeseMachinePrice")
let updateHFP = document.getElementById("mousePrice")
let updateSP = document.getElementById("farmerPrice")


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
  souls++
  if (clickUpgrades.shovels.quantity > 0) {
    souls += (clickUpgrades.shovels.multiplier * clickUpgrades.shovels.quantity)
  }
  if (clickUpgrades.cheeseMachine.quantity > 0) {
    souls += (clickUpgrades.cheeseMachine.multiplier * clickUpgrades.cheeseMachine.quantity)
  }
  update()
}

function update() {
  updateSouls.innerHTML = `
  ${souls.toFixed(0)}
  `
  updateSPS.innerHTML = `
  ${(((automaticUpgrades.mouse.multiplier * automaticUpgrades.mouse.quantity) + (automaticUpgrades.cheeseFarmer.multiplier * automaticUpgrades.cheeseFarmer.quantity)) / 3).toFixed(0)}
  `
  updateHM.innerHTML = `
  ${(clickUpgrades.shovels.multiplier * clickUpgrades.shovels.quantity) + (clickUpgrades.cheeseMachine.multiplier * clickUpgrades.cheeseMachine.quantity)}
  `
}

function buyShovel() {
  if (souls >= clickUpgrades.shovels.price) {
    clickUpgrades.shovels.quantity++
    souls -= clickUpgrades.shovels.price
    clickUpgrades.shovels.price += 8
    updateSoulResin.innerHTML = `
    ${clickUpgrades.shovels.quantity} Resin Strength
    `
    updateSRP.innerHTML = `
    (${clickUpgrades.shovels.price.toFixed(0)} S)
    `
    update()
  }
}

function buyCheeseMachine() {
  if (souls >= clickUpgrades.cheeseMachine.price) {
    clickUpgrades.cheeseMachine.quantity++
    souls -= clickUpgrades.cheeseMachine.price
    clickUpgrades.cheeseMachine.price *= 1.1
    updateSerpentRing.innerHTML = `
    ${clickUpgrades.cheeseMachine.quantity} Silver Serpent Rings
    `
    updateSSRP.innerHTML = `
    (${clickUpgrades.cheeseMachine.price.toFixed(0)} S)
    `
    update()
    console.log(clickUpgrades.cheeseMachine.quantity)
  }
}

function buyMouse() {
  if (souls >= automaticUpgrades.mouse.price) {
    automaticUpgrades.mouse.quantity++
    souls -= automaticUpgrades.mouse.price
    automaticUpgrades.mouse.price *= 1.1
    updateHollowFriend.innerHTML = `
    ${automaticUpgrades.mouse.quantity} Friendly Hollowed
    `
    updateHFP.innerHTML = `
    (${automaticUpgrades.mouse.price.toFixed(0)} S)
    `
    update()
    setInterval(collectAutoUpgrades, 3000)
  }
}

function buyFarmer() {
  if (souls >= automaticUpgrades.cheeseFarmer.price) {
    automaticUpgrades.cheeseFarmer.quantity++
    souls -= automaticUpgrades.cheeseFarmer.price
    automaticUpgrades.cheeseFarmer.price *= 1.1
    updateSolaire.innerHTML = `
    ${automaticUpgrades.cheeseFarmer.quantity} Sun-Praisers
    `
    updateSP.innerHTML = `
    (${automaticUpgrades.cheeseFarmer.price.toFixed(0)} S)
    `
    update()
    setInterval(collectAutoUpgrades, 3000)
  }
}

function collectAutoUpgrades() {
  souls += (automaticUpgrades.mouse.multiplier * automaticUpgrades.mouse.quantity)
  souls += (automaticUpgrades.cheeseFarmer.multiplier * automaticUpgrades.cheeseFarmer.quantity)
  update()
}

function startInterval() {
  setInterval(collectAutoUpgrades, 3000)
}