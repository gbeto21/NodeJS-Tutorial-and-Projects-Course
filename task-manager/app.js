require('dotenv').config()
const express = require("express");
//Import routes
const tasks = require("./routes/tasks");
//Import database
const connectDB = require("./db/connect");

const app = express();
const PORT = 3000;

//JSON
app.use(express.json());

//Routes
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    //Run server
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start()