import express from 'express'
import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'
import { buscarEspecialidades } from './DAO/especialidade/buscar_especialidade.js'
import { buscarAgendamentos } from './DAO/agendamento/buscar_agendamento.js'
import { buscarMedicos } from './DAO/medico/buscar_medico.js'
import { buscarConsultas } from './DAO/consulta/buscar_consulta.js'
import { incluirPaciente } from './DAO/paciente/inserir_paciente.js'
import { incluirMedico } from './DAO/medico/inserir_medico.js'
import {incluirEspecialidade} from './DAO/especialidade/inserir_especialidade.js'
import {incluirAgendamento} from './DAO/agendamento/inserir_angendamento.js'
import {incluirConsulta} from './DAO/consulta/inserir_consulta.js'

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

app.post('/inserir_especialidade', async (req, res) =>{
    let {nome, publicoAlvo} = req.body
    let infos = [nome, publicoAlvo]
    let resp = await incluirEspecialidade(infos)

    console.log(nome, publicoAlvo)
    // res.send({nome, publicoAlvo})
    res.send(resp)
})

app.post('/inserir_agendamento', async (req, res) =>{
    let {data, hora, queixa, gravidade} = req.body
    let infos = [data, hora, queixa, gravidade]
    let resp = await incluirAgendamento(infos)

    console.log(data, hora, queixa, gravidade)
    // res.send({data, hora, queixa, gravidade})
    res.send(resp)
})

app.post('/inserir_consulta', async (req, res) =>{
    let {data, hora, numeroBeneficiario, crm, numeroAgendamento} = req.body
    let infos = [data, hora, numeroBeneficiario, crm, numeroAgendamento]
    let resp = await incluirConsulta(infos)

    console.log(data, hora, numeroBeneficiario, crm, numeroAgendamento)
    // res.send({data, hora, queixa, gravidade})
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
    console.log('Server is running on http://localhost:3000/inserir_especialidade')
    console.log('Server is running on http://localhost:3000/inserir_agendamento')
    console.log('Server is running on http://localhost:3000/inserir_consulta')

})

