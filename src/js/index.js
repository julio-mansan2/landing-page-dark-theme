const inputSubmit = document.getElementById('submit')
const inputText = document.getElementById('email')
const errorMessage = document.querySelector('.error-message')

inputSubmit.addEventListener ('click', () =>   
{
    event.preventDefault()
    if ((inputText.value === "" || inputText.validity.valid === false)) {            
        errorMessage.classList.remove('valido')
        errorMessage.classList.add("aparecer")
    } else {
        errorMessage.classList.remove("aparecer")
        errorMessage.classList.add('valido')
    }
}
)