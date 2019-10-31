const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    console.log(list.length-1);
    var item = list.pop();
    
    if (item) {
        setTimeout(removeItemsFromList, 0);
    }
};
 
removeItemsFromList();