// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(function(name) {
        return name.toLowerCase()
    })
}

function nameToAttributes(drivers) {
    return drivers.map(function(full_name) {
        const firstName = full_name.split(" ")[0]
        const lastName = full_name.split(" ")[1]
        return {firstName: firstName, lastName: lastName}
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}