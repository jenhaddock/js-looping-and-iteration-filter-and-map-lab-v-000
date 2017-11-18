// Code your solution here:
function driversWithRevenueOver(array, revenue){
  return array.filter(function(matchIt){
    return matchIt.revenue >= revenue
  })
}

function driverNamesWithRevenueOver(array, revenue){
  return driversWithRevenueOver(array, revenue).map(name.to_s)
}

function exactMatch(array, revenue){
  return array.filter(function(matchIt){
    return matchIt.revenue === revenue
  })
}
