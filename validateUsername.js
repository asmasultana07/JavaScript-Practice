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
console.log(validateUsername("rahim123"))