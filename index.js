// Code your solution in this file.
function lowerCaseDrivers(array){
    return array.map(function(x){ return x.toLowerCase() })
}

function nameToAttributes(array) {
    return array.map(function(x) {
        let fullNameArr = x.split(" ")
        return Object.assign({}, { firstName: fullNameArr[0], lastName: fullNameArr[1]})
    })
}

function attributesToPhrase(array) {
    return array.map(function(x) {
        return `${x.name} is from ${x.hometown}`
    })
}