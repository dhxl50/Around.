const express = require('express');
const app = express();

app.use('/public',express.static(__dirname+'/public'));	//express 정적파일 연결

app.get('',(req,res)=>{
	res.sendFile(__dirname + "/public/index.html");
})

app.listen(8000,()=>{
	console.log("listening on port 8000...");
})