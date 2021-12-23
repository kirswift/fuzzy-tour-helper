const app = new Vue({
    el: '#app',
    data: {
        minTemp: 15,
        maxTemp: 25,
        minPrice: 30000,
        maxPrice: 70000,
        sea: 1,
        countries: null,
    },
    methods: {
        temperatureSlider() {
            if (this.minTemp > this.maxTemp) {
                let tmp = this.maxTemp;
                this.maxTemp = this.minTemp;
                this.minTemp = tmp;
            }
        },
        priceSlider() {
            if (this.minPrice > this.maxPrice) {
                let tmp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = tmp;
            }
        },
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