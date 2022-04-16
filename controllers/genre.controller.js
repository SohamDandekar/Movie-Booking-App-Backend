const db = require("../models");
const Genre = db.genre;

exports.findAllGenres = (req, res) => {
    Genre.find({}).then((data) => {
        res.status(200).json({
          genres: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Some error occured while fetching the genres.",
        });
      });
}