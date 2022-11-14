const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}


// Мой первый вариант (хардкод)
function isBudgetEnough1(data) {
    let budget = data.budget;
    let areaShops = [];
    let sumAreaShops = 0;

    data.shops.forEach((area) => {
        areaShops.push(area.length * area.width);
    })

    for (let i = 0; i < areaShops.length; i++) {
        sumAreaShops += areaShops[i];
    }

    let volumeShoppingMall = data.height * sumAreaShops;
    let priceOfArea = data.moneyPer1m3 * volumeShoppingMall;

    budget > priceOfArea ? console.log("Бюджета достаточно") : console.log("Бюджета недостаточно");
}

// Второй вариант (хороший код +-)
function isBudgetEnough(data) {
    let sumAreaShops = 0;

    data.shops.forEach((area) => {
        sumAreaShops += area.length * area.width;
    })

    data.budget > data.moneyPer1m3 * (data.height * sumAreaShops)
        ? console.log("Бюджета достаточно")
        : console.log("Бюджета недостаточно");
}

isBudgetEnough(shoppingMallData);