import { movieBuilder } from "../components/movieComponent.js";

$.get("../db/movie.json")
  .done(data => {
    console.log(data);
    movieBuilder(data.movies);
  })
  .fail(error => {
    console.error(error);
  });
