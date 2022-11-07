function createGame(team1, hour, team2) {
  return `
  <li>
      <img src="./assets/flags/icon-${team1}.svg" alt="Bandeira do(a) ${team1}">
      <strong>${hour}</strong>
      <img src="./assets/flags/icon-${team2}.svg" alt="Bandeira do(a) ${team2}">
    </li>
  `
}
let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
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
  createCard(
    "24/11",
    "Quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("cameroon", "16:00", "brazil") +
      createGame("serbia", "16:00", "switzerland")
  )
