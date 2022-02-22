function setPlayerStyle(player) {
    player.style.border = '2px solid red';
    player.style.margin = '15px';
    player.style.padding = '10px';
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'Thistle';
    // })
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    //console.log(player);
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'Thistle';
    // })



}
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
    <p>Hic commodi iure consequatur repellendus aspernatur dicta est, vitae fugit autem beatae, voluptatem
        eveniet quia quidem accusantium? Consequatur repudiandae maiores blanditiis, aspernatur eligendi hic
        aliquid, reprehenderit eius exercitationem, minus quam?</p>
    
    `;

    playersContainer.appendChild(player);
    setPlayerStyle(player);



}
document.getElementById('players').addEventListener('click', function (event) {
    console.log(event.target)

})