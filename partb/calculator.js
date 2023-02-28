//let calculator = document.getElementById("calculator");


function handleSubmit(event)
{ 
 
     var calculator=document.querySelectorAll('.needs-validation');
    let mortgageAmount = document.getElementById("mortgageAmount");
    let interestRate = document.getElementById("interestRate");
    let loanLength = document.getElementById("loanLength");
    let postalCode = document.getElementById("postalCode").value;
    console.log(postalCode);

    let errors=[];
 
 

    var new_mortgageAmount = parseInt(mortgageAmount.value);
    var new_interestRate = parseInt(interestRate.value);
    var new_loanLength = parseInt(loanLength.value);
console.log(postalCode.value);
 
  
    if (Number.isInteger(new_mortgageAmount) && new_mortgageAmount>0)
    {
        console.log("mortgage amount is positive");
         mortgageAmount.classList.add("is-valid");
         mortgageAmount.classList.remove("is-invalid");
          

    }else{
        errors.push("Mortgage Amount must be a positive number.");
        mortgageAmount.classList.add("is-invalid");
        mortgageAmount.classList.remove("is-valid");
    }

    if (Number.isInteger(new_interestRate) && new_interestRate>0)
    {
        console.log("Interest amount is positive");
        interestRate.classList.add("is-valid");
        interestRate.classList.remove("is-invalid");
     }else{
        errors.push("Interest Amount must be a positive number.");
        interestRate.classList.add("is-invalid");
        interestRate.classList.remove("is-valid");
    }

    if ( new_loanLength>5 && new_loanLength<30)
    {
       console.log("Valid Loan length");
       loanLength.classList.add("is-valid");
       loanLength.classList.remove("is-invalid");
    }else{
        errors.push("Loan length must be between 5-30 years.");
        loanLength.classList.add("is-invalid");
        loanLength.classList.remove("is-valid");
    }

    console.log(postalCode.length);
    if(postalCode.length==7 && postalCode[0]=="L")
    {
        console.log("L and 7 character working");
        // postalCode.classList.add("is-valid");
        // postalCode.classList.remove("is-invalid");
    }else{
        errors.push("Must be located in Hamilton.");
    // postalCode.classList.add("is-valid");
//         postalCode.classList.remove("is-valid");
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
    alert("No error found!");
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


 