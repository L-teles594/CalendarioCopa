

function createGame (player1,hour, player2) {
    return `
        <li>
            <img src="source/assets/${player1}.svg" alt="bandeira da ${player1}">
            <strong>${hour}</strong>
            <img src="source/assets/${player2}.svg" alt="bandeira de ${player2}">
        </li>`
}

let delay = -0.3;
function createCard (date, day, game) {
    delay = delay + 0.3;
    return `
    <div class="card style="animation-delay: ${delay}s;">
        <h2>${date} <span>${day}</span></h2>
        <ul>
        ${game}
        </ul>
    </div>`
}

document.querySelector('#cards').innerHTML = 
            createCard('24/11', 'quinta', createGame('brazil', '07:00', 'serbia') + createGame('cameron', '16:00', 'switzerland')) +
            createCard('28/11', 'sexta', createGame('ghana', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguay')) +
            createCard('28/11', 'sexta', createGame('brazil', '16:00', 'cameron') + createGame('serbia', '16:00', 'south-korea'))
            
        