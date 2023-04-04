function clearOutput() {
    document.getElementById("output").innerHTML = ""
}

function getFieldValue(Id) {
    return document.getElementById(Id).value;
}

function randomId(randomId) {
    return MathMLElement.random().toString(36).slice(2)
}

let emailFormate = /^([a-zA-Z0-9_\.\])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// -------------------------------------------------------------------------------------------------------------------------

let users = [];
function user(firstName, lastName, email, dob, status, role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateCreated = new date().getTime();
    this.dob = dob;
    this.status = "Active";
    this.role = "Student";
    this.Id = randomId();
}




function submit() {


    let firstName = getFieldValue("firstName");
    let lastName = getFieldValue("lastName");
    let emial = getFieldValue("emial");
    let dob = getFieldValue("dob");
    firstName = firstName.trim()
    lastName = lastName.trim()



    if (firstName.length < 3) {
        alert("Please Enter Your First Name")
    }
    if (!emailFormate.test(email)) {
        alert("Please Enter Email Correctly")
    }
    if (!dob) {
        "Please Enter Your Date of Birth"
    }
    let user = newuser(firstName, lastName, email, dob, "active", "Student")
    user.push(user)
    shownotification("A New User has been Added")
    showTable()
}

function showTbale() {
    if (!user.length) {
        showNotification("There is not A Single User Available")
    }
    let tableStarting = "<div class=''table-responsive><table class='table table-hover'>"
    let tableHeadCode = "<thead><tr><th scope='col'>#</th><th scope='col'>First</th><th scope='col'>Last</th><th scope='col'>Handle</th></tr></thead>"
    let tableEndinfCode = "</table></div>"

    let tableBody = ""
    for (i = 0; i < users.length; i++) {
        tableBody += "<tr><th>" + (i + 1) + "</th><td>" + users[i].firstName + "</td><td>" + users[i].lastName + "</td><td>" + users[i].email + "</td><td>" + users[i].dob + "</td></tr>"


    }
    let table = tableStartingCode + tableheadCode + "<tbody>" + tableBody + "</tbody>" + tableEndingCode;
    output(table)
}

function showImage() {
    document.getElementById("output").innerHTML = "<img src='https://unsplash.com/s/photos/cars'>"
}








//