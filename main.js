// Função para criar um no jogo no card
function createGame(player1, hour, player2){
  return `
  <li>
      <img src="assets/icon=${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="assets/icon=${player2}.svg" alt="Bandeira da ${player2}">
  </li>
  `
}

// Função para criar um card 
let delay = -0.4; //Criar essa variavel delay para que a animação tenha um delay entre os cards
function createCard(date,day, games){ 
  delay = delay + 0.4; 
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
`

}

/* document é o objeto para o documento
querySelector - Para selecionar um seletor nesse caso o #cards 
innerHTML - Para inserir esse comando no seletor do HTML selecionado */

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon")) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon")) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
  