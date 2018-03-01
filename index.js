const express = require('express')
const datastore = require('nedb')
const path = require('path')
const pug = require('pug')

const app = express()
const db = new datastore()

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.get('/', (req, res) => {
  res.render("homepage")
})

app.listen(3000, () => {
  console.log('App listening on port 3000...')
})
