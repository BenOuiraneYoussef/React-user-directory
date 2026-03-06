const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Auth = require('../models/Account')

const SECRET = 'mysecretkey'

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if user already exists
    const existing = await Auth.findOne({ email })
    if (existing) return res.status(400).json({ error: 'Email already registered' })

    // Hash the password
    const hashed = await bcrypt.hash(password, 10)

    // Save the user
    const user = new Auth({ email, password: hashed })
    await user.save()

    res.json({ message: 'Registered successfully' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Find user
    const user = await Auth.findOne({ email })
    if (!user) return res.status(400).json({ error: 'Invalid credentials' })

    // Check password
    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ error: 'Invalid credentials' })

    // Create token
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1d' })

    res.json({ token })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router