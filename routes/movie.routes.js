module.exports = (app) => {
    const movies = require("../controllers/movie.controller");
    var router = require("express").Router();
  
    //Retrieve all Movies
    router.get("/", movies.findAllMovies);
  
    // Retrieve movie by ID
    router.get("/:movieId", movies.getMovieById);

    //Retrieve movies shows by ID
    router.get("/shows/:movieId", movies.findShows);

    app.use("/api/movies", router);
  };