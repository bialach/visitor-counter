let resetEl = document.getElementById("reset-el")
let visitorEl = document.getElementById("visitor-el")
let count = 0

function visitor() {
    count += 1
    visitorEl.textContent = count
}

function reset() {
    let countStr = count + " - "
    resetEl.textContent += countStr
    visitorEl.textContent = 0
    count = 0
}