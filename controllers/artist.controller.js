const db = require("../models");
const Artist = db.artist;

exports.findAllArtists = (req, res) => {
    Artist.find({}).then((data) => {
        res.status(200).json({
          artists: data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Some error occured while fetching the artists.",
        });
      });
}