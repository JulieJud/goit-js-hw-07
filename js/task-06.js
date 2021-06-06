const validationInput = document.querySelector('#validation-input');
const inputLength = validationInput.dataset.length;

validationInput.addEventListener('change', controlOfValidation);

function controlOfValidation(event) {
    console.log(event.currentTarget.value);
  if (event.currentTarget.value.length == inputLength) {
      
    console.log (typeof (event.currentTarget.value.length))
     console.log(typeof(inputLength))     
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
       
    }
   else if (event.currentTarget.value.length === 0) {
   
   validationInput.classList.remove("valid");
    validationInput.classList.remove("invalid");
  }

    else
    {
        
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
    }
    
