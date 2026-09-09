import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import interviewRouter from './routes/interview.route.js';

dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())


app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use('/api/interview',interviewRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(`Server is running on port http://localhost:${PORT}`)
    connectDB();
})