import express from 'express'
import path from 'path'

import members from './Members'
import logger from './middleware/logger'

const app = express()

// //Init middleware
app.use(logger)

//Get all members
app.get('/api/members', (req, res) => res.json(members))

//Get single member
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id))) //Estudar!!
    } else {
        res.status(400).json({ msg: `ID(${req.params.id}) not found` })
    }
})

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Not ideal
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))