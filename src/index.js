const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api-punto6", require("./routes/routes"));

//starting the server
const main = async () => {
  //database connect
  // await connect();
  // listen server express
  app.listen(3000, () => console.log(`SERVIDOR EN PUERTO ${3000}`));
};

main();
