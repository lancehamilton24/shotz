const locationBuilder = locationArray => {
  let domString = "";
  locationArray.forEach(location => {
    domString += `
      <div class="col-md-3 location-card" id="locations">
      <div class="card">
       <img class="card-img-top" src="${location.locationImage}" alt="">
        <div class="card-body">
           <h2 class="card-title">${location.name}</h2>
           <h4>${location.locationAddress}</h4>
          <p>${location.time}</p>
      </div>
    </div>
  </div>
          `;
  });
  // Write to the available div
  $("#shotLocations").append(domString);
  // bindEvents();
};

$.get("../db/locations.json")
  .done(data => {
    console.log(data);
    locationBuilder(data.locations);
  })
  .fail(error => {
    console.error(error);
  });
