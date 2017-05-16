// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function(err, temp){
//   if(err){
//     console.log('err', err);
//   }else{
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise err', err);
// })

function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject("Variable a or b is not a number!");
    }
  });
}

addPromise(5, 6).then(function(temp){
  console.log('success', temp);
}, function(err){
  console.log('err', err);
})

addPromise(2, 3).then(function(temp){
  console.log('success', temp);
}, function(err){
  console.log('err', err);
})

addPromise(5, 'aaa').then(function(temp){
  console.log('success', temp);
}, function(err){
  console.log('err', err);
})
