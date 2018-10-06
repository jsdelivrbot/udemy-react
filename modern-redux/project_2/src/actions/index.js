import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER'

const API_KEY = '200f4f6fdec635a0bf7f2165a049904c'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`

  const request = axios.get(URL)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
