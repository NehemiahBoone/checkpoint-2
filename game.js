let cheese = 0;
let updateCheese = document.getElementById("cheeseCount")


function mine() {
  cheese++

  update()
}

function update() {
  updateCheese.innerHTML = `
  ${cheese}
  `
}