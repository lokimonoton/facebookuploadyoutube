const express = require('express')
const app = express()
const bodyParser=require('body-parser')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => res.sendFile(__dirname+'/kemerdekaan.html'))
app.post('/upload', async (req, res) => {
    console.log(req.body)
    // res.send("cam")
    const upload=require('./cakalang')
    const status=await upload(req.body.site,req.body.title)
    if(status!="error"){
        res.send(status)
    }else{
        res.send("error")
    }
})

app.listen(process.env.PORT, () => console.log('Example app listening on port 3000!'))