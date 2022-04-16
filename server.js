const db = require("./models");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

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


app.get("/", (req, res)=>{
  res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

require("./routes/movie.routes")(app);
require("./routes/genre.routes")(app);
require("./routes/artist.routes")(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}.`);
});
