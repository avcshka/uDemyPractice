// const user = {
//     4: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// console.log(typeof(Object.keys(user)[0]));

const shops = [
    {oil: 200},
    {rice: 500},
    {bread: 50}
]

const budget = [5000, 15000, 25000];

const map = new Map();

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})

console.log(map.get(shops[0]));