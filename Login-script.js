const username = document.querySelector(".userName")
const password = document.querySelector(".password")
const btnSubmit = document.querySelector(".btnSubmit")
btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault()
    let user = JSON.parse(localStorage.getItem("User"))
    if(user.userName == username.value && user.password == password.value){
        user.login = true
        localStorage.setItem("User", JSON.stringify(user))
        document.location.href = "Home.html";
    }
})