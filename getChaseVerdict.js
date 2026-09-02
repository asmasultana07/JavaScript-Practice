// question 5: Run Chase Commentator 

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;
    const requiredRate = (runsNeeded / ballsLeft) * 6;

    if (runsNeeded <= 0) return "Won";
    if(ballsLeft <= 0) return "Lost"

    let verdict;
    if(requiredRate <= 6)
        verdict = "Comfortable";
    else if (requiredRate <= 12)
        verdict = "Tough";
    else
        verdict = "Almost Impossible";

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;

};
console.log(getChaseVerdict(150, 149, 1));