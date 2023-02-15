// parint er funtion
function getTextElementValueId(GetId){
    const idDeclararion = document.getElementById(GetId);
    const idDeclararionSring = idDeclararion.innerText;
    const  idDeclararionNumber= parseInt(idDeclararionSring);
    return idDeclararionNumber;
}
// setValue
function setValue(elementId , value){
    const elementSet = document.getElementById(elementId);
    elementSet.innerText = value;
}
// sub total function
function subtotal(){
    const phoneTotalAmmount = getTextElementValueId('phone-price');
    const caseTotalAmmount = getTextElementValueId('case-total');

    const totalPrice = phoneTotalAmmount + caseTotalAmmount;
    setValue('sub-totals', totalPrice);

    const totalTax = (totalPrice * 0.01).toFixed(2);
    const finalTotalTax = parseFloat(totalTax);
    setValue('tax-total', finalTotalTax);

    const finalAmmount = totalPrice + parseFloat(totalTax);
    setValue('final_ammount', finalAmmount)




}
