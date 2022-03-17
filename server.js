const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// const express = require("express");
// const app = express();

// app.get("/movies", (req, res)=>{
//     res.send("All Movies Data in JSON format from Mongo DB");
// });

// app.get("/genres", (req, res)=>{
//     res.send("All Genres Data in JSON format from Mongo DB");
// });

// app.get("/artists", (req, res)=>{
//     res.send("All Artists Data in JSON format from Mongo DB");
// });

// const PORT = 9000;
// app.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}.`);
// });
