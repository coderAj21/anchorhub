const express=require("express");
const app=express();
const cors=require("cors");
const router = require("./routes/routes");
require("dotenv").config();
const PORT=process.env.PORT || 4000;



// middleware
app.use(express.json());

// cors
app.use(cors({
    origin:"*",
    credentials:true,
    methods:["POST","PUT","GET"]
}));

app.use("/api/v1",router);

const connectDB=require("./config/database");
connectDB();

app.get("/",(req,res)=>{
    res.send("Server is Working...");
})
app.listen(PORT,()=>{
    console.log(`Server is working at Port : ${PORT}`);
});

