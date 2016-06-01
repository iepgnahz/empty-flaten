'use strict';

function double_to_one(collection) {
  var arr = [];
  var num = 0;
  for(var i = 0; i < collection.length; i++) {
    if(collection[i].length){
      for(var j = 0; j < collection[i].length; j++) {
        num = collection[i][j];
        if(scan(arr,num,arr.length)) {
          arr.push(num);
        }
      }
    } else {
      num = collection[i];
      if(scan(arr,num,arr.length)) {
        arr.push(num);
      }
    }
  }
  return arr;
}

function scan(arr,num,index) {
  var flag = true;
  for(var i = 0; i < index; i++) {
    if(num == arr[i]){
      flag = false;
    }
  }
  return flag;
}

module.exports = double_to_one;
