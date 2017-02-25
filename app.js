var express = require("express");
var app = express();

app.set("view engine","jade");
app.listen(3333);

console.log("port 3333 started");

app.get("/",function(req,res){
	res.render("index",{
		title : "标题"
	});
});



app.get("/detail/:id",function(req,res){
	res.render("detail",{
		title : "详情页"
	});
});


app.get("/admin",function(req,res){
	res.render("admin",{
		title : "后台添加"
	});
});

app.get("/admin/list",function(req,res){
	res.render("list",{
		title : "后台列表"
	});
});





















