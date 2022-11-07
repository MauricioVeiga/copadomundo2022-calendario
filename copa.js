function createGame(team1, hour, team2) {
  return `
  <li>
      <img src="./assets/flags/icon-${team1}.svg" alt="Bandeira do(a) ${team1}">
      <strong>${hour}</strong>
      <img src="./assets/flags/icon-${team2}.svg" alt="Bandeira do(a) ${team2}">
    </li>
  `
}
let delay = -0.2
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>              
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard("21/11", "Segunda", createGame("senegal", "13:00", "holand")) +
  createCard(
    "21/11",
    "Segunda",
    createGame("england", "10:00", "iran") +
      createGame("united states", "16:00", "gales")
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame("argentina", "07:00", "saudi arabia") +
      createGame("mexico", "13:00", "poland")
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame("denmark", "13:00", "tunisia") +
      createGame("france", "13:00", "australia")
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa rica")
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame("marrocos", "07:00", "croatia") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame("qatar", "10:00", "senegal") +
      createGame("holand", "13:00", "ecuador")
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame("gales", "07:00", "iran") +
      createGame("england", "16:00", "united states")
  ) +
  createCard(
    "26/11",
    "Sábado",
    createGame("poland", "10:00", "saudi arabia") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "26/11",
    "Sábado",
    createGame("tunisia", "07:00", "australia") +
      createGame("france", "13:00", "denmark")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("japan", "07:00", "costa rica") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("belgium", "10:00", "marrocos") +
      createGame("croatia", "13:00", "canada")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("south korea", "10:00", "ghana") +
      createGame("portugal", "13:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame("holand", "12:00", "qatar") +
      createGame("ecuador", "12:00", "senegal")
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame("iran", "16:00", "united states") +
      createGame("gales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame("poland", "16:00", "argentina") +
      createGame("saudi arabia", "16:00", "mexico")
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark")
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame("japan", "16:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "marrocos")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("cameroon", "16:00", "brazil") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("south korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay")
  )
