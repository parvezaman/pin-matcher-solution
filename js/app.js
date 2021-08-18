function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        // console.log(pin);
        return pin;
    }
    else{
        // console.log(pin, 'less than 4 digit and calling function again');
        return getPin();
    }
}


function generatePin(){
    // alert('k');
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    // console.log('any key clicked'); //eta oi parent er under a jto button ace sobar jonnei same output show kore; but amra chai specifice output show korle specific jinis output dibe. 
    // console.log(event.target.innerText); //event.target.innerText will give you specific value


    const number = event.target.innerText;

    // to filter out if number is a number or not (eg: <, c etc.)
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
        // console.log(number, 'is not a number');
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;

        calcInput.value = newNumber;
    }
})


function verifyPin(){
    // console.log('k');
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');

    if(pin == typedNumbers){
        // alert('matched');
        successNotification.style.display = 'block';
        failNotification.style.display = 'none';

    }
    else{
        // alert('didnt match');
        failNotification.style.display = 'block';
        successNotification.style.display = 'none';

    }
}