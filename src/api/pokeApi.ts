import axios, { AxiosInstance } from 'axios'

export const pokeApi: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
})
