import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

app.use(cors())

app.get('/', (req, res) => res.json({message:'Api release cyclic'}))
app.use(routes)
const port = process.env.PORT || 8001
app.listen(port, ()=> console.log(`Server run http://localhost:${port}`))

