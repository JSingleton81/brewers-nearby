const assert = require('assert');

let brewerList = [];
const testfetch = async () => {

  await fetch("https://api.openbrewerydb.org/v1/breweries?by_city=austin&per_page=50")
  .then(res => res.json())
  .then(brewer => {
    brewerList = brewer;
  });
}

if (typeof describe === 'function') {
  describe('#fetch()', () => {
    it('should have a list of 50 items', async () => {
      await testfetch()
      assert.deepEqual(brewerList.length, 50);
    });
    it('first item should 521 Brewing Co', async () => {
      await testfetch()
      assert.deepEqual(brewerList[0].name, "(512) Brewing Co");
    });
  });
} 
