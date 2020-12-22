const { app } = require('./src/middlewares/express')
const bodyParser = require('./src/middlewares/bodyParser')
const errorHandle = require('./src/middlewares/errorHandle')
const controllerRoutes = require('./src/routes')

module.exports = {
  app,
  bodyParser,
  errorHandle,
  controllerRoutes,
}