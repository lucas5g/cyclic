import { Router } from 'express'

export const routes = Router()

routes.get('/', (req, res) => {
  res.json({message: 'list get'})
})

routes.get('/users', (req, res) => {
  res.json({message: 'list users'})
})