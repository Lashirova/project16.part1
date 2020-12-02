// Selecting page elements
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch");
​const getCountry = function(country){
    const urlName = 'https://restcountries.eu/rest/v2/name/'
    //const country = countryInput.value;
   //const endpoint = `${url} ${country}`;
    
    const request = new XMLHttpRequest();
    request.responseType = 'json';
  
    request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
    const [data] = request.response; 
    renderCountry(data); 
        }
    };
    request.open('GET', `${urlName} ${country}`);
    request.send();
  }
  // Clear previous results and display results to webpage 
btn.addEventListener('click', displayCountry);
​
function getCountryAndNeighbour(country){
 let url = "https://restcountries.eu/rest/v2/name/"
 let alpha = "https://restcountries.eu/rest/v2/alpha/"   
 const request = new XMLHttpRequest();
 request.addEventListener('load', function() {
     
    if (request.readyState === XMLHttpRequest.DONE) {
    const [data] = JSON.parse(this.responseText); 
    let neighbour = data.borders;
    renderCountry(data, "neighbour"); 
    if(!neighbour) return; 
    request2.open('GET', `${url} ${country} ${alpha} ${neighbour}`);
    request.send();
   }
    });
}
btn.addEventListener('click', displayCountries);
