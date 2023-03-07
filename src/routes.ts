import { Router } from 'express'
import axios from 'axios'

export const routes = Router()

routes.get('/', (req, res) =>  res.json({message: 'Api release 2023-03-04 file routes'}))

routes.get('/users', (req, res) => {
  res.json({message: 'list users'})
})

routes.get('/pokemons', async (req, res) => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')

  return res.json(data)
})