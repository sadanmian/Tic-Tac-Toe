
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, -45]
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Win!!!"
            document.querySelector('.info').style.color = "#0aa214"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
            }
        }
    })
})

// Add onClick Listener to reset
reset.addEventListener('click', () => {
    let boxtextss = document.querySelectorAll('.boxtext')
    Array.from(boxtextss).forEach((element) => {
        element.innerText = ''
    })
    turn = 'X'
    isgameover = false
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0"
    document.querySelector('.line').style.width = "0vw";
    document.querySelector('.info').style.color = "brown"
})
