const date = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky");
const submitButton = document.querySelector("#check");
const checkBox = document.querySelector("#checkBox");

function checkLuck(sum, luckyNumber){
     if(sum%luckyNumber===0){
       checkBox.value ="You are Lucky"
   }
   else{

    checkBox.value ="You are not Lucky"
   }
}
function validate(){
    var dob = date.value;
    dob= dob.replaceAll("-","");
    var sum = 0;
    for(let i =0; i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    if(sum&&luckyNumber.value){
        checkLuck(sum,luckyNumber.value)
    }else{
        checkBox.value = "Enter both the Value"
    }     


}

// function checkNumber(dobb){
//     dobb= dobb.replaceAll("-","");
//     let sum = 0;
//     for(i = 0; i<dobb.length;i++){
//         sum = sum + dob.charArt(i);
//     }
//     return sum;
// }
// submitButton.addEventListener("click", validateNumber);

submitButton.addEventListener("click",validate);
