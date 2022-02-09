const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const session = require('express-session')

app.use(cors())

app.use(
  session({
    secret: 'sdpqjsdqs',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, httpOnly: false, maxAge: 24 * 60 * 60 * 1000
    }
  })
)


app.get('/', function (req, res) {
  if (!req.session.counter) {
    req.session.counter = 0;
  }

  req.session.counter++;

  res.send({
    counter: req.session.counter
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})