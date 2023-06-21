const { MongoClient } = require('mongodb')

const uri = "mongodb+srv://admin:iyMfEPG6dpSxheCL@cluster0.uikauku.mongodb.net/Loja"

const client = new MongoClient(uri)

async function run(){
    try{
        await client.connect()
        console.log('Conectando ao MongoDB!')
    }catch(err){
        console.log(err)
    }
}

run()

module.exports = client
