var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

let products = [
    { id: 1, ProdName: "IPhone", price: 2000 },
    { id: 2, ProdName: "Laptop", price: 5000 },
    { id: 3, ProdName: "car", price: 300000 },
    { id: 4, ProdName: "Tv", price: 8000 },
  ];
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/" + "we.html")
       
}
)
app.get("/welcome",(req,res)=>{
    res.end("Welcome" +"::"+ req.query.yourname) 
    //send ?
})

app.get("/display",)

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/" + "login.html")
})

app.post("/login",urlencodedParser,(req,res)=>{
    // res.redirect(301,"/welcome")

    res.send("done" + "::" +req.body._name)
})
app.get("/products",(req,res)=>{
    res.send(products)
})
app.get("/product/:id",(req,res)=>{
   id =  req.params.id
   item = products.find((item)=>{
    return id == item.id
   })
   res.send(item)
})

app.get("*",(_,res )=>{
    res.end("404")

})

app.listen(4000,()=>{
    console.log("running")
})
