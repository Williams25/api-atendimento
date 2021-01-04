const query = require('../database/query')

class Atendimento {
  async create(atendimento) {
    const sql = `INSERT  INTO ATENDIMENTOS SET ?`
    return await query(sql, atendimento)
  }
  async index() {
    const sql = `SELECT * FROM ATENDIMENTOS`
    return await query(sql)
  }
  async findID(id) {
    const sql = `SELECT * FROM ATENDIMENTOS WHERE ID = ?`
    return await query(sql, id)
  }
  async update(atendimento) {
    const sql = `UPDATE ATENDIMENTOS SET ? WHERE ID = ?`
    return await query(sql, [atendimento, atendimento.id])
  }
  async delete(id) {
    const sql = `DELETE FROM ATENDIMENTOS WHERE ID = ?`
    return await query(sql, id)
  }
}

module.exports = new Atendimento