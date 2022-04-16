module.exports = (app) => {
    const artists = require("../controllers/artist.controller");
    var router = require("express").Router();
  
    //Retrieve all Genres
    router.get("/artists", artists.findAllArtists);

    app.use("/api", router);
  };