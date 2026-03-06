const express = require('express')
const router = express.Router()
const User = require('../models/User')

// GET all users
router.get('/', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

// POST create a user
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// PUT update a user
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    res.json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE a user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ message: 'User deleted' })
})

module.exports = router