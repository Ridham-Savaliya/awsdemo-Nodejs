const express =  require("express");
const app  =  express();

app.get("/api/get",(req,res)=>{
	res.send({message:"welcome back to the nodejs app!."})
})

app.get("/api/get_user_details",(req,res)=>{
	res.send({user:{
		name:"ridham savaliya",
		age:21,
		gender:"male",
		hobby:"sex",
		degree:"BCA"
	}})
})
app.listen(8000,()=>{
	console.log("server is running on the port 8000!.")
})	







 
