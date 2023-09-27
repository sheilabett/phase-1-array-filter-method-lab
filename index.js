// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }


  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }


  function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }

  const driverObjects = [
  ];

  console.log(findMatching);
  console.log(fuzzyMatch); 
  console.log(matchName);