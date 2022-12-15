// Code your solution in this file!
const distanceFromHqInBlocks = (location) => Math.abs(location - 42);
//Math.abs returns the absoute value of a number, no negative numbers  
// const theDistance = distanceFromHqInBlocks(34)
// console.log(`The distance is ${theDistance}`)

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination)
    return distance * 264
    
}
function calculatesFarePrice(start, destination) {
 const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return 0
    }
    else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02
    }
    else if(distance > 2000 && distance <= 2500){
        return 25
}
else{
    return `cannot travel that far`
}}