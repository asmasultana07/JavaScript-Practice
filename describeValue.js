// question 1 - Value Detective

function describeValue (value) {
    const type = typeof value;
    const valueIdentity = value ? "truthy" : "falsy";
    
    return type + " | "+ valueIdentity;
}
console.log(describeValue());