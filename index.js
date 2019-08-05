// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let newArr = drivers.map(d => d.toLowerCase());
  return newArr;
}
function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let driverFirst = driver.split(" ")[0];
    let driverLast = driver.split(" ")[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}
function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
