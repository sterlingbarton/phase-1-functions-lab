// Code your solution in this file!
const headquarters = 42


function distanceFromHqInBlocks(location){
    if(location > headquarters){
       let aboveHeadquarters = location - headquarters;
       return aboveHeadquarters
    } else if(location < headquarters) {
        let belowHeadquarters = headquarters - location;
        return belowHeadquarters
}
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264
}


function distanceTravelledInFeet(start, destination){
    if (start > destination){
       let distance = start - destination;
       return distance * 264
    } else if(destination > start){
        let distance = destination - start;
        return distance * 264
    }
}



function calculatesFarePrice(start, destination){
    const distanceInFeet = distanceTravelledInFeet(start, destination)
    if(distanceInFeet < 400){
        return 0
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        return (distanceInFeet - 400) * .02
    }else if(distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25
    } else if(distanceInFeet > 2500){
        return "cannot travel that far"
    }
}