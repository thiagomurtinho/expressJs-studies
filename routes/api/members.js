import express from 'express'

import members from '../../Members'

const router = express.Router()


//Get all members
router.get('/', (req, res) => res.json(members))

//Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id))) //Estudar!!
    } else {
        res.status(400).json({ msg: `ID(${req.params.id}) not found` })
    }
})

module.exports = router