function getNumber(isNumber){
    const phoneField = document.getElementById('phone-number-field');
    const phoneFieldString = phoneField.value;
    const phoneFieldNumber = parseInt(phoneFieldString);

    let newPhoneTotal
    if(isNumber === true){
         newPhoneTotal = phoneFieldNumber + 1;
    }
    else{
        newPhoneTotal = phoneFieldNumber - 1;
    }
    phoneField.value = newPhoneTotal
    return newPhoneTotal
}
function totalPhonePrice(phoneTotal){
    const totalPhonePrice = phoneTotal * 1219;
    const phonePrice = document.getElementById("phone-price");
    phonePrice.innerText =totalPhonePrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const phoneTotal = getNumber(true);
   totalPhonePrice(phoneTotal);

//    subtotal
    subtotal()
    
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneTotal = getNumber(false);
    totalPhonePrice(phoneTotal);
    subtotal()

 })