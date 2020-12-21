const { app, bodyParser, errorHandle, controllerRoutes } = require('./modules')
const porta = process.env.PORTA

bodyParser(app)
app.use(controllerRoutes)
errorHandle(app)

app.listen(porta, () => console.log(`http://${process.env.LOCAL}:${porta}`))