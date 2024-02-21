const express = require('express')
const {runImageDocker}  = require('./src/docker/docker_compose_run')
const app = express()
app.get('/', (req, res) => {
    console.log("Meu zovo")
    runImageDocker('docker rm mynodered')
    runImageDocker('docker run -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red');
    res.send('Meu zovo')
})
app.listen(process.env.PORT || 3000)