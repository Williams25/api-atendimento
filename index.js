const { app, bodyParser, errorHandle, controllerRoutes } = require('./server-modules')
const porta = process.env.PORTA

bodyParser(app)
controllerRoutes(app)
errorHandle(app)

app.listen(porta, () => console.log(`http://${process.env.LOCAL}:${porta}`))