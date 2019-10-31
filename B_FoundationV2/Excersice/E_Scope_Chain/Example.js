var x = 'x';

function a() {
    console.log(x);
}
a();

function b(){
    var x = 'y';
    function c() {
        console.log(x);
    }
    c();
}
b();
a();