const data = require('../data/countries.json');

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
    findCountries(minTemp, maxTemp, minPrice, maxPrice, sea) {
        return countries.filter(x =>
            x.temp >= minTemp &&
            x.temp <= maxTemp &&
            x.price >= minPrice &&
            x.price <= maxPrice &&
            x.sea == sea);
    }
}