const app = new Vue({
    el: '#app',
    data: {
        sea: 1,
        countries: null,
    },
    methods: {
        async findCountries() {
            let response = await fetch('find', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    minTemp: this.minTemp,
                    maxTemp: this.maxTemp,
                    minPrice: this.minPrice,
                    maxPrice: this.maxPrice,
                    sea: this.sea
                })
            });

            response.json().then(data => {
                console.log(data);
                this.countries = data;
            });
        },
        getFlagImageSource(code) {
            return `https://flagcdn.com/28x21/${code}.png`;
        },
        getTourLink(name) {
            return `https://www.1001tur.ru/${name}`;
        }
    }
});