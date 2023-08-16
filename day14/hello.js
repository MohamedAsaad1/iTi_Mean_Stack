let http = require("http");

let products = [
    { id: 1, ProdName: "IPhone", price: 2000 },
    { id: 2, ProdName: "Laptop", price: 5000 },
    { id: 3, ProdName: "car", price: 300000 },
    { id: 4, ProdName: "Tv", price: 8000 },
  ];

let id ;
let myServer = http.createServer((req,res)=>{
    function undefind (){
        res.write("404")
    }
    function check(id){
        if (id > products.length){
            undefind();
            return 0;
           }
        let element =  products.find((item)=>{
            return item.id == id;
        })
        res.write(`{ id: ${element.id}, ProdName: ${element.ProdName}, price: ${element.price} }`)
    }

    let url = req.url
    if (url.includes("/home")|| url =='/'){
        res.write("<h1 >“welcome to our APIs” </h1>")
        
    }
    else if  (url.includes("/products")) {
        products.forEach((item)=>{
            res.write(
                `[{ id: ${item.id}, ProdName: ${item.ProdName}, price: ${item.price} }],`
            )
        })
        // <h1>id:${item.id} ${item.ProdName} price:${item.price}</h1>
    }
    else if (url.includes('/product')){
        id  = req.url.split('/');
        check(id[2]);
    } 
    else{undefind()
    }
    res.end()
    
}) 


myServer.listen(4000,()=>{console.log("is running")
})

