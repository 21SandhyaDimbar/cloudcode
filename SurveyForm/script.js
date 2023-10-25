function submitForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (firstName && lastName && dob && country && (male || female) && profession && email && mobile) {
        var gender = male ? "Male" : "Female";

        var popupContent = `
            <p><span class="label">First Name:</span> ${firstName}</p>
            <p><span class="label">Last Name:</span> ${lastName}</p>
            <p><span class="label">Date of Birth:</span> ${dob}</p>
            <p><span class="label">Country:</span> ${country}</p>
            <p><span class="label">Gender:</span> ${gender}</p>
            <p><span class="label">Profession:</span> ${profession}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Mobile Number:</span> ${mobile}</p>
        `;

        document.getElementById("popup-content").innerHTML = popupContent;
        document.getElementById("popup").style.display = "flex";
        resetForm();
    } else {
        alert(`Please fill out all fields like First name, Last name, DOB, Country, Gender, profession, Email, Mobile Number`);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("survey-form").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
