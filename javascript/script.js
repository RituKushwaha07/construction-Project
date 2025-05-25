// get data

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#succes");
const errorNodes = document.querySelectorAll(".error");



// validation date

function validateForm() {

    let errorFlag = false;

    clearMessages();
    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot  be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;

    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid email address";
        message.classList.add("error-border");
        errorFlag = true;

    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;

    }

    if (!errorFlag) {
        success.innerText = "Success!";
    }


}


// clear error / success message

function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}




// check if email is valid


function emailIsValid(email) {
    let pattern = /\+@\S+\.\S+/;
    return pattern.test(email);

};