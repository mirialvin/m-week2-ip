
// variables
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Validation function

function additionSubmit() {
    Event.preventDefault();
    var gender = document.getElementById('gender').value;
    var date = document.getElementById('date').value;
    date = new Date(date);

    if (gender === 'male') {
        document.getElementById('result').innerHTML = " For Him Born On " + weekDays[date.getDay()] + ',' + " Your Akan Name Is " + maleNames[date.getDay()]
    } else if (gender === 'female') {
        document.getElementById('result').innerHTML = "For Her Born On " + weekDays[date.getDay()] + ',' + " Your Akan Name Is " + femaleNames[date.getDay()]
    } else {
        document.getElementById('result').innerHTML = "Invalid date or blank date. Please try again."
    }
}