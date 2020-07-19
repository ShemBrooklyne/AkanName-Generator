// Expected Akan Names in accordance to day of birth.


//input function
function getInput() {
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("date").value);

    if (century < 19 || century > 20) {
        alert("Invalid Century Format!")
    
    }
    if (dayOfMonth < 1 || dayOfMonth > 31) {
        alert("Invalid Date")
    
    }
    if (month < 1 || month > 12) {
        alert("Invalid Month")

    }
    if (year < 1918 || year > 2020) {
        alert("Invalid Year")
        return (false)
    }
}
    

// function that gets the current year we are in
// function getYear() {
//     var d = new Date();
//     var n = d.getFullYear();
//     document.getElementById("year").innerHTML = n;
// }


//function formula that calculates the  days, month && year
function calculateDay() {
    getInput();
    dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7) - 1;
    return (Math.floor(dayOfWeek));
}
console.log(calculateDay);



//function that checks the Akan day ===> by the help of the above function
function output() {
    day = calculateDay();
    checkGender();
}


let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let boyNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let girlsNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

//Function that checks the gender
function checkGender() {
    var gen = document.getElementsByName("genders");
    if (gen[0].checked == true) {
        var gender = "male";
    } else if (gen[1].checked == true) {
        var gender = "female";
    }


    switch (gender) {
        case gender = "male":
            switch (day) {
                case 0 || -0:
                    document.getElementById("generate").innerHTML = "Born on a sunday." + "  " + "Your Akan name is " + boyNames[0];
                    break;
                case 1 || -1:
                    document.getElementById("generate").innerHTML = "Born on a Monday ." + " " + "Your Akan name is " + boyNames[1];
                    break;
                case 2 || -2:
                    document.getElementById("generate").innerHTML = "Born on a Tuesday ." + " " + "Your Akan name is " + boyNames[2];
                    break;
                case 3 || -3:
                    document.getElementById("generate").innerHTML = "Born on a Wednesday ." + "Your Akan name is " + boyNames[3];
                    break;
                case 4 || -4:
                    document.getElementById("generate").innerHTML = "Born on a Thursday . " + "Your Akan name is " + boyNames[4];
                    break;
                case 5 || -5:
                    document.getElementById("generate").innerHTML = "Born on a Friday." + "  " + "Your Akan name is " + boyNames[5];
                    break;
                case 6 || -6:
                    document.getElementById("generate").innerHTML = "Born on a Saturday ." + "Your Akan name is " + boyNames[6];
                    break;
                default:

            }
            break;
        case gender = "female":
            switch (day) {
                case 0 || -0:
                    document.getElementById("generate").innerHTML = "Born on a Sunday. " + "Your Akan name is " + girlsNames[0];
                    break;
                case 1 || -1:
                    document.getElementById("generate").innerHTML = "Born on a Monday. " + "Your Akan name is " + girlsNames[1];
                    break;
                case 2 || -2:
                    document.getElementById("generate").innerHTML = "Born on a Tuesday. " + "Your Akan name is " + girlsNames[2];
                    break;
                case 3 || -3:
                    document.getElementById("generate").innerHTML = "Born on a Wednesday. " + "Your Akan name is " + girlsNames[3];
                    break;
                case 4 || -4:
                    document.getElementById("generate").innerHTML = "Born on a Thursday. " + "Your Akan name is " + girlsNames[4];
                    break;
                case 5 || -5:
                    document.getElementById("generate").innerHTML = "Born on a Friday. " + "Your Akan name is " + girlsNames[5];
                    break;
                case 6 || -6:
                    document.getElementById("generate").innerHTML = "Born on a Saturday. " + "Your Akan name is " + girlsNames[6];
                    break;

            }
            break;
        default:
    }
}


