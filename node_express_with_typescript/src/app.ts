import express from 'express'
import router from './routes/todo';
import bodyparser from 'body-parser'

const app=express();


app.use(bodyparser.json())




app.use((err:Error,req:express.Request,res:express.Response,n:express.NextFunction)=>{
   res.json({message:"Errorß"})
})


app.use('/todos',router );

app.listen(3000,()=>{
   console.log(`Server Listening at 3005`)
})