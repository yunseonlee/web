let calculator = document.getElementById("calculator");


function handleSubmit(event)
{'use strict'
handleReset();
    var forms=document.querySelectorAll('.needs-validation')
    let mortgageAmount = document.getElementById("mortgageAmount");
    let interestRate = document.getElementById("interestRate");
    let loanLength = document.getElementById("loanLength");
    let postalCode = document.getElementById("postalCode").value;

    let errors=[];
 
 

     let new_mortgageAmount = parseInt(mortgageAmount.value);
     let new_interestRate = parseInt(interestRate.value);
     let new_loanLength = parseInt(loanLength.value);
console.log(postalCode.value);
 
  
    if (Number.isInteger(new_mortgageAmount))
    {
        console.log("mortgage amount is positive");
 

    }else{
        errors.push("Mortgage Amount must be a positive number.");
 


    }

    if (Number.isInteger(new_interestRate))
    {
        console.log("Interest amount is positive");
       // Element.interestRate.add("is-valid");
    }else{
        errors.push("Interest Amount must be a positive number.");
       // Element.interestRate.add("is-invalid");

    }

    if ( new_loanLength>5 && new_loanLength<30)
    {
       console.log("Valid Loan length");
      // Element.loanLength.add("is-valid");

    }else{
        errors.push("Loan length must be between 5-30 years.");
     //   Element.loanLength.add("is-invalid");

    }

    console.log(postalCode.length);
    if(postalCode.length>6 && postalCode.length<8 && postalCode[0]=="L")
    {
        console.log("L and 7 character working");
    }else{
        errors.push("Must be located in Hamilton.");

    }
    if(errors.length>0)
    {
          let error_list ="<ul>";
 
         for (let i=0;i<errors.length; i++)
         {
            error_list += "<li>" + errors[i] + "</li>";
         }
            error_list += "</ul>";

            output.innerHTML = error_list;
 
    }else{
        handleReset();
    }
    console.log(new_mortgageAmount);
    console.log(new_interestRate);
    console.log(new_loanLength);
    console.log(postalCode);
 


 
    event.preventDefault();

}
function handleReset(event){
    console.log("reset");
     output.innerHTML = "";
  
    new_mortgageAmount=0;
    new_interestRate=0;
    new_loanLength=0;
     error_list="";
    errors=[];
    console.log(error_list);
    console.log(new_mortgageAmount);
    console.log(new_interestRate);
    console.log(new_loanLength);
    console.log(postalCode);



    }
calculator.addEventListener("click",handleSubmit);
reset.addEventListener("click",handleReset);


 