var nums = Array.from({ length: 1000 }, (_, b) => b + 1 );
var worker = new Worker('worker.js');
worker.postMessage(nums)
worker.onmessage = function(data){
    console.log(data)    
}