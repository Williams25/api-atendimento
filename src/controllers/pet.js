const Pet = require('../models/pet')

module.exports = {
  create: async (req, res) => {
    const { id_atendimento, nome } = req.body
    const reqImagem = req.files

    const imagem = reqImagem.map(file => {
      return {
        path: file.filename
      }
    })

    return Pet.create({ id_atendimento, nome, imagem }, res)
  },
  index: async (req, res) => {
    return await Pet.index(res)
  }
}