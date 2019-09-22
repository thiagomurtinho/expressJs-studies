import express from 'express'
// import { process } from 'ipaddr.js';

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello Word</h1>')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))