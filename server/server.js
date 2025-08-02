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
// Other JSON routes
app.use(express.json())
// app.post('/clerk', express.json(),clerkWebhooks)

// Clerk Webhook (needs raw body)
app.post('/clerk', express.raw({ type: 'application/json' }), clerkWebhooks)


//PORT 
const PORT = process.env.PORT || 5050;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

