// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(d => d.toLowerCase())
}

function nameToAttributes(drivers) {
    return drivers.map(d => { return { firstName: d.split(' ')[0], lastName: d.split(' ')[1] } })
}

function attributesToPhrase(objects) {
    return objects.map(o => `${o.name} is from ${o.hometown}`)
}