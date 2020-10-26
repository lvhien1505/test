const express=require("express")



const app=express();


app.get("/",(req,res)=>{
    res.send("helllo");
})

app.listen(5000);