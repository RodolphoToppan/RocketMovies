import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-eexd.onrender.com'
})
