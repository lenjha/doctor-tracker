import { findDoctor } from "./../dev/js/main-logic.js";

$(document).ready(function() {


// compile looped information template to put up in #results
function compile(names, addresses, phoneNumbers, websites, availabilities){

  for (var i = 0; i < (names.length); i++) {
    let name = names[i];
    let address = addresses[i];
    let phoneNumber = phoneNumbers[i];
    // let website = websites[i];
    let availability = availabilities[i];
    let template = `<div class="item">
      <h3>${name}</h3>
      <p>${address}</p>
      <p>${phoneNumber}</p>
      <!--<p>${website}</p>-->
      <p>${availability}</p>
    </div>
    <hr>`

    $("#results").append(template);
  }
}


  $("#submit-form").click(function(){
    event.preventDefault();
    let symptoms = $("#symptoms").val();

    findDoctor(symptoms, compile);
    // console.log(names.length);
    // compile();
    // compile(names, addresses, phoneNumbers, websites, availabilities);
  });
});
