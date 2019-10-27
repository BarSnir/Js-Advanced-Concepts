// scoped let
const array = [1, 2, 3, 4];
for(let i=0; i < array.length; i++) {
    setTimeout(function(){
        console.log(`i am at index ${i}.`)
    }, 3000);
}

// var global
const array2 = [1, 2, 3, 4];
for(var i=0; i < array2.length; i++) {
    setTimeout(function(){
        console.log(`i am at index ${i}.`)
    }, 3000);
}


// isotled scope even with var keyword;
const array3 = [1, 2, 3, 4];
for(var i=0; i < array3.length; i++) {
    (function(closureI) {
        setTimeout(function(){
            console.log(`i am at index ${closureI}.`)
        }, 3000);
    })(i);
}