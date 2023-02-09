function createGame (player1,hour, player2) {
    return `
        <li>
            <img src="source/assets/${player1}.svg" alt="bandeira da ${player1}">
            <strong>${hour}</strong>
            <img src="source/assets/${player2}.svg" alt="bandeira de ${player2}">
        </li>`
}

function createCard (date, day, game) {
    return `<div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${game}
    </ul>
</div>`
}
document.querySelector('#app').innerHTML = `
        <header>
            <img src="source/assets/logo.svg" alt="logo calendário da copa">

        </header>
        <main id="cards">
            ${createCard('24/11', 'quinta', createGame('brazil', '07:00', 'serbia') + createGame('cameron', '16:00', 'switzerland'))}
            ${createCard('25/11', 'sexta', createGame())}
        </main>`