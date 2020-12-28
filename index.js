const { app, bodyParser, errorHandle, express } = require('./server-modules')
const path = require('path')
const conexao = require('./src/database/conexao')
const Tabelas = require('./src/database/tabelas')
const routes = require('./src/routes')
const porta = process.env.PORTA

conexao.connect(erro => {
  if (erro) return console.log('falha na conexão')

  Tabelas.init(conexao)

  bodyParser(app)
  app.use(routes)
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
  errorHandle(app)

  app.listen(porta, () => console.log(`http://${process.env.LOCAL}:${porta}`))
})
