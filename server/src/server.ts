import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

app.use(cors())
app.use(routes)

app.listen(process.env.PORT || 8000, ()=> console.log('Server run http://localhost:8000'))

