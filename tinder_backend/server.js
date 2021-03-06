import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbcards.js'
import cors from 'cors'

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:eKyMwnWSJmoqKGTf@cluster0.lbopz.mongodb.net/tinderdb?retryWrites=true&w=majority';
//MiddleWares
app.use(express.json())
app.use(cors())
//DB endpoint
mongoose.connect(connection_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology : true,
    }
    );

//API endpoint
app.get("/",(req,res)=>{
    res.status(200).send("hello yogesh");
})

app.post("/tinder/cards",(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(201).send(data);
        }
    })
})
app.get("/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if(err)
        {
            res.status(500).send(err);
        }
        else
        {
            res.status(200).send(data);
        }
    })
})
//Listener
app.listen(port,()=>{console.log(`listening on localhost ${port}`)})