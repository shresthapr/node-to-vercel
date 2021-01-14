const app = require('express')()

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello from NodeJS'
  })
})



module.exports = app