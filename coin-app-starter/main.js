import "./scss/style.scss"
import { getCoins } from "./src/getCoins";
// Selectors

const form = document.querySelector("header form")

// Form için click eventi kullanılmaz submit eventi kullanılır.
form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault() // form eventinin doğal davranışlarını disable eder
  getCoinData()
  e.target.reset() // e.preventdefault kullanıldığı için silinen Formu silme davranışını aktif hale getir
})

const getCoinData = () => {
  const input = document.querySelector("header form input").value
  if(!input.trim()){
    alert("Input must be entered")
  } else{
    // GET COIN
    getCoins(input)
  }
}
