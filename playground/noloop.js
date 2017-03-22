const stocks = [
    { symbol: 'XFX', price: 240.22, volume: 23432 },
    {
        symbol: 'TNZ',
        price: 332.19,
        volume: 234
    }, {
        symbol: 'JXJ',
        price: 120.22,
        volume: 5232
    }
];

const results = stocks
    .filter(({price}) => price >= 150.00
    .map(({symbol}) => symbol);

results.forEach(symbol => console.log(symbol));
