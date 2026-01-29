import {connectDB} from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./Routes/userRoutes.js";


dotenv.config();
const app=express();
const PORT =process.env.PORT || 5000;
//middleware
app.use(express.json())
app.use(cors())
//connectivity
connectDB()
//routes definition
app.use('/api/user',userRoute);
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})




