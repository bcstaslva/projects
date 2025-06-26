let scoreHome = 0
let scoreGuess = 0

let textScoreHome = document.getElementById("score-home")
let textScoreGuess = document.getElementById("score-guess")

let buttonIncrementOneHome = document.getElementById("button-increment-one-home")
let buttonIncrementOneGuess = document.getElementById("button-increment-one-guess")

buttonIncrementOneHome.addEventListener("click", () => {
    scoreHome += 1
    textScoreHome.textContent = scoreHome
})

buttonIncrementOneGuess.addEventListener("click", () => {
    scoreGuess += 1
    textScoreGuess.textContent = scoreGuess
})

let buttonIncrementTwoHome = document.getElementById("button-increment-two-home")
let buttonIncrementTwoGuess = document.getElementById("button-increment-two-guess")

buttonIncrementTwoHome.addEventListener("click", () => {
    scoreHome += 2
    textScoreHome.textContent = scoreHome
})

buttonIncrementTwoGuess.addEventListener("click", () => {
    scoreGuess += 2
    textScoreGuess.textContent = scoreGuess
})

let buttonIncrementThreeHome = document.getElementById("button-increment-three-home")
let buttonIncrementThreeGuess = document.getElementById("button-increment-three-guess")

buttonIncrementThreeHome.addEventListener("click", () => {
    scoreHome += 3
    textScoreHome.textContent = scoreHome
})

buttonIncrementThreeGuess.addEventListener("click", () => {
    scoreGuess += 3
    textScoreGuess.textContent = scoreGuess
})
