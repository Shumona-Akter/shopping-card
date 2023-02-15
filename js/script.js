// step-1 increment input
document.getElementById("btn-case-plus").addEventListener('click', function(){
    // get input value
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberFieldString  =caseNumberField.value;
    const previousIncrementCaseNumber = parseInt(caseNumberFieldString);

    // sect input value
    const newIncrementCaseNumber = previousIncrementCaseNumber + 1;
    caseNumberField.value = newIncrementCaseNumber;


    // chnage totsl price
    const caseTotalPrice = newIncrementCaseNumber * 59;
    const totalCase = document.getElementById("case-total");
    totalCase.innerText = caseTotalPrice;


})

// step 2 decrement input

document.getElementById('btn-case-minus').addEventListener("click", function(){
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberFieldString = caseNumberField.value;
    const previousDecremetCaseNumber = parseInt(caseNumberFieldString);

    // set value
    const newDecrementNumber = previousDecremetCaseNumber - 1;
    caseNumberField.value = newDecrementNumber
    
      // chnage totsl price
      const caseTotalPrice = newDecrementNumber * 59;
      const totalCase = document.getElementById("case-total");
      totalCase.innerText = caseTotalPrice;
});


// using  fiunction


// function getNumber(inputFild){
//     const caseNumberField = document.getElementById("case-number-field");
//     const caseNumberFieldString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberFieldString); 
//     let newNumber;

//     if(inputFild === true){
//         newNumber = previousCaseNumber + 1;
//     }
//     else{
//         newNumber = previousCaseNumber -1;
//     }
//     caseNumberField.value = newNumber;
//     return newNumber
// }

// function getTotalPrice(){
    
// }

// document.getElementById("btn-case-plus").addEventListener('click', function(){
//     const newIncrementCaseNumber = getNumber(true);
//     const totalPrice = newIncrementCaseNumber * 59
//     let newTotal = totalPrice * 59;

//     const caseTotal = document.getElementById('case-total');
//     caseTotal.innerText = newTotal

// })
// document.getElementById("btn-case-minus").addEventListener('click', function(){
//     const newDecrimentCaseNumber = getNumber(false);
// })