function triangular(x, a, b, c) {
    return Math.max(Math.min((x - a) / (b - a), (c - x) / (c - b)), 0)
}

class FuzzySet {
    constructor(name, a, b, c) {
        this.name = name;
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getValue(x) {
        return triangular(x, this.a, this.b, this.c);
    }

    getName() {
        return this.name;
    }
}

const fuzzyTemperatures = [
    new FuzzySet('Холодно', 9, 10, 18),
    new FuzzySet('Прохладно', 10, 18, 22),
    new FuzzySet('Тепло', 18, 22, 27),
    new FuzzySet('Жарко', 22, 27, 30),
    new FuzzySet('Очень жарко', 27, 34, 35),
]

const fuzzyPrices = [
    new FuzzySet('Очень дешево', 20000, 25000, 60000),
    new FuzzySet('Дешево', 40000, 50000, 80000),
    new FuzzySet('Средне', 60000, 80000, 100000),
    new FuzzySet('Дорого', 80000, 100000, 120000),
    new FuzzySet('Очень дорого', 100000, 135000, 140000),
]


module.exports = {
    fuzzify(countries, temp, price, sea) {
        let tempSet = fuzzyTemperatures.find(x => x.getName() === temp);
        let priceSet = fuzzyPrices.find(x => x.getName() === price);
        return countries.map(x => {
            let tempValue = tempSet.getValue(x.temp);
            let priceValue = priceSet.getValue(x.price);
            return {...x, value: tempValue + priceValue};
        }).filter(y => y.sea === Boolean(parseInt(sea)));
    }
}

