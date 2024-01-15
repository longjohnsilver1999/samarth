// express
const connectDB = require("./config/config");

const express = require("express");
const app = express();
//body parser
app.use(express.json());

//connect to database
connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
