var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res = [];
var count = 0;
var test = function(cb){
  if(count < arr.length){
    setTimeout(function () {
      if (count % 2 == 0) {
        res.push(arr[count]);
      }
      count++;
      console.log("res in timeout", res);
      return test(cb);
    }, 1000);
  } else {
    cb(null, res)
  }
};
test(function(err, cbRes){
  console.log("cbRes in callback", cbRes);
});
console.log("res global",res);