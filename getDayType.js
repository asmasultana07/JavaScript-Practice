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
console.log(getDayType(Friday))