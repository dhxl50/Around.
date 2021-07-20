const express = require('express');
const clientDir = "/client"
const app = express();

app.get('',(req,res)=>{
	res.sendFile(__dirname + "/client/index.html");
})

app.listen(8000,()=>{
	console.log("listening on port 8000...");
})