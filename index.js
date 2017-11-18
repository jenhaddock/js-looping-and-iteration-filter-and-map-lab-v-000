// Code your solution here:
function driversWithRevenueOver(array, revenue){
  return array.filter(function(matchIt){
    return matchIt.revenue >= revenue
  })
}

function driverNamesWithRevenueOver(array, revenue){
  const newArr = [];
  for (const name){
    newArr.push(name(name));
  }
}

function exactMatch(array, revenue){
  return array.filter(function(matchIt){
    return matchIt.revenue === revenue
  })
}
