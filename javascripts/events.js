// import { sortLocations } from "./components/locationsComponent.js";

// const sortEvents = () => {
//   $("#morningButton").on("click", e => {
//     e.preventDefault();
//     $(locations).toggle("#morning");
//     console.log("morning");
//   });

//   $("#afternoonButton").on("click", e => {
//     e.preventDefault();
//     console.log("afternoon");
//   });

//   $("#eveningButton").on("click", e => {
//     e.preventDefault();
//     console.log("evening");
//   });

//   $("#darkButton").on("click", e => {
//     e.preventDefault();
//     console.log("after dark");
//   });
// };

$(document).ready(function() {
  $("#locationSearch").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $(".location-card").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});

// sortEvents();
