const express = require("express");

const app = express();
// const PORT = 3000;

const connetDB = require('./Config/db')

connetDB()

const path = require('path');

app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'))
);

// app.use(express.json());

const getPictureRoute = require("./Route/getPictureRoute");
app.use("/api", getPictureRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});