const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Meu zovo")
    res.send('Meu zovo')
})
app.listen(process.env.PORT || 3000)