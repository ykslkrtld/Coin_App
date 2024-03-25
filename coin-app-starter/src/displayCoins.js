//? export default ile paylaşıldı
const displayCoins = (coin) => {
  console.log(coin)
  const { price, change, iconUrl, name, symbol, rank } = coin
  const ul = document.querySelector("main .coins")
  const coinLi = document.createElement("li")
  coinLi.className = "coin"
  coinLi.innerHTML = `

  <div class="remove-icon">
    <i class="fas fa-window-close"></i>
  </div>

  <h2 class="coin-name">
    <span>${name}</span>
    <sup>${symbol}</sup>
  </h2>
  <div class="coin-temp">${Number(price).toFixed(6)}</div>
  <figure>
    <img class="coin-icon" src="${iconUrl}" alt="" />
    <figcaption style='color: ${change < 0 ? "red" : "green"}'>
      <i class="fa-solid fa-chart-line"></i>
      <span>${change || "0.00"}</span>
    </figcaption>
    <div>Rank: ${rank}</div>
  </figure>
  `

  ul.append(coinLi)

  coinLi.querySelector(".remove-icon").addEventListener("click", () => {
    coinLi.remove()
  })
}
export default displayCoins
