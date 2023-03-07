const {MongoClient}= require('mongodb');
//path of mongodb
//mongodb://localhost:27017  //timeout error
const url = 'mongodb://127.0.0.1:27017'
const database = 'e-comm'
const client = new MongoClient(url)


async function dbConnect()
{
    let result = await client.connect();
    //which database u want to connect
    let db = result.db(database)
    //which collection
   return db.collection('products')
}


module.exports = dbConnect;