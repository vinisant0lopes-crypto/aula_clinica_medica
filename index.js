import express from 'express'
import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'
import { buscarEspecialidades } from './DAO/especialidade/buscar_especialidade.js'
import { buscarAgendamentos } from './DAO/agendamento/buscar_agendamento.js'
import { buscarMedicos } from './DAO/medico/buscar_medico.js'
import { buscarConsultas } from './DAO/consulta/buscar_consulta.js'
import { incluirPaciente } from './DAO/paciente/inserir_paciente.js'
import { incluirMedico } from './DAO/medico/inserir_medico.js'

const app = express()
app.use(express.json())

app.get('/ola', (req, res) =>{
     res.json({mensagem: 'Ola Mundo'})
})

app.get('/paciente', async (req, res) =>{
    let pacientes = await buscarPacientes()
    res.json(pacientes)
})

app.get('/especialidade', async (req, res) =>{
    let especialidades = await buscarEspecialidades()
    res.json(especialidades)
})

app.get('/agendamento', async (req, res) =>{
    let agendamentos = await buscarAgendamentos()
    res.json(agendamentos)
})

app.get('/medico', async (req, res) =>{
    let medicos = await buscarMedicos()
    res.json(medicos)
})

app.get('/consulta', async (req, res) =>{
    let consultas = await buscarConsultas()
    res.json(consultas)
})

app.post('/inserir_paciente', async (req, res) =>{
    let {nome, endereco, telefone, doencasPrevias, remedioDeUsoContinuo} = req.body
    let infos = [nome, endereco, telefone, doencasPrevias, remedioDeUsoContinuo]
    let resp = await incluirPaciente(infos)

    console.log(nome, endereco, doencasPrevias, remedioDeUsoContinuo)
    // res.send({nome, endereco, telefone, doencasPrevias, remedioDeUsoContinuo})
    res.send(resp)
})

app.post('/inserir_medico', async (req, res) =>{
    let {nome, endereco, telefone, crm, numeroRegistro} = req.body
    let infos = [nome, endereco, telefone, crm, numeroRegistro]
    let resp = await incluirMedico(infos)

    console.log(nome, endereco, telefone, crm, numeroRegistro)
    // res.send({nome, endereco, telefone, crm, numeroRegistro})
    res.send(resp)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/')
    console.log('Server is running on http://localhost:3000/ola')
    console.log('Server is running on http://localhost:3000/paciente')
    console.log('Server is running on http://localhost:3000/especialidade')
    console.log('Server is running on http://localhost:3000/agendamento')
    console.log('Server is running on http://localhost:3000/medico')
    console.log('Server is running on http://localhost:3000/consulta')
    console.log('Server is running on http://localhost:3000/inserir_paciente')
    console.log('Server is running on http://localhost:3000/inserir_medico')

})

