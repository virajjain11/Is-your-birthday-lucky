const date = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky");
const submitButton = document.querySelector("#check");
const checkBox = document.querySelector("#checkBox");

function checkLuck(sum, luckyNumber){
     if(sum%luckyNumber===0){
       checkBox.value ="Your birthday is Lucky🤩"
   }
   else{
    checkBox.value ="Yourbirthday is not Lucky!!🙁"
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
        checkLuck(sum,luckyNumber.value);
    }else{
        checkBox.value = "Enter both the Value😡"
    }     
}

submitButton.addEventListener("click",validate);
