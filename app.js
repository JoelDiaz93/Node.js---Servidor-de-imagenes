const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

app.use(fileUpload())

app.post('/upload',(req,res) => {
    let keyFile = req.files.file
    keyFile.mv(`./files/${keyFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
    })
})

app.use(express.static('files'));


app.listen(3000,() => console.log('Corriendo'))