const app = new Vue({
    el: '#app',
    data: {
        sea: 1,
        temp: 'Холодно',
        price: 'Очень дешево',
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
                    temp: this.temp,
                    price: this.price,
                    sea: this.sea
                })
            });

            response.json().then(data => {
                this.countries = data.filter((el, idx) => idx < 6);
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