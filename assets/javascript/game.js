
//Define initial variables
let wins = 0
let losses = 0
let target = Math.floor(Math.random() * 100 + 40)
let score = 0
let crystalA = Math.floor(Math.random() * 12)
let crystalB = Math.floor(Math.random() * 12)
let crystalC = Math.floor(Math.random() * 12)
let crystalD = Math.floor(Math.random() * 12)

//New Game
const restart = function(){
  score = 0
  target = Math.floor(Math.random() * 100 + 40)
  document.getElementById("target").textContent=`Target Score: ${target}`
  document.getElementById("wins").textContent=`Wins: ${wins}`
  document.getElementById("losses").textContent=`Losses: ${losses}`
  document.getElementById("score").textContent=`Your total score is: ${score}`
  crystalA = Math.floor(Math.random() * 12)
  crystalB = Math.floor(Math.random() * 12)
  crystalC = Math.floor(Math.random() * 12)
  crystalD = Math.floor(Math.random() * 12)
}
restart()
  document.getElementById("crystalA").addEventListener("click", function(){
    score = score + crystalA
    document.getElementById("score").textContent=`Your total score is: ${score}`
    if (score === target) {
      alert("You win!")
      wins = wins + 1
      restart()
    } else if (score > target) {
      alert("You lose!")
      losses = losses + 1
      restart ()
    }
  });
  document.getElementById("crystalB").addEventListener("click", function(){
    score = score + crystalB
    document.getElementById("score").textContent=`Your total score is: ${score}`
    if (score === target) {
      alert("You win!")
      wins = wins + 1
      restart()
    } else if (score > target) {
      alert("You lose!")
      losses = losses + 1
      restart ()
    }
  });
  document.getElementById("crystalC").addEventListener("click", function(){
    score = score + crystalC
    document.getElementById("score").textContent=`Your total score is: ${score}`
    if (score === target) {
      alert("You win!")
      wins = wins + 1
      restart()
    } else if (score > target) {
      alert("You lose!")
      losses = losses + 1
      restart ()
    }
  });
  document.getElementById("crystalD").addEventListener("click", function(){
    score = score + crystalD
    document.getElementById("score").textContent=`Your total score is: ${score}`
    if (score === target) {
      alert("You win!")
      wins = wins + 1
      restart()
    } else if (score > target) {
      alert("You lose!")
      losses = losses + 1
      restart ()
    }
  });
