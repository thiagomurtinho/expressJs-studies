import express from 'express'
import uuid from 'uuid'

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

//Create members
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email) {
        res.status(400).json({ msg: "Please include a name and email"  })
    }

    members.push(newMember)
    res.json(members)
})

//Update a member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if(found) {
        const updMember = req.body
            console.log(`body request: ${updMember}`)
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name
                member.email = updMember.email ? updMember.email : member.email

                res.json({ msg: 'Member updated', member })
            }
        })
    } else {
        res.status(400).json({ msg: `ID(${req.params.id}) not found` })
    }
})

module.exports = router