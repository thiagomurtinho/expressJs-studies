import express from 'express'
// import { process } from 'ipaddr.js';

const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))