const DateOfBirth = document.querySelector("#date-of-birth");
const LuckyNumber = document.querySelector("#lucky-number");
const CheckNumberButton = document.querySelector("#check-number");
const output = document.querySelector("#txtArea");
function CompareValues (add, LuckyNumber) {
    if(add%LuckyNumber===0){
        output.innerText="your BD IS LUCKy";
    }
    else{
        output.innerText="your BD is not so lucky";
    }

}

function CheckBirthdatIsLucky(){
    const DOB = DateOfBirth.value;
    const add = calculateadd(DOB);
    if(add&&DOB)
    CompareValues(add,LuckyNumber.value)
    output.innerText="Please Enter both fields 👿";

}

function calculateadd(DOB) {
    DOB = DOB.replaceAll("-", "");
    let add = 0;
    for (let i=0; i<DOB.length; i++){
        add = add + Number(DOB.charAt(i));
    }
    return add;
}

CheckNumberButton.addEventListener('click', CheckBirthdatIsLucky )