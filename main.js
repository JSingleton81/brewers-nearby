// GET https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3
// const assert = require('assert');


let brewerList = [];
const listElement = document.getElementById("list");

fetch("https://api.openbrewerydb.org/v1/breweries?by_city=austin&per_page=50")
.then(res => res.json())
.then(brewer => {
  brewerList = brewer;
  displayBeerList()
  console.log("Brewer-List:", brewerList)
});

const displayBeerList = () => {
  brewerList.map((near) => {
    const brewerNear = document.createElement("div");
    brewerNear.innerHTML= `
    <h1>${near.name}</h1>
    <h2>${near.phone}</h2>
    <h2>${near.street}</h2>
    <h2>${near.city} ${near.state}</h2>
    `
    listElement.appendChild(brewerNear);

  }); 
}


