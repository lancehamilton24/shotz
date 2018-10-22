// import { sortLocations } from "./components/locationsComponent.js";

const sortEvents = () => {
  $("#morningButton").on("click", e => {
    e.preventDefault();
    $(locations).toggle("#morning");
    console.log("morning");
  });

  $("#afternoonButton").on("click", e => {
    e.preventDefault();
    console.log("afternoon");
  });

  $("#eveningButton").on("click", e => {
    e.preventDefault();
    console.log("evening");
  });

  $("#darkButton").on("click", e => {
    e.preventDefault();
    console.log("after dark");
  });
};

sortEvents();
