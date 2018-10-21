const movieBuilder = movieArray => {
  let domString = "";
  movieArray.forEach(movie => {
    domString += `
    <div class="col-md movie-card" id="movies">
    <div class="card">
     <img class="card-img-top" src="${movie.movieImage}" alt="">
      <div class="card-body">
         <h2 class="card-title">${movie.name}</h2>
         <h4>${movie.genre}</h4>
         <h4>${movie.releaseDate}</h4>
        <p>${movie.description}</p>
    </div>
  </div>
</div>
        `;
  });
  $("#movieTitle").append(domString);
};

export { movieBuilder };
