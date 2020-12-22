const atendimento = require('./atendimentos')

module.exports = app => {
  app.use('/atendimentos', atendimento)
}