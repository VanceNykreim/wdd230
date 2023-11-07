const rating = document.getElementById("rating")
rating.addEventListener('change', () => {
    document.getElementById("currentrating").innerHTML = rating.value;
})

const confirm = document.getElementById("confirm")
confirm.addEventListener('blur', ()=>{
    const password= document.getElementById("password")
    if (password.value != confirm.value) {
        document.getElementById("message").innerHTML="Passwords do not match!"
        password.value=""
        confirm.value=""
        password.focus()
    }
    else{
        document.getElementById("message").innerHTML=""
    }
})


//date for footer
let today1 = new Date();
document.querySelector("#currentyear").textContent = today1.getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;
