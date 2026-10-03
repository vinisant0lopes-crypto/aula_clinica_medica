import {conexao} from '../conexao.js'

// a interrogação serve para que o sql termine de escrever o insert, facilitando a inserção dos dados.
async function incluirAgendamento(infos){
    const data = [infos]
    const sql = `INSERT INTO tbl_agendamento (data, hora, queixa, gravidade) VALUES ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[data]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {incluirAgendamento}
