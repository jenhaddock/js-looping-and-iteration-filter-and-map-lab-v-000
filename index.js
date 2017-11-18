// Code your solution here:
function driversWithRevenueOver(array, revenue){
  return array.filter(function(matchIt){
    return matchIt.revenue >= revenue
  })
}

function driverNamesWithRevenueOver(array, revenue){
  
}

function exactMatch(array, value){
  return array.filter(function(matchIt){
    return matchIt.value === value
  })
}
