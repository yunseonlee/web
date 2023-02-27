let calculator = document.getElementById("calculator");

function handleSubmit(event)
{
    let mortgageAmount = document.getElementById("mortgageAmount");
    let interestRate = document.getElementById("interestRate");
    let loanLength = document.getElementById("loanLength");
    let postalCode = document.getElementById("postalCode").value;

    let errors=[];
 
     output.innerHTML = "mortgageAmount: " + mortgageAmount.value + 
    "<br />interestRate: " + interestRate.value;
    "<br />loanLength: " + loanLength.value
    "<br />postalCode: " + postalCode.value;

     let new_mortgageAmount = parseInt(mortgageAmount.value);
     let new_interestRate = parseInt(interestRate.value);
     let new_loanLength = parseInt(loanLength.value);
  
    if (Number.isInteger(new_mortgageAmount))
    {
        errors.push("Mortgage Amount must be a positive number.");
    }

    if (Number.isInteger(new_interestRate))
    {
        errors.push("Interest rate Amount must be a positive number.");
        // output.innerHTML = "Interest rate Amount must be a positive number."
    }

    if ( new_loanLength>5 && new_loanLength<30)
    {
        errors.push("Valid Loan length")
    }else{
        errors.push("Loan length must be between 5-30 years.");
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
            console.log(error_list);

    }
    event.preventDefault();
}

calculator.addEventListener("submit",handleSubmit);


 