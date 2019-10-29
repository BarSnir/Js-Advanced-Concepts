function lastYear(){
    let year = this.getFullYear();
    return year - 1;
}
// console.log(lastYear('1900-10-10')); working
Date.prototype.lastYear = lastYear;
console.log(new Date('1900-10-10').lastYear());

function newMapFunc() {
    for(let i=0; i < this.length; i++) {
        console.log(this[i]+'🗺');
    }
}
Array.prototype.map = newMapFunc;
[1, 2, 3].map();