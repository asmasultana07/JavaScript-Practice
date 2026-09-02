// question 1 - Value Detective

function describeValue (value) {
    const type = typeof value;
    const valueIdentity = value ? "truthy" : "falsy";
    
    return type + " | "+ valueIdentity;
}
// question 2: Bangladesh Weekend Machine 

function getDayType(day){
    const letterCase =  day.toLowerCase();

    switch(letterCase) {
        case "friday":
            case "saturday":
                return "Weekend";
        
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}
// question 3: Username Gatekeeper

function validateUsername(userName){

    if (userName.length < 4)
        return "Too Short";
    if (userName.includes(" "))
        return "No Space Allowed";
    if (userName.toLowerCase().includes("admin"))
        return "Reserved Word";
    else
        return "Available";

}
// question 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight=false, waitingMinutes=0){

    let fare = 50;

    if(distance > 2)
        fare = fare + (distance -2) * 15;

    fare = fare + waitingMinutes*2;
    //
    if(isNight)
        fare += fare* 0.2;

    return fare;

}

// question 5: Run Chase Commentator 

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;
    const requiredRate = (runsNeeded / ballsLeft) * 6;

    if (runsNeeded <= 0) return "Won";
    if (ballsLeft <= 0) return "Lost"

    let verdict;
    if(requiredRate <= 6)
        verdict = "Comfortable";
    else if (requiredRate <= 12)
        verdict = "Tough";
    else
        verdict = "Almost Impossible";

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;

};