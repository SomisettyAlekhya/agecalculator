const bth=document.getElementById("btn1");
const birthday1=document.getElementById("birthday");
const answer1=document.getElementById("answer");
function calculateage(){
    const value1=birthday1.value;
    //strictly checking and returning boolean value
    if(value1=== " ")
    {
    alert("Please Enter your birthday");
    }
    else{
        const age=Age(value1);
        answer1.innerText=`Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}
function Age(value1){
    const currentdate1=new Date();
    const birthdaydate=new Date(value1);
    let age=currentdate1.getFullYear()-birthdaydate.getFullYear();
    const month=currentdate1.getMonth()-birthdaydate.getMonth();
    
      return age;
}
bth.addEventListener("click",calculateage);