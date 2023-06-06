import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile', (req, res) => {
   res.send('Hello profile')
})

app.post('/profile', (req, res) => {
   console.log(req.body)
   res.send('Success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})