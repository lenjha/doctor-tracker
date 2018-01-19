var apiKey = require('./.env').apiKey;

export function findDoctor(symptoms, docName, compile){

  const xhr = $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&name=${docName}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`);

// once you have api link, pull...
  xhr.done(function(responses){
    const names = [];
    const addresses = [];
    const phoneNumbers = [];
    const websites = [];
    const availabilities = [];
    const info = responses.data;

    info.forEach(function(info){
      names.push(info.profile.first_name + " " + info.profile.last_name);
      addresses.push(info.practices[0].visit_address.street + " " + info.practices[0].visit_address.city + " " + info.practices[0].visit_address.state + " " + info.practices[0].visit_address.zip);
      phoneNumbers.push(info.practices[0].phones[0].number);

      if (info.practices[0].website) {
        websites.push(info.practices[0].website);
      } else {
        websites.push("N/A");
      }
      if (info.practices[0].accepts_new_patients === true) {
        availabilities.push("Available!")
      } else {
        availabilities.push("Full.")
      }

      console.log(responses);
    });

    compile(names, addresses, phoneNumbers, websites, availabilities);

  });

  xhr.fail(function(response){
    console.log(response);
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
