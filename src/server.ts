import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({message:'list api'})
})

app.get('/users', (req, res) => {
  res.json({message: 'list de users'})
})

app.listen(process.env.PORT || 8000, ()=> console.log('Server run http://localhost:8000'))

