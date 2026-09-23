/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let arr=[]
    let kelvin= celsius + 273.15
    let fahrenheit= celsius * 1.80 + 32.00
arr.push(kelvin)
arr.push(fahrenheit)
return arr
};