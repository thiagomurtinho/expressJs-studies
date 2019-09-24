import express from 'express'
import path from 'path'

import logger from './middleware/logger'
import membersRoute from './routes/api/members'

const app = express()

// //Init middleware
app.use(logger)

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Members api routes
app.use('/api/members', membersRoute)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))