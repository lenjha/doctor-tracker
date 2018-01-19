import { findDoctor } from "./../dev/js/main-logic.js";

$(document).ready(function() {


// compile looped information template to put up in #results
function compile(names, addresses, phoneNumbers, websites, availabilities){

  for (var i = 0; i < (names.length); i++) {
    let name = names[i];
    let address = addresses[i];
    let phoneNumber = phoneNumbers[i];
    let website = websites[i];
    let availability = availabilities[i];
    let template = `<div class="item">
      <h3>Dr. ${name}</h3>
      <p>Address: ${address}</p>
      <p>Phone: ${phoneNumber}</p>
      <!--<p>${website}</p>-->
      <p>Availability: ${availability}</p>
    </div>
    <hr>`

    $("#results").append(template);
  }
}


  $("#submit-form").click(function(){
    event.preventDefault();
    const symptoms = $("#symptoms").val();
    const docName = $("#doctor-name").val();

    findDoctor(symptoms, docName, compile);
    // console.log(names.length);
    // compile();
    // compile(names, addresses, phoneNumbers, websites, availabilities);
  });
});
