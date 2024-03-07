const express = require("express");
const { handler } = require("./controller");
const PORT = process.env.PORT || 4040


const app = express();

app.use(express.json())
app.post("*", async(req,res)=>{
    console.log(req.body)
    try{

        console.log("first")
        await handler(req)
        res.send(200)
    }
    catch(e){
        console.log(e)
    }
});

app.get("*", async(req,res)=>{
    console.log("get")
    res.send("Hello get")
});

app.listen(PORT,function(err){
    if(err)console.log(err);
    console.log("Server listening on PORT", PORT)
})
