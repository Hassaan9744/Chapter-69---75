
var success = "linear-gradient(to right, #00b09b, #96c93d)";
var danger = "linear-gradient(to right, #b01a00, #a65446)";

//notification Function
function notification(msg, color) {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

document.getElementById('output').innerHTML = '';

function output(result) {
    return document.getElementById('output').innerHTML = result;
}

function clear() {
    return document.getElementById('output').innerHTML = '';
}

function clearOutput() {
    let outputBox = document.getElementById('output').innerHTML;
    if (!outputBox.length) {
        return notification(" Output is already empty", danger);
    }
    else {
        clear();
        notification(" Output has been cleared", success);
    }

}

function getFieldValue(ID) {
    return document.getElementById(ID).value;
}
// Email Validator
var emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function getRandomId() {
    return Math.random().toString(36).slice(2);
}
// Age Calculator
function ageYear() {
    let dob = getFieldValue("dob");
    dob = new Date(dob);
    let currentDate = new Date();
    let month_diff = currentDate.getTime() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getFullYear();
    let age = Math.abs(year - 1970);
    return age + " years";
}
var users = [];

function handleSubmit() {
    event.preventDefault();

    let firstName = getFieldValue("firstName");
    let lastName = getFieldValue("lastName");

    let email = getFieldValue("email");
    let dob = getFieldValue("dob");

    firstName = firstName.trim();
    firstName = firstName.charAt(0).toUpperCase() + firstName.toLowerCase().slice(1);

    lastName = lastName.trim();
    lastName = lastName.charAt(0).toUpperCase() + lastName.toLowerCase().slice(1);

    email = email.trim();

    if (firstName.length < 3) {
       notification(" Please Enter your Name correctly!", danger);
        return;
    }

    if (!emailValidation.test(email)) {
       notification(" Please enter your Email correctly!", danger);
        return;
    }

    if (!dob) {
       notification(" Please select your Date of Birth!", danger);
        return;
    }


    var user = {
        firstName,
        lastName,
        fullName: firstName + ' ' + lastName,
        email,
        dob,
        role: "Student",
        status: "Active",
        Id: getRandomId(),
        Age: ageYear()
    }


    for (let i = 0; i < users.length; i++) {
        if (user.email == users[i].email) {
           notification(" This user is already registered", danger);
            return;
        }
    }
   notification(" A new user has been added successfully", success);
    users.push(user);
}

function printUsersConsole() {
    if (!users.length) {
        returnnotification("Please Add User First", danger);
    }
   notification(" Users has been printed in the console", success);
    return console.table(users);
}

function showTable() {
    if (!users.length) {
        returnnotification("Please Add User First", danger);
    }
    let tableStart = '<div class="table-responsive"><table class="table">';
    let tableHead = '<thead><tr><th>#</th><th scope = "col">First Name</th><th scope = "col">Last Name</th><th scope = "col">Email</th><th scope = "col">Date of Birth</th><th scope = "col">Age</th></tr></thead>';
    let tableEnd = '</table></div>';
    let tableBody = '';
    for (let i = 0; i < users.length; i++) {
        tableBody += '<tr><td>' + (i + 1) + '</td><td>' + users[i].firstName + '</td><td>' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob + '</td><td>' + users[i].Age + '</td></tr>';
    }
    let table = tableStart + tableHead + '<tbody>' + tableBody + '</tbody>' + tableEnd;
    output(table);
   notification(" Users has been printed", success);
}