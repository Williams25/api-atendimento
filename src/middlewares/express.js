require('dotenv/config')
const express = require('express')

module.exports = {
  app: express(),
  router: express.Router(),
  express
}