const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') 
const userRoutes = require('./routes/users') 
const app = express()
app.use(cors())
app.use(express.json())


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdirectory')
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Server is running!')
})
app.use('/api/users', userRoutes) 
app.listen(5000, () => {
  console.log('Server started on port 5000')
})