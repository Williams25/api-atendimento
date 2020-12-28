const { app,express } = require('./src/middlewares/express')
const bodyParser = require('./src/middlewares/bodyParser')
const errorHandle = require('./src/middlewares/errorHandle')

module.exports = {
  app,
  bodyParser,
  errorHandle,
  express
}