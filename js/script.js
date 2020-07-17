// Akan logic-able

// var maleNames = {
//     Sunday: "Kwasi",
//     Monday: "Kwadwo",
//     Tuesday: "Kwabena",
//     Wednesday: "Kwaku",
//     Thursday: "Yaw",
//     Friday: "Kofi",
//     Saturday: "Kwame",
// }

// var femaleNames = {
//     Sunday: "Akosua",
//     Monday: "Adwoa",
//     Tuesday: "Abenaa",
//     Wednesday: "Akua",
//     Thursday: "Yaa",
//     Friday: "Afua",
//     Saturday: "Ama",
// }

function output() {
    var day = document.getElementsByClassName("DD").value;
    var dd = parseInt(day);
    var month = document.getElementsByClassName("MM").value;
    var mm = parseInt(month);
    var year = document.getElementsByClassName("YY").value;
    var yy = parseInt(year);
    var cc = (yy-1)/100+1;
    var result = parseInt(((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7

    // Akan Names in relation to their exact days
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    

    if (document.getElementById("male")) {
        var gender = "male";
    }
    else {
        var gender = "female";
    }

    if (mm < 1 || mm > 12 || mm === 2 && dd > 29) {
        alert("Invalid Month!");
    }


    

    if (Math.ceil(result) == 0 && gender === "male") {
        document.getElementsByClassName("output").innerHTML = ("Born on Sunday, your Akan name is "+ maleNames[0]);
    }
    else if (Math.ceil(result) == 1 && gender === "male") {
        document.getElementsByClassName("output").innerHTML = ("Born on Monday, your Akan name is "+ maleNames[1]);
    }
    else if (Math.ceil(result) == 2 && gender === "male") {
        document.getElementsByClassName("output").innerHTML = ("Born on Tuesday, your Akan name is "+ maleNames[2]);
    }
    else if (Math.ceil(result) == 3 && gender === "male") {
        document.getElementsByClassName("output").innerHTML = ("Born on Wednesday, your Akan name is "+ maleNames[3]);
    }
    else if (Math.ceil(result) == 4 && gender === "male") {
        document.getElementsByClassName("output").innerHTML = ("Born on Thursday, your Akan name is "+ maleNames[4]);
    }
    else if (Math.ceil(result) == 5 && gender === "male") {
        document.getElementsByClassName("output").innerHTML = ("Born on Friday, your Akan name is "+ maleNames[5]);
    }
    else if (Math.ceil(result) == 6 && gender === "male") {
        document.getElementsByClassName("output").innerHTML = ("Born on Saturday, your Akan name is "+ maleNames[6]);
    }
    else if (Math.ceil(result) == 0 && gender === "female") {
        document.getElementsByClassName("output").innerHTML = ("Born on Sunday, Your Akan name is "+ femaleNames[0]);
    }
    else if (Math.ceil(result) == 1 && gender === "female") {
        document.getElementsByClassName("output").innerHTML = ("Born on Monday, Your Akan name is "+ femaleNames[1]);
    }
    else if (Math.ceil(result) == 2 && gender === "female") {
        document.getElementsByClassName("output").innerHTML = ("Born on Tuesday, Your Akan name is "+ femaleNames[2]);
    }
    else if (Math.ceil(result) == 3 && gender === "female") {
        document.getElementsByClassName("output").innerHTML = ("Born on Wednesday, Your Akan name is "+ femaleNames[3]);
    }
    else if (Math.ceil(result) == 4 && gender === "female") {
        document.getElementsByClassName("output").innerHTML = ("Born on Thursday, Your Akan name is "+ femaleNames[4]);
    }
    else if (Math.ceil(result) == 5 && gender === "female") {
        document.getElementsByClassName("output").innerHTML = ("Born on Friday, Your Akan name is "+ femaleNames[5]);
    }
    else if (Math.ceil(result) == 6 && gender === "female") {
        document.getElementsByClassName("output").innerHTML = ("Born on Saturday, Your Akan name is "+ femaleNames[6]);
    }
    else {
    alert("Congratulations!🥳 This is not an ad, check your Akan name below😂");
    }
    alert ("If it does not display, please input in your birth details😗👉");
}