class Grocery {
    name: string;
    qty: number;

    constructor(name: string, qty: number) {
        this.name = name;
        this.qty = qty;
    }
};

const g1 = new Grocery("Mangos", 6);
const g2 = new Grocery("Baking Soad", 1);
const g3 = new Grocery("Bananas", 6);
const g4 = new Grocery("Yogurt", 10);
const g5 = new Grocery("Eggs", 24);
const g6 = new Grocery("Bread", 1);
const g7 = new Grocery("V8 Juice", 4);
const g8 = new Grocery("Oatmeal", 2);

const gList = [g1, g2, g3, g4, g5, g6, g7, g8];

var html = '';
for (var i = 0; i < gList.length; i++) {
    html += '<li>' + gList[i].name + ': ' + gList[i].qty + '</li>';
}
console.log(html);
document.getElementById('list').innerHTML = '<ul>' + html + '</ul>';