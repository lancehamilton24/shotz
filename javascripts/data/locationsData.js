import {
  locationBuilder,
  setLocations,
  showLocations
} from "../components/locationsComponent.js";

$.get("../db/locations.json")
  .done(data => {
    console.log(data);
    setLocations(data.locations);
    locationBuilder(showLocations());
  })
  .fail(error => {
    console.error(error);
  });
