const app = require('express')()
const cors = require('cors');

app.use(cors());

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from NodeJS'
  })
})
app.get('/test', (req, res) => {
  res.json({
    message: 'Hello from Test'
  })
})
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Hello from api/test'
  })
})



module.exports = app