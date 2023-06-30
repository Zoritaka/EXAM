const radioBtn1 = document.querySelector(".rule1")
const radioBtn2 = document.querySelector(".rule2")
const password1 = document.querySelector(".password1")
const password2 = document.querySelector(".password2")
const selectSex = document.querySelector(".selectSex")
const inputEmail = document.querySelector(".email")
const firstName = document.querySelector(".firstName")
const lastName = document.querySelector(".lastName")
const userName = document.querySelector(".userName")
const date = document.querySelector(".date")
const btnSubmit = document.querySelector(".btnSubmit")
btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault()
    let flag = true
    if(password1.value != password2.value){
        flag = false
        alert("Пароли не совпадают!")
    }
    else if(userName.value.length <= 0 ||
            firstName.value.length <= 0 ||
            lastName.value.length <= 0){
        flag = false
        alert("Введите имя пользователя!")
    }
    else if(radioBtn1.checked != true || radioBtn2.checked != true){
        flag = false
        alert("Примите соглашение пользования сайтом!")
    }
    else if(inputEmail.value.split('@').length <= 1){
        flag = false
        alert("Введите электроную почту!")
    }
    if(flag == true){
        const obj = {
            userName: userName.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: inputEmail.value,
            sex: selectSex.value,
            birthday: date.value,
            password: password1.value,
            login: false //проверка, зашел ли сейчас пользователь
        }
        console.log(obj)
        localStorage.setItem('User', JSON.stringify(obj))
        document.location.href = "Thanks.html";
    }
})