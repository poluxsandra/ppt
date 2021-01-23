//Apresentação

alert("Oi, me chamo Guth, vamos jogar Pedra, Papel e Tesoura, mas primeiro..")


//Dados do Jogador

let name = prompt("Qual seu nome")


//Prólogo

alert("Entendi. Bem vindo(a) " + name + ". Vamos começar!! É só selecionar o item na próxima tela")


//Guth

let robot = "Guth"
let bag = ["Pedra", "Papel", "Tesoura"]

let item = Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
} 

let player2 = bag.sample();


//Pedra

function rock () {
      if (player2 == "Pedra") {
        document.write("Empate. Você é bom hein..")
      }
      else if (player2 == "Papel") {
        document.write("Papel envolve a Pedra. O vencedor é " + robot + "É.. Parece que eu venci hehe")
      }
      else if (player2 == "Tesoura") {
        document.write("Pedra quebra a Tesoura. O vencedor é " + name + ". Parabéns!!!")
      }
}


//Tesoura

function scis () {
      if (player2 == "Pedra") {
        document.write("Pedra quebra a Tesoura. O vencedor é " + robot + ". É.. Parece que eu venci hehe")
      }
      else if (player2 == "Papel") {
        document.write("Tesoura corta o Papel. O vencedor é " + name + ". Parabéns!!!")
      }
      else if (player2 == "Tesoura") {
        document.write("Empate. Você é bom hein..")
      }
}


//Papel

function paper () {
      if (player2 == "Pedra") {
        document.write("Papel envolve a Pedra. O vencedor é " + name + ". Parabéns!!!")
      }
      else if (player2 == "Papel") {
        document.write("Empate. Você é bom hein..")
      }
      else if (player2 == "Tesoura") {
        document.write("Tesoura corta o Papel. O vencedor é " + robot + ". É.. Parece que eu venci hehe")
      }
}


//Controle

let pedra = document.querySelector('#rock2');
let tesoura = document.querySelector('#scis2');
let papel = document.querySelector('#paper2')

function load() {
pedra.addEventListener("click", rock, false)
tesoura.addEventListener("click", scis, false)
papel.addEventListener("click", paper, false)
}

document.addEventListener("DOMContentLoaded", load, false);
