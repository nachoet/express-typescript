import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middelware que transforma la req.body aun json

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged my ip ' + new Date().toLocaleDateString())
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`)
})
