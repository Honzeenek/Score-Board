
const homeScoreElement = document.getElementById("home-score")
const guestScoreElement = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function addScore1() {
    homeScore += 1
    homeScoreElement.textContent = homeScore
}

function addScore2() {
    homeScore += 2
    homeScoreElement.textContent = homeScore
}

function addScore3() {
    homeScore += 3
    homeScoreElement.textContent = homeScore
}

function addScoreGst1() {
    guestScore += 1
    guestScoreElement.textContent = guestScore
}

function addScoreGst2() {
    guestScore += 2
    guestScoreElement.textContent = guestScore
}

function addScoreGst3() {
    guestScore += 3
    guestScoreElement.textContent = guestScore
}