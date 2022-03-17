module.exports = (mongoose) => {
    const Artist = mongoose.model(
      "artist",
      mongoose.Schema(
        {
          artistid: { type: Number, require: true },
          first_name: { type: String, require: true },
          last_name: { type: String, require: true },
          wiki_url: { type: String, require: true },
          profile_url: { type: String, require: true },
          movies: Array
        },
        { timestamps: true }
      )
    );
  
    return Artist;
  };