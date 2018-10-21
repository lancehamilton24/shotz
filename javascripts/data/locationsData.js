import { locationBuilder } from "../components/locationsComponent.js";

$.get("../db/locations.json")
  .done(data => {
    console.log(data);
    locationBuilder(data.locations);
  })
  .fail(error => {
    console.error(error);
  });
