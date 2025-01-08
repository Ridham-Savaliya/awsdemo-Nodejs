const express =  require("express");
const app  =  express();

app.get("/api/get",(req,res)=>{
	res.send({message:"welcome back to the nodejs app!."})
})

app.listen(8000,()=>{
	console.log("server is running on the port 8000!.")
})	







 
