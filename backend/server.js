import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app = express()
// const port = 4000
const PORT = process.env.PORT || 4000


// middleware
app.use(express.json())
app.use(cors({
  origin: [
    "https://foodify-indol-eta.vercel.app",
    "https://foodify-e37j.vercel.app"
  ],
  credentials: true
}))

// db connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user',userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order", orderRouter);

app.get('/', (req,res)=>{
    res.send("API Working")
})

// app.listen(PORT, ()=>{
//     console.log(`Server started on http://localhost:${PORT}`)
// })

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`)
})
