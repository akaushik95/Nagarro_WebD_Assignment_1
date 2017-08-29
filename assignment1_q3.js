var arr = [1,2,3,4,5];

function map(arr, callback){
    var brr = [];
    var i = 0;
    while(i < arr.length){
        brr[i] = callback(arr[i]);
        i++;
    }
    return brr;
}

function callback(item){
    return item * item * item;
}

var brr = map(arr, callback);

console.log("Original array: ["+arr+"]");
console.log("Array after MAP: ["+brr+"]");

function forEach(arr, callback1){
        var i = 0;
        while(i < arr.length){
            callback1(arr[i]);
            i++;
        }
}

var callback1 = function(item) {
    console.log(item * item * item);
}

console.log("Array after forEach: ");

forEach(arr, callback1);