import express, { json } from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import Task from './Models/taskModel.js';
const app = express();
app.use(json());
app.use(cors());
const port = 3000;

mongoose.connect('mongodb+srv://Piyush:Jethalal1.@cluster0.yc2ciyh.mongodb.net/TaskManager').then((db)=>{
  console.log("Database connected successfully!")
})


// app.get('/',(req,res)=>{
//     // res.send("<p style='color:red;'>Hello</p>")
//     const obj = {
//         names : [
//             {
//               fName: "Piyush",
//               lName: "Verma",
//             },
//             
//               fName: "Kashish",
//               lName: "Verma",
//             },
//             {
//               fName: "Sahil",
//               lName: "Verma",
//             },
//             {
//               fName: "Sagar",
//               lName: "Verma",
//             },
//           ],
//     };
//     res.json(obj)
// })
app.post("/add-task",(req,res)=>{
  Task.create({
    content: req.body.content,
  }).then((data,err)=>{
    return res.status(200).json({
      message: "Task added Successfully!",
      task: data,
    })
  });

});
app.get("/get-tasks",(req,res)=>{
  Task.find({
    content:"Buy some aloo."
  }).then((data,err)=>{
    return res.status(200).json({
      message:"Task fetched successfully!",
      task:data,
    })
  })
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})