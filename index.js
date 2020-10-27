const express=require("express")



const app=express();
//comemnetn

app.get("/",(req,res)=>{
    res.send("helllo");
})

app.listen(5000);