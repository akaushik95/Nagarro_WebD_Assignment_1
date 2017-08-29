var moment = require('moment');

console.log(moment());

function setTimeOutSync(callback, n){
    var waitingTime = moment().add(n/1000, 'seconds');
    var currentTime = moment();
     while(currentTime <= waitingTime){
        currentTime = moment();
    }
    callback();
}

console.log(moment());

var callback = function () {
    console.log("!!! Hello World Synchronously !!!");
}

console.log(moment());

setTimeOutSync(callback, 2000);