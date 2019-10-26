//  Memory efficent
function heavyDuty(index) {
    const bigArry = new Array(7000).fill('😎');
    console.log('created');
    return bigArry[index];
}
console.log(heavyDuty(7));
console.log(heavyDuty(7));
console.log(heavyDuty(7));

function heavyDuty2(index) {
    const bigArry = new Array(7000).fill('😎');
    console.log('created again'); 
    return function(index) {
        return bigArry[index];
    }
}

const getHeavyDuty = heavyDuty2(700);
console.log(getHeavyDuty(400));
console.log(getHeavyDuty(500));
console.log(getHeavyDuty(600));