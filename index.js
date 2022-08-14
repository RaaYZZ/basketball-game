let scoreH = document.getElementById("scoreh")
let scoreG = document.getElementById("scoreg")
let countH = 0
let countG = 0

function increment1h() {
    countH += 1
    scoreH.textContent = countH

}

function increment2h() {
    countH += 2
    scoreH.textContent = countH
}

function increment3h() {
    countH += 3
    scoreH.textContent = countH
}

function increment1g() {
    countG += 1
    scoreG.textContent = countG

}

function increment2g() {
    countG += 2
    scoreG.textContent = countG

}

function increment3g() {
    countG += 3
    scoreG.textContent = countG

}

function cleaR() {
    countG = 0
    countH = 0
    scoreH.textContent = 0
    scoreG.textContent = 0

}