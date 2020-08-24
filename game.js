let souls = 0
let auto = 0
let updateSouls = document.getElementById("soulCount")
let updateSoulResin = document.getElementById("soulR")
let updateSerpentRing = document.getElementById("serpentR")
let updateHollowFriend = document.getElementById("hollow")
let updateSolaire = document.getElementById("solaire")
let updateSPS = document.getElementById("sps")
let updateHM = document.getElementById("hm")
let updateSRP = document.getElementById("soulResinPrice")
let updateSSRP = document.getElementById("silverSerpentRingPrice")
let updateHFP = document.getElementById("summonPlayerPrice")
let updateSP = document.getElementById("summonSolairePrice")

//NOTE FIX OBJECT ELEMENT NAMES
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


function hit() {
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

function buySoulResin() {
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

function buySilverSerpentRing() {
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

function summonPlayer() {
  if (souls >= automaticUpgrades.mouse.price) {
    automaticUpgrades.mouse.quantity++
    auto += automaticUpgrades.mouse.multiplier
    souls -= automaticUpgrades.mouse.price
    automaticUpgrades.mouse.price *= 1.1
    updateHollowFriend.innerHTML = `
    ${automaticUpgrades.mouse.quantity} Friendly Hollowed
    `
    updateHFP.innerHTML = `
    (${automaticUpgrades.mouse.price.toFixed(0)} S)
    `
    update()
  }
}

function summonSolaire() {
  if (souls >= automaticUpgrades.cheeseFarmer.price) {
    automaticUpgrades.cheeseFarmer.quantity++
    auto += automaticUpgrades.cheeseFarmer.multiplier
    souls -= automaticUpgrades.cheeseFarmer.price
    automaticUpgrades.cheeseFarmer.price *= 1.1
    updateSolaire.innerHTML = `
    ${automaticUpgrades.cheeseFarmer.quantity} Sun-Praisers
    `
    updateSP.innerHTML = `
    (${automaticUpgrades.cheeseFarmer.price.toFixed(0)} S)
    `
    update()
  }
}

function collectAutoUpgrades() {
  souls += auto
  update()
}

function startInterval() {
  setInterval(collectAutoUpgrades, 3000)
}
startInterval()