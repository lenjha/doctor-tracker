var apiKey = require('./../../.env').apiKey;

export function findDoctor(symptoms, compile){

  const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&skip=0&limit=10&user_key=${apiKey}`);
  // const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&user_key=${apiKey}`)

// once you have api link, pull...
  xhr.done(function(responses){

    const names = [];
    const addresses = [];
    const phoneNumbers = [];
    const websites = [];
    const availabilities = [];
    console.log("symptoms is " + symptoms);
    console.log("xhr is " + xhr);

    responses.forEach(function(response){
      names.push(response.data.practices.name);
      addresses.push(response.data.practices.visit_address.street + " " + response.data.practices.visit_address.street2 + " " + response.data.practices.visit_address.city + " " + response.data.practices.visit_address.state + " " + response.data.practices.visit_address.zip);
      //alternate addresses
        //addresses.push(response.data.practices.visit_address.street + " " + response.data.practices.visit_address.street2 + " " + response.data.practices.visit_address.city + " " + response.data.practices.visit_address.state + " " + response.data.practices.visit_address.zip)
      phoneNumbers.push(response.data.practices.phones.number);
      websites.push(response.data.practices.website);
      availabilities.push(response.data.practices.accepts_new_patients);
    });
    console.log(names);
    console.log(addresses);
    console.log(phoneNumbers);
    console.log(websites);
    console.log(availabilities);
  });

  xhr.fail(function(){
    console.log("FAILURE FAILURE")
  });

  // return with doc info:
      // VAR(response?).data.practices.name
      // VAR(response?).data.practices.visit_address.street
      // VAR(response?).data.practices.visit_address.street2
      // VAR(response?).data.practices.visit_address.city
      // VAR(response?).data.practices.visit_address.state
      // VAR(response?).data.practices.visit_address.zip
      // VAR(response?).data.practices.website
      // VAR(response?).data.practices.phones.number
      // VAR(response?).data.practices.accepts_new_patients

      // if doctors=[""], return notification saying "NO DOCTORS FOUND"

    // render(names, addresses, phoneNumbers, websites, availabilities)
}
