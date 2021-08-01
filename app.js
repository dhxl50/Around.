const path = require('path');
const express = require('express');
const app = express();


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');					//view engine으로 ejs 사용
app.use(express.static(__dirname+'/public'));	//express 정적파일 연결

app.get('/',(req,res)=>{
	res.render('index');
})

app.listen(8000,()=>{
	console.log("listening on port 8000...");
})