// Função para criar um no jogo no card
function createGame(player1,contry1, hour, player2, contry2){
  return `
  <li>
      <div>
      <img src="assets/icon=${player1}.svg" alt="Bandeira do ${player1}">
      <span>${contry1}</span>
      </div>
      <div>
      <strong>${hour}</strong>
      </div>
      <div>
      <img src="assets/icon=${player2}.svg" alt="Bandeira da ${player2}">
      <span>${contry2}</span>
      </div>
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
    "20/11",
    "domingo",
    createGame("qatar", "Catar", "13:00", "ecuador", "Equador")
  ) +
  createCard(
    "21/11",
    "segunda-feira",
    createGame("england", "Inglaterra", "10:00", "iran", "Irã") + 
    createGame("senegal", "Senegal", "13:00", "netherlands", "Holanda") + 
    createGame("united states", "Estados Unidos", "16:00", "wales", "Pais de Gales")
  ) + 
  createCard(
    "22/11", 
    "terça-feira", 
    createGame("argentina", "argentina", "07:00", "saudi arabia", "Arabia Saudita") +
    createGame("denmark", "Dinamarca", "10:00", "tunisia", "Tunisia") +
    createGame("mexico", "México", "13:00", "poland", "Polônia") +
    createGame("france", "frança", "16:00", "australia", "Austrália")
    ) +
  createCard(
    "23/11", 
    "quarta-feira", 
    createGame("morocco", "Morrocos", "07:00", "croatia", "Croacia") +
    createGame("germany", "Alemanha", "10:00", "japan", "Japão") +
    createGame("spain", "Espanha", "13:00", "costa rica", "Costa Rica") +
    createGame("belgium", "Bélgica", "16:00", "canada", "Canadá")
    ) + 
    createCard(
    "24/11", 
    "quinta-feira", 
    createGame("switzerland", "Suíça", "07:00", "cameroon", "Camarões") +
    createGame("uruguay", "Uruguay", "10:00", "south korea", "Coreia do Sul") +
    createGame("portugal", "Portugual", "13:00", "ghana", "Gana") +
    createGame("brazil", "Brasil", "16:00", "serbia", "Sérvia")
    )
  