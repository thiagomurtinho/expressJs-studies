import express from 'express'
import path from 'path'

import members from './Members'

const app = express()


//Get all members
app.use('/api/members', (req, res) => res.json(members))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Not ideal
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))