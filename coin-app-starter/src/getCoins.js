//? export default ile payalşıldığı için süslü parantezsi ve herhangi bir isimle import edilebildi.
import displayCoins from "./displayCoins"
import axios from "axios"

//? named export
export const getCoins = async (keyword) => {

  const URL = `https://api.coinranking.com/v2/coins?search=${keyword}`

  // const options = {
  //   headers: { "x-access-token": API_KEY },
  // }

  const options = {
    headers: { "x-access-token": import.meta.env.VITE_API_KEY },
  }

  try {
    const res = await axios(URL, options)
    
    if (!res.data.data.coins[0]) {
      alert("Coin can not be found")
    } else {
      displayCoins(res.data.data.coins[0])
    }
  } catch (error) {
    console.log(error)
  }
}
