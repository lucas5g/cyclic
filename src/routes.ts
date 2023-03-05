import { Router } from 'express'

export const routes = Router()

routes.get('/', (req, res) =>  res.json({message: 'Api release 2023-03-04'}))

routes.get('/users', (req, res) => {
  res.json({message: 'list users'})
})