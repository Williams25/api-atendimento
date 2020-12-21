require('dotenv/config')
const app = require('./src/middlewares/express')
const bodyParser = require('./src/middlewares/bodyParser')
const errorHandle = require('./src/middlewares/errorHandle')
const routes = require('./src/routes')

module.exports = {
  app,
  bodyParser,
  errorHandle,
  controllerRoutes: routes,
}