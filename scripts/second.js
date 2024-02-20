function buttonActiveColor(elementId){
    const buttonColor = document.getElementById(elementId);
    const changeClick = buttonColor.classList.remove('hidden');
    console.log(changeClick);
}
// family
document.getElementById('input-data').addEventListener('keyup',function(event){
    const text = event.target.value;
    const disabledButton = document.getElementById('firstButton');

    if(text === 'Family1'){
        disabledButton.removeAttribute('disabled');
        disabledButton.style.backgroundColor = 'green';
    }
    else{
        disabledButton.setAttribute('disabled', true);
        disabledButton.style.backgroundColor = 'yellow';
        
    }

})
// university

document.getElementById('input-data').addEventListener('keyup',function(event){
    const text = event.target.value;
    const disabledButton = document.getElementById('secondButton');

    if(text === 'University1'){
        disabledButton.removeAttribute('disabled');
        disabledButton.style.backgroundColor = 'green';
    }
    else{
        disabledButton.setAttribute('disabled', true);
        disabledButton.style.backgroundColor = 'yellow';
        
    }

})