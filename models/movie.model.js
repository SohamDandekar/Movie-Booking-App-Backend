module.exports = (mongoose) => {
  const Movie = mongoose.model(
    "movie",
    mongoose.Schema(
      {
        movieid: { type: Number, require: true },
        title: { type: String, require: true },
        published: { type: Boolean, require: true },
        released: { type: Boolean, require: true },
        poster_url: { type: String, require: true },
        release_date: { type: String, require: true },
        publish_date: { type: String, require: true },
        artists: [
          {
            artistid: { type: Number, require: true },
            first_name: { type: String, require: true },
            last_name: { type: String, require: true },
            wiki_url: { type: String, require: true },
            profile_url: { type: String, require: true },
            movies: Array,
          },
        ],
        genres: [String],
        duration: { type: Number, require: true },
        critic_rating: { type: Number, require: true },
        trailer_url: { type: String, require: true },
        wiki_url: { type: String, require: true },
        story_line: { type: String, require: true },
        shows: [
          {
            id: Number,
            theatre: { name: String, city: String },
            language: String,
            show_timing: String,
            available_seats: String,
            unit_price: Number,
          },
        ],
      },
      { timestamps: true }
    )
  );

  return Movie;
};
