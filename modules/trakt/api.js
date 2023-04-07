//const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests

/*
 * Functions for Trakt API requests.
 */
//const fetch = require('node-fetch');

//  async function getWeather(){
//   const myAPIkey="838ad7ccc906c867180a815bf6a07c75";
//   const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Toronto&appid=838ad7ccc906c867180a815bf6a07c75&units=metric';

//     var response=await fetch(url)
   
// 	//  .then(res => res.json())
// 	//  .then(json => console.log(json))
// 	//  .catch(err => console.error('error:' + err));
//     return await response.json();
// }

async function getWeatherniagarafalls(){
  const myAPIkey="838ad7ccc906c867180a815bf6a07c75";
  const url = 'https://api.openweathermap.org/data/2.5/forecast?id=6087892&appid=838ad7ccc906c867180a815bf6a07c75&units=metric';
    var response=await fetch(url)
    return await response.json();
}

async function getWeatherElora(){
  const myAPIkey="838ad7ccc906c867180a815bf6a07c75";
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Elora&appid=838ad7ccc906c867180a815bf6a07c75&units=metric';
    var response=await fetch(url)
    return await response.json();
}
async function getWeatherHuntsville(){
  const myAPIkey="838ad7ccc906c867180a815bf6a07c75";
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=huntsville&appid=838ad7ccc906c867180a815bf6a07c75&units=metric';
    var response=await fetch(url)
    return await response.json();
}
async function getAirbnbniagarafalls(){
  const url2 = 'https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=ChIJvRBz0jTL1IkRkwMHIgbSFbo&display_name=Toronto&totalRecords=10&currency=USD&adults=2';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b3949f8e2emsh2b016b91257ef20p1be27djsn6e9c7444d3b1',
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    }
};
    var response=await fetch(url2,options)
    return await response.json();
}

async function getAirbnbelora(){

  const url2 = 'https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=ChIJ4-RdC2iVK4gRGqxW-MSQcMo&display_name=Elora&totalRecords=10&currency=USD&adults=2';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b3949f8e2emsh2b016b91257ef20p1be27djsn6e9c7444d3b1',
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    }
};
    var response=await fetch(url2,options)
    return await response.json();
}

async function getAirbnbHuntsville(){

  const url2 = 'https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=ChIJ6bc6oS1yKk0RebaT3-Ks9os&display_name=Elora&totalRecords=10&currency=USD&adults=2';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b3949f8e2emsh2b016b91257ef20p1be27djsn6e9c7444d3b1',
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    }
};
    var response=await fetch(url2,options)
    return await response.json();
}


module.exports={
  getAirbnbniagarafalls,getWeatherElora,getWeatherniagarafalls,getWeatherHuntsville, getAirbnbelora,getAirbnbHuntsville
};