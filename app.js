require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3500
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')

app.use(cors())
app.use(express.json())

app.use('/',(request, response)=>
{
    response.status(200).send({message : "hi!"})
})

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully!'))

app.use('/api/v1/flights', adminRoutes )
app.use('/api/v1/flights', userRoutes )


app.listen(PORT, () =>
{
    console.log(`server is running at http://localhost:${PORT}`)
})