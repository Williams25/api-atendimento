const conexao = require('../database/conexao')
const utils = require('../utils')

class Pet {

  create(pets, res) {
    const sql = `INSERT INTO PETS SET ?`
    let error = false

    for (let i = 0; i < pets.imagem.length; i++) {
      const pet = {
        id_atendimento: pets.id_atendimento,
        nome: pets.nome,
        imagem: pets.imagem[i].path
      }

      conexao.query(sql, pet, (erro, result) => {
        if (erro) {
          error = false
        } else {
          error = true
        }
      })
    }

    if (error) return res.status(400).json({ message: 'Erro ao cadastrar pet' })
    return res.status(201).json({ message: 'Pet cadastrado' })
  }

  index(res) {
    const sql = `SELECT * FROM PETS`
    conexao.query(sql, (erro, result) => {
      if (erro) {
        return res.status(400).json(erro)
      } else {
        const pets = result.map(pet => {
          return {
            id: pet.ID,
            id_atendimento: pet.ID_ATENDIMENTO, 
            nome: pet.NOME,
            imagem: utils.renderImage({imagem: pet.IMAGEM})
          }
        })
        return res.status(200).json(pets)
      }
    })
  }
}

module.exports = new Pet