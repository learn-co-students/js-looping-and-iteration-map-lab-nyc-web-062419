// Code your solution in this file.
function lowerCaseDrivers (drivers){
    return drivers.map(function (driver) {return driver.toLowerCase()})
}

function nameToAttributes (drivers){
    return drivers.map(function (driver) {driver = driver.split(" "); return {firstName: driver[0], lastName: driver[1]}})
}

function attributesToPhrase (drivers){
    return drivers.map(function (driver) {return `${driver.name} is from ${driver.hometown}`})
}