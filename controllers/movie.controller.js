const { genre } = require("../models");
const db = require("../models");
const Movie = db.movie;

exports.findAllMovies = (req, res) => {
  let status = req.query.status;
  let title = req.query.title;
  let genres = req.query.genres;
  let artists = req.query.artists;
  let startDate = req.query.start_date;
  let endDate = req.query.end_date;
  //, release_date: {"$gte":Date(startDate),"$lt":Date(endDate)}
  let query = {};

  if (status && status === "PUBLISHED") {
    query = { published: true };
  } else if (status === "RELEASED") {
    query = { released: true };
  }

  if (title) query.title = title;

  if (genres) {
    let genresArray = genres.split(",");
    query.genres = { $all: genresArray };
  }

  if (artists) {
    const splitArtistArray = artists.split(",");
    let firstNames = [];
    let lastNames = [];
    for (let j = 0; j < splitArtistArray.length; j++) {
      let singleSplit = splitArtistArray[j].split(" ");
      firstNames.push(singleSplit[0]);
      lastNames.push(singleSplit[1]);
    }
    query["artists.first_name"] = { $all: firstNames };
    query["artists.last_name"] = { $all: lastNames };
  }

  if (startDate && endDate) {
    query.release_date = { $gte: Date(startDate), $lte: Date(endDate) };
  }

  Movie.find(query)
    .then((data) => {
      if (data.length !== 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Movie not Found." });
      }
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "Some error occured while fetching the movie." });
    });
};

exports.getMovieById = (req, res) => {
  let movieId = req.params.movieId;

  Movie.findOne({ movieid: movieId })
    .then((data) => {
      res.status(200).json({
        movie: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Some error occured while fetching the movie.",
      });
    });
};

exports.findShows = (req, res) => {
  let movieId = req.params.movieId;

  Movie.find({ movieid: movieId }, { shows: 1 })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: "Some error occured while fetching the movie shows.",
      });
    });
};
