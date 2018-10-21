const movieBuilder = movieArray => {
  let domString = "";
  movieArray.forEach(movie => {
    domString += `
    <div class="col-smd movie-card" id="movies">
    <div class="card">
     <img class="card-img-top" src="${movie.movieImage}" alt="">;
      <div class="card-body">
         <h2 class="card-title">${movie.name}</h2>
         <h4>${movie.genre}</h4>
         <h4>${movie.releaseDate}</h4>
        <p>${movie.description}</p>
    </div>;
  </div>;
</div>;
        `;
  });
  // Write to the available div
  $("#movieTitle").html(domString);
  // bindEvents();
};

$.get("../db/movie.json")
  .done(data => {
    console.log(data);
    movieBuilder(data.movies);
  })
  .fail(error => {
    console.error(error);
  });

// export { movieBuilder };
