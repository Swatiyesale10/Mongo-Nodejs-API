const express = require('express');
const dbConnect = require('./mongodb')
const app = express();
//instance of id
const mongodb = require('mongodb')
//parse req.body 
app.use(express.json())

app.get('/',async (req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log("data", data)
    res.send(data)
    // res.send({name:'swati'})
})


// to save data in database from request
app.post('/',async (req,res)=>{
    let data = await  dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result)
})


//update perticular field
//we can update through post
//put standa
app.put('/:name', async(req,res)=>{
    let data= await dbConnect()
    let result = data.updateOne(
         {name:req.params.name},
        //{name: req.body.name},
        { $set:req.body}
    )
    res.send({result:"upated"})
})


app.delete("/:id",async(req,res)=>{
    console.log(req.params.id)
    let data = await dbConnect()
    let result= await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result)
})



app.listen(5000)