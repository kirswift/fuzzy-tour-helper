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
        return name;
    }
}

const fuzzyTemperatures = [
    new FuzzySet('Холодно', 5, 10, 15),
    new FuzzySet('Прохладно', 10, 15, 20),
    new FuzzySet('Тепло', 15, 20, 25),
    new FuzzySet('Жарко', 20, 25, 30),
    new FuzzySet('Очень жарко', 25, 30, 35),
]

const fuzzyPrices = [
    new FuzzySet('Очень дешево', 20, 25, 60),
    new FuzzySet('Дешево', 40, 50, 80),
    new FuzzySet('Средне', 60, 80, 100),
    new FuzzySet('Дорого', 80, 100, 120),
    new FuzzySet('Очень дорого', 100, 120, 140),
]