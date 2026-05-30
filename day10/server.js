const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello");  
});
app.get("/students",(req,res)=>{
        res.json({
            name:"Nithya sri",
            age:19,
            department:"CSE",
            cpga:8.4
        });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});