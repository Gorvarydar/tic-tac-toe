const area = document.getElementById("area");
const restartBtn = document.getElementById("restart")
let step = 0;
let who = ''

const reload = () => {
    document.location.reload()
    
}

restartBtn.addEventListener("click", reload)

area.addEventListener('click', e => {
    if(e.target.className ='cell') {
        step % 2 === 0 ? e.target.textContent = "X" : e.target.innerHTML = "O"
        step ++
        whoWin()

    }
})

const whoWin =()=> {
    const slots = document.getElementsByClassName('cell')
   if(slots[0].innerHTML = "X" || slots[1].innerHTML ) {console.log('fuck you')}
    const winSlots = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const finalResult = (win) => {
        alert('and The winner is ..' + win + ' !')
    }

    for(i = 0; i < winSlots.length; i++) {
        if(slots[winSlots[i][0]].innerHTML == "X" && slots[winSlots[i][1]].innerHTML == "X" && slots[winSlots[i][2]].innerHTML == "X") {
           who = 'plusiki'
           finalResult(who)
        }else if(slots[winSlots[i][0]].innerHTML == "O" && slots[winSlots[i][1]].innerHTML == "O" && slots[winSlots[i][2]].innerHTML == "O") {
            who = 'minusiki'
           finalResult(who)
        }
    }


 
}