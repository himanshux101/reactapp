const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const mongoose = require('mongoose')
const StartupModel = require('./service')

const app = express()

app.use(cors())
app.use(express.json({extended: false}))

// const startups = [
//     {
//         title: 'startup 1',
//         id: 1
//     },
//     {
//         title: 'startup 2',
//         id: 2
//     },
//     {
//         title: 'startup 3',
//         id: 3
//     }
// ]

app.get("/", async (req, res) => {
    const startups = await StartupModel.find()
    res.status(200).json(startups)
})

app.post("/", (req, res) => {
    console.log('yo man ------')
    const newStartup = {
        title: req.body.title,
        id: uuidv4()
    }
    
    console.log(newStartup)
    const startupModel = new StartupModel(newStartup)
    startupModel.save()
        .then(async (startups) => {
            const allStartups = await StartupModel.find()
            res.status(200).json(allStartups)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        })

    // startups.push(newStartup)

    // res.status(201).json(startups)
})


const url = "mongodb+srv://test:test@cluster0.1jque.mongodb.net/database?retryWrites=true&w=majority"
mongoose.connect(url, {useNewUrlParser:true}, () => {
    console.log('Mongo DB is connected')
})

const PORT = 5001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})