function play() {
let result = document.getElementById("result");
let player = document.getElementById("player").value;
let computer = Math.floor(Math.random() * 10);
if (computer <= 3 && computer > 0) {
  computer = "Pierre"
}
else if (computer > 3 && computer <= 6 ){
  computer = "Feuille"
}
else {
  computer = "Ciseaux"
}

console.log(computer);
const win = `Ordinateur a joué ${computer}, vous avez gagné!`;
const loose = `Ordinateur a joué ${computer}, Vous avez perdu!`;

if (computer === player) {
  result.innerHTML = 'Egalité'
  }
  else if (computer === "Pierre") {
    player === "Feuille" ? result.innerHTML = win : result.innerHTML = loose
}

  else if (computer === "Feuille") {
    player ==="Pierre" ? result.innerHTML = loose : result.innerHTML = win
  }
  else  {
    player ==="Pierre" ? result.innerHTML = win : result.innerHTML = loose
  }
}
let button = document.getElementById("button").addEventListener("click", function () {
  return play();
});
