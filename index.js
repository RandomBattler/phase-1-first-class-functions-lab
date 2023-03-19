// Code your solution in this file!
function returnFirstTwoDrivers(d){
    return [d[0], d[1]];
}

function returnLastTwoDrivers(d){
    
    return [d[d.length -2], d[d.length -1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult){
    return function(fare){
        return fare * mult;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}
