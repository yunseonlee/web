let calculator = document.getElementById("calculator");

function handleSubmit(event)
{
    let mortgageAmount = document.getElementById("mortgageAmount");
    let interestRate = document.getElementById("interestRate");

    let loanLength = document.getElementById("loanLength");
    let postalCode = document.getElementById("postalCode");


     output.innerHTML = "mortgageAmount: " + mortgageAmount.value + 
    "<br />interestRate: " + interestRate.value;
    "<br />loanLength: " + loanLength.value
    "<br />postalCode: " + postalCode.value;

     let new_mortgageAmount = parseInt(mortgageAmount.value);
     let new_interestRate = parseInt(interestRate.value);
     let new_loanLength = parseInt(loanLength.value);

 
    if (Number.isInteger(new_mortgageAmount))
    {
        output.innerHTML = "Mortgage Amount must be a positive number."
    }

    if (Number.isInteger(new_interestRate))
    {
        output.innerHTML = "Interest rate Amount must be a positive number."
    }
    if ( new_loanLength>5 && new_loanLength<30)
    {
        output.innerHTML = "Valid Loan length"
    }else{
        output.innerHTML = "Loan length must be between 5-30 years."
    }
    event.preventDefault();
}

calculator.addEventListener("submit",handleSubmit);


 