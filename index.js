// Code your solution in this file.
function lowerCaseDrivers(array){
    return array.map(function(driver){
        return driver.toLowerCase()
    })
}

function nameToAttributes(array){
    return array.map(function(driver){
        const firstName = driver.split(" ")[0]
        const lastName = driver.split(" ")[1]
        return {firstName: firstName, lastName: lastName}})
    }

    function attributesToPhrase(drivers){
        return drivers.map(function(driver){
            return `${driver.name} is from ${driver.hometown}`
        })
    }