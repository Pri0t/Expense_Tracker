require("dotenv").config();//loads environment variables from a .env file into process.env
//used to stor sensitive infor like database URLs,secret keys,etc
const express=require("express");//minimalist web framework for node.js
const cors=require("cors");// cross orifin resource sharing --when frontend and backend runs on different ports
const path=require("path");//handles file paths
const connectDB=require("./config/db");//connect to mongodb
const authRoutes=require("./routes/authRoutes");//import authentication
const incomeRoutes=require("./routes/incomeRoutes");
const expenseRoutes=require("./routes/expenseRoutes");
const dashboardRoutes=require("./routes/dashboardRoutes");

const app=express();//app becomes server object

app.use(
  cors({
    origin:process.env.CLIENT_URL||"*",//which frontend urls can talk to backend
    methods:["GET","POST","PUT","DELETE"],//allowed HTTP methods from frontend
    allowedHeaders:["Content-Type","Authorization"],//headers can be sent tp frontend
  })
);
app.use(express.json());

connectDB();

app.use("/api/v1/auth",authRoutes);

app.use("/api/v1/income",incomeRoutes);

app.use("/api/v1/expense",expenseRoutes);

app.use("/api/v1/dashboard",dashboardRoutes);


app.use("/uploads",express.static(path.join(__dirname,"uploads"))); 
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`));