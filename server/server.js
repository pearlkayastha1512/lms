import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Configs/mongodb.js'
import { clerkWebhooks } from './Controllers/webhooks.js'

//Initialize express
const app = express()

//Connect to database
await connectDB()

//Middlewares
app.use(cors())

//Routes
app.get('/', (req,res)=> res.send("API working"))
app.post('/clerk', express.json(),clerkWebhooks)

//PORT 
const PORT = process.env.PORT || 5050;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

