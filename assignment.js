


function kilometerToMeter(kilometer) {
    const meter = kilometer * 1000; 
    return meter;
}
const newMeter = kilometerToMeter(95);
console.log(newMeter);



function budgetCalculator(watch, mobile, laptop){
    var cost = 0;
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    cost = watchCost + mobileCost + laptopCost;
    return cost;
}
var totalPurchases = budgetCalculator(15, 30, 5);
console.log(totalPurchases);



function hotelCost(days) {
    var cost = 0
    if (days <= 10){
        cost = days * 100;
    } else if (days <= 20) {
        var first10Days = 10 * 100;
        var remaining = days - 10;
        var second10Days = 10 * 80; 
        cost = first10Days + second10Days;
    } else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = days - 20;
        var otherDays = remaining * 50;
        cost = first10Days + second10Days + otherDays;
    }
    return cost;
}
var totalCost = hotelCost(78);
console.log(totalCost);




function megaFriend(friendsNames) {
    var longestName = friendsNames[0];
    for (var i = 0; i < friendsNames.length; i++) {
        var element = friendsNames[i];
        if (element.length > longestName.length) {
            longestName = element;
        }
    }
    return longestName;
}
var friendsNames = ['Opu', 'Joya', 'Jonaki', 'Rina', 'Tania Chanda', 'Sunil'];
var result = megaFriend(friendsNames);
console.log(result);




