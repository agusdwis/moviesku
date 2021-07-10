import React from "react";

const MovieList = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {Data.map((item, id) => (
        <div key={id} className="group cursor-pointer px-2 my-2 relative">
          <div className="group overflow-hidden relative">
            <img
              src={item.Poster}
              alt={item.Title}
              width={400}
              className=" h-1/2 sm:h-96 transform duration-300 hover:scale-105 rounded-sm opacity-60 hover:opacity-100"
            />
            <button className="button group-hover:hidden absolute rounded-none p-2 px-3 right-0 bottom-0">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          <div className="absolute inset-y-1/2 top-2/3 px-5">
            <p className="group-hover:text-white font-semibold">{item.Title}</p>
            <p className="group-hover:text-white font-medium text-xs">
              {item.Year}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

const Data = [
  {
    Title: "Batman: The Killing Joke",
    Year: "2016",
    imdbID: "tt4853102",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Dark Knight Returns, Part 2",
    Year: "2013",
    imdbID: "tt2166834",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Mask of the Phantasm",
    Year: "1993",
    imdbID: "tt0106364",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTRiMWM3MGItNjAxZC00M2E3LThhODgtM2QwOGNmZGU4OWZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Year One",
    Year: "2011",
    imdbID: "tt1672723",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Assault on Arkham",
    Year: "2014",
    imdbID: "tt3139086",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDU1ZGRiY2YtYmZjMi00ZDQwLWJjMWMtNzUwNDMwYjQ4ZTVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Movie",
    Year: "1966",
    imdbID: "tt0060153",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmM1OGIzM2UtNThhZS00ZGNlLWI4NzEtZjlhOTNhNmYxZGQ0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Gotham Knight",
    Year: "2008",
    imdbID: "tt1117563",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2I0YTFjOTUtMWYzNC00ZTgyLTk2NWEtMmE3N2VlYjEwN2JlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Arkham City",
    Year: "2011",
    imdbID: "tt1568322",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDE2ZDFhMDAtMDAzZC00ZmY3LThlMTItMGFjMzRlYzExOGE1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
];
