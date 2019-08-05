// Code your solution in this file.
 
function lowerCaseDrivers(drivers) {
    const lilDrivers = drivers.map(function (d) { 
        return d.toLowerCase();
    });
    return lilDrivers;
}

function nameToAttributes(drivers) {
    return drivers.map(function (d) {
        const name = d.split(" ");
        const first = name[0];
        const last = name[1];
        return { firstName: first, lastName: last };
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function(d) {
        return `${d.name} is from ${d.hometown}`
    });
}