const express =  require("express");
const app  =  express();
require('dotenv').config();

app.get("/api/get",(req,res)=>{
	res.send({message:"welcome back to the nodejs app!."})
})

app.get("/api/get_user_details",(req,res)=>{
	res.send({user:{
		name:"ridham savaliya",
		age:21,
		gender:"male",
		hobby:"Music/Gaming",
		degree:"BCA",
		envuser:`${process.env.NAME}`
	}})
})
app.listen(process.env.PORT,()=>{
	console.log(`server is running on the port ${process.env.PORT}!.`)
})	







 
