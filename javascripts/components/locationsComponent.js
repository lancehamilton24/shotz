// import { movieBuilder } from "../components/movieComponent.js";

let locations = [];

const setLocations = newArray => {
  locations = newArray;
};

const showLocations = () => {
  return locations;
};

const sortLocations = e => {
  const time = e.target.id;
  if (time === "morning") {
    locationBuilder(locations);
  }
  if (time === "afternoon") {
    const filteredPets = locations.filter(x => x.time === time);
    locationBuilder(filteredPets);
  }
  if (time === "evening") {
    const filteredPets = locations.filter(x => x.time === time);
    locationBuilder(filteredPets);
  }
  if (time === "after dark") {
    const filteredPets = locations.filter(x => x.time === time);
    locationBuilder(filteredPets);
  }
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

export { locationBuilder, setLocations, showLocations, sortLocations };
