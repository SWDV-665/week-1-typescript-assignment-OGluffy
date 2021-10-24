var Grocery = /** @class */ (function () {
    function Grocery(name, qty) {
        this.name = name;
        this.qty = qty;
    }
    return Grocery;
}());
;
var g1 = new Grocery("Mangos", 6);
var g2 = new Grocery("Baking Soda", 1);
var g3 = new Grocery("Bananas", 6);
var g4 = new Grocery("Yogurt", 10);
var g5 = new Grocery("Eggs", 24);
var g6 = new Grocery("Bread", 1);
var g7 = new Grocery("V8 Juice", 4);
var g8 = new Grocery("Oatmeal", 2);
var gList = [g1, g2, g3, g4, g5, g6, g7, g8];
var html = '';
for (var i = 0; i < gList.length; i++) {
    html += '<li>' + gList[i].name + ': ' + gList[i].qty + '</li>';
}
console.log(html);
document.getElementById('list').innerHTML = '<ul>' + html + '</ul>';