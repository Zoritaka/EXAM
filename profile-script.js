const block = document.querySelector(".block")
let user = JSON.parse(localStorage.getItem("User"))
console.log(user)
if(user != null){
    block.innerHTML = `
    <div class="blockImg">
    <img src="img/icon.png" alt="">
    </div>
    <div class="txt">
    <h2>${user.userName}</h2>
    <h3>Money: 0тг</h3>
    <h3>email: ${user.email}</h3>
    </div>
    <div class="txt">
    <h2>${user.sex}</h2>
    <h3>Birthday: ${user.birthday}</h3>
    <h3>password: ${user.password}</h3>
    <button class="signOut" onclick="signOut()">sign out</button>
    </div>
    `
}
function signOut(){
    let user = JSON.parse(localStorage.getItem("User"))
    user.login = false
    localStorage.setItem("User", JSON.stringify(user))
    document.location.href = "Login.html";
}