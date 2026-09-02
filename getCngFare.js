// question 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight=false, waitingMinutes=0){

    let fare = 50;

    if(distance > 2)
        fare = fare + (distance -2) * 15;

    // if wait
    fare = fare + waitingMinutes*2;
    //night charge
    if(isNight)
        fare += fare* 0.2;

    return fare

}
console.log(getCngFare(5, true, 10))