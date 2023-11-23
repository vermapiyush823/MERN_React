import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
const app = express();
app.use(cors());
const port = 3000;

mongoose.connect('mongodb+srv://Piyush:Jethalal1.@cluster0.yc2ciyh.mongodb.net/').then((db)=>{
  console.log("Database connected successfully!")
})


app.get('/',(req,res)=>{
    // res.send("<p style='color:red;'>Hello</p>")
    const obj = {
        names : [
            {
              fName: "Piyush",
              lName: "Verma",
            },
            {
              fName: "Kashish",
              lName: "Verma",
            },
            {
              fName: "Sahil",
              lName: "Verma",
            },
            {
              fName: "Sagar",
              lName: "Verma",
            },
          ],
    };
    res.json(obj)
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})