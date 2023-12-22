function getpin() {
    const pin = generatepin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getpin();
    }
}

function generatepin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getpin();

    const displayField = document.getElementById('display-pin');
    displayField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previousTupeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTupeNumber.split('');
            digits.pop();
            const remainDigits = digits.join('');
            typeNumberField.value = remainDigits;
        }

    } else {
        const newTypedNumber = previousTupeNumber + number;
        typeNumberField.value = newTypedNumber;
    }
}
)

document.getElementById('btn-submit').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;


    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
        typedNumberField.value = '';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
        const TryField = document.getElementById('text-left');
        const TryString = TryField.innerText;
        const TryNumber = parseInt(TryString);
        const remainningTry = TryNumber - 1;
        TryField.innerText = remainningTry;
        if (remainningTry < 1) {
            document.getElementById('btn-submit').style.display = 'none';
            TryField.innerText = 'you are blocked';
            document.getElementById('hide').style.display = 'none'
        }
    }
})