import express from 'express'
import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'

const app = express()
app.use(express.json())

app.get('/ola', (req, res) =>{
     res.json({mensagem: 'Ola Mundo'})
})

app.get('/paciente', async (req, res) =>{
    let pacientes = await buscarPacientes()
    res.json(pacientes)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/')
    console.log('Server is running on http://localhost:3000/ola')
    console.log('Server is running on http://localhost:3000/paciente')
})

