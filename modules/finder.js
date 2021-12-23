const data = require('../data/countries.json');
const fuzzy = require('./fuzzy')

let countries = [];

loadCountries();

function loadCountries() {
    for (let key in data) {
        countries.push({
            name: key,
            sea: data[key].sea,
            temp: data[key].temp,
            price: data[key].price,
            en: data[key].en,
            code: data[key].code
        });
    }
}

module.exports = {
    getCountries() {
        return countries;
    },
    findCountries(temp, price, sea) {
        let res = fuzzy.fuzzify(countries, temp, price, sea);
        res.sort((a, b) => b.value - a.value);
        return res;
    }
}