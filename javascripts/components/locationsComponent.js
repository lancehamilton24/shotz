import { movieBuilder } from "../components/movieComponent.js";

let filmLocations = [];

const setLocations = newArray => {
  filmLocations = newArray;
};

const showLocations = () => {
  return filmLocations;
};

const locationBuilder = locationArray => {
  let domString = "";
  locationArray.forEach(location => {
    domString += `
      <div class="col-sm-4 location-card" id="locations">
      <div class="card">
       <img class="card-img-top" src="${location.locationImage}" alt="">
        <div class="locations-body">
           <h2 class="card-title">${location.name}</h2>
           <h4>${location.locationAddress}</h4>
          <p class="time">${location.time}</p>
      </div>
    </div>
  </div>
          `;
  });
  // Write to the available div
  $("#shotLocations").append(domString);
  // bindEvents();
};

const sortLocations = e => {
  const time = e.target.id;
  if (time === "morning") {
    const filteredLocations = locations.filter(x => x.time === time);
    console.log(filteredLocations);
    locationBuilder(filteredLocations);
  }
  if (time === "afternoon") {
    const filteredLocations = locations.filter(x => x.time === time);
    locationBuilder(filteredLocations);
  }
  if (time === "evening") {
    const filteredLocations = locations.filter(x => x.time === time);
    locationBuilder(filteredLocations);
  }
  if (time === "after dark") {
    const filteredLocations = locations.filter(x => x.time === time);
    locationBuilder(filteredLocations);
  }
};

$("#morningButton").on("click", e => {
  e.preventDefault();
  sortLocations;
  // sortLocations();
});

$.get("../db/locations.json")
  .done(data => {
    data = jQuery.parseJSON(this.responseText);
    console.log(data);
    setLocations(data.locations);
    locationsBuilder(showLocations());
  })
  .fail(error => {
    console.error(error);
  });

export { locationBuilder };
