// Code your solution here:
function driversWithRevenueOver(array, revenue){
  return array.filter(function(matchIt){
    return matchIt.revenue >= revenue
  })
}

function driverNamesWithRevenueOver(array, revenue){
  return driversWithRevenueOver(array, revenue).map(driver => driver.name)
}

function exactMatch(array, object){
  return array.filter((driver) => {
    for (const key in driver) {
      if(driver[key] === object[key]){
        return driver;
      }
    }
  }
)
}
