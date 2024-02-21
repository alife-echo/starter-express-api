const { exec } = require('child_process');


 function runImageDocker(command){
    exec(command,(error,stdout,stderr) => {
        if(error){
            console.error(`Erro ao executar o Docker:${error}`)
            return
        }
        console.log(`Saída padrão:\n${stdout}`)
        console.error(`Saída de erro:\n${stderr}`)
    })
}

module.exports = {runImageDocker}