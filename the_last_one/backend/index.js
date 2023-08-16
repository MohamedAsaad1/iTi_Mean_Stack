const express = require('express')
const app = express()
const { spawn } = require('child_process');
const mongoose = require("mongoose")
const Movies = require('./models/movies');
const cors = require('cors');


mongoose
.connect(
    "?",
)
.then(() =>{
     console.log("connected to database")
})
.catch((err)=>{
    console.log(err.message)
});

const userModel = mongoose.model('foreignmovies');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/length',(req,res) =>{
  userModel.count().then(length =>{
   res.status(200).json({length:length})
  })
})
  
app.get("/movies",(req,res)=>{
  let page = +req.query.page
  let itemsOnePage = +req.query.size
  let query = userModel.find({},{_id:0})
  if (page && itemsOnePage){
    query.skip(itemsOnePage*(page-1)).limit(itemsOnePage)
  }
  query
  .then(moviesdata =>{
    if (moviesdata){
      res.status(200).send(moviesdata)
      return 1
    }
    res.status(400).send(json({message:'Not Found'}))
    return 0
    
    })

    .catch(err=>{
      res.status(404).send(err.message)
    })
    
  });




app.get("/movie/:id",(req,res)=>{
  id = +req.params.id;
  Movies.findOne({id:id},{_id:0})
  .then(moviedata =>{
    if (moviedata){
      res.status(200).send(moviedata)
      return 1
    }
    res.status(400).json({message:moviedata})
    return 0
  })
  .catch(err=>{
    res.status(400).send(err.message)
  })

        
})





// app.get("/video/:id",(req,res)=>{
//     var id = req.params.id 
//     console.log(typeof id);
//     Movies.findOne({id:id},{_id:0})
//     .then(moviedata =>{
//       if (moviedata){
//         // const pythonProcess = spawn('python3', ['hi.py',moviedata.video_url])
//         // pythonProcess.stdout.on('data', (data) => {
//         //   res.status(200).send(JSON.parse(data))
//         // })
//         // return 1
//         res.send
//         (moviedata)
//       }
//       res.status(500).send("Bad")
//       return 0
//     })
//     .catch(err=>{
//       res.status(500).send(err.message)
//     })
 
          
// })
app.get("/video/:id",(req,res)=>{
  id = +req.params.id;
  Movies.findOne({id:id},{_id:0})
  .then(moviedata =>{
    if (moviedata){
        const pythonProcess = spawn('python3', ['hi.py',moviedata.video])
        pythonProcess.stdout.on('data', (data) => {
          res.status(200).send(JSON.parse(data))
        })
      return 1
    }
    res.status(400).json({message:moviedata})
    return 0
  })
  .catch(err=>{
    res.status(400).send(err.message)
  })

        
})





app.get("/name/:name",(req,res)=>{
  name_ = req.params.name
  userModel.find({title: {$regex:new RegExp(name_), $options: 'i'}} )
  .then (moive =>{
    if (moive.length != 0){
        res.status(200).send(moive)
        return 1
    }
    
  res.status(500).send("Write the Name Correctly and with a space between words")
  return 0

})
.catch(err=>{
  res.status(400).send(err.message)
})

})

// app.get("",(req,res)=>{

// })

app.listen(4000,()=>{
    console.log("running")
})
