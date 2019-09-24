import express from 'express'
import path from 'path'
const exphbs = require('express-handlebars')


import logger from './middleware/logger'
import membersRoute from './routes/api/members'
import members from './Members'

const app = express()

// //Init middleware
app.use(logger)

//Handlebars Middleware
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Home router
app.get('/', (req, res) => res.render('index',{
    title: "Members app",
    members
}))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Members api routes
app.use('/api/members', membersRoute)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))