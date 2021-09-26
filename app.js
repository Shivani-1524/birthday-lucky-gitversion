const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const notice = document.querySelector(".privacy-notice");

outputBox.style.display = "none";
notice.style.display = "block";

setTimeout(function displayNotice() { notice.style.display = "none"; }, 5000);

function checkLuckNumber() {
    if (dateOfBirth.value && luckyNumber.value) {
        if (!isNaN(luckyNumber.value)) {
            const bdayDate = dateOfBirth.value;
            const sum = calculateSum(bdayDate);
            if (sum && bdayDate) {
                checkValues(sum, luckyNumber.value);
            }
        }
        else {
            outputBox.style.display = "block";
            outputBox.innerText = "Please enter valid inputs 😡";
        }
    }
    else {
        outputBox.style.display = "block";
        outputBox.innerText = "Please enter both the fields 😡";
    }
}

function checkValues(sum, luckyNumber) {
    outputBox.style.display = "block";
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your birthday is lucky 😎";
    } else {
        outputBox.innerText = "Your birthday is unlucky 😶";
    }
}

function calculateSum(bdayDate) {
    bdayDate = bdayDate.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < bdayDate.length; i++) {
        sum = sum + Number(bdayDate.charAt(i));
    }
    return sum;
}

checkNumberButton.addEventListener('click', checkLuckNumber);