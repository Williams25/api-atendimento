const { app, bodyParser, errorHandle, controllerRoutes } = require('./server-modules')
const conexao = require('./src/database/conexao')
const Tabelas = require('./src/database/tabelas')
const porta = process.env.PORTA

conexao.connect(erro => {
  if (erro) {
    console.log('falha na conexão')
  } else {

    Tabelas.init(conexao)

    bodyParser(app)
    controllerRoutes(app)
    errorHandle(app)

    app.listen(porta, () => console.log(`http://${process.env.LOCAL}:${porta}`))
  }
})
