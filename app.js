let submitButton = document.querySelector('button[type="submit"]');
let inputList = document.querySelectorAll('input');
let errorMessage = document.querySelectorAll('.error-message');
submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let i = 0;i < inputList.length;i++){
        if(inputList[i].value === ""){
            inputList[i].parentElement.classList.add("incomplete");
            inputList[i].nextElementSibling.style.visibility = "visible";
            if(i === 2){
                inputList[i].value = "email@example/com";
                inputList[i].style.color = "red";
            }
            errorMessage[i].style.display = "block"
        }
        else{
            inputList[i].parentElement.classList.remove('incomplete');
            inputList[i].nextElementSibling.style.visibility = "hidden";
            errorMessage[i].style.display = "none";
        }
    }
});