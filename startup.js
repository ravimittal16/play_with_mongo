const mongoose = require("mongoose");

// connect to local database connection
// it will create database if not exists
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/todos");
};

//creating table Schema using mongoose
const todo = new mongoose.Schema({
  title: String,
  description: String,
  createdOn: Date,
  isDeleted: Boolean,
  isCompleted: Boolean
});

// creating model using mongoose
const Todo = mongoose.model("todo", todo);

//connecting to database
connect()
  .then(async _connection => {
    // creating first record
    const _todo = await Todo.create({
      title: "Create car",
      description: "create car",
      createdOn: Date()
    });
    console.log(_todo);
  })
  .catch(e => console.error(e));
