let CartItems = JSON.parse(localStorage.getItem("Items"))
const sale = document.querySelector(".sale")
const lstItems = document.querySelector(".lstItems")
const btnPay = document.querySelector(".btnPay")
console.log(CartItems)
CartItems.sort()
console.log(CartItems)
let cnt = 1
let dict = []
let sales = []
 for(let i = 0; i < CartItems.length; i++){
     if(CartItems[i] == CartItems[i + 1]){
        cnt++
     }
     else{
        dict.push({
            key: CartItems[i],
            count: cnt
        })
        cnt = 1
     }
}
console.log(dict)
let flag = false
for(let i = 0; i < dict.length; i++){
  if(i + 2 <= dict.length){
    setTimeout(()=>{
      for(let l = i - 1; l < i + 1; l++){
      fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${dict[l].key}`,
      {
        headers: {
          'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      }
      ).then(res=> res.json())
      .then(data =>{
        console.log(data)
        lstItems.innerHTML += `
        <div class="blockAnime" id="${dict[l].key}">
          <button onclick="delItem(${dict[l].key})">X</button>
          <img src="${data.image}" alt="">
          <div class="txtTitle">${data.title}</div>
          <div>${data.ranking * 100}тг</div>
          <div class="number">
            <div id="${data.ranking}">${dict[l].count}</div>
            <div>
              <button onclick="minusCount(${dict[l].key})">-</button>
              <button onclick="plusCount(${dict[l].key})">+</button>
            </div>
          </div>
        </div>
          `
          let obj = {
            key: dict[l].key,
            count: dict[l].count,
            sale: data.ranking * 100,
            inputId: data.ranking,
          }
          sales.push(obj)
          updateSale()
        })
      }
    }, 3000 + (1200 * i))
    flag = true
  }
  else if(i + 1 == dict.length){
    setTimeout(()=>{
      fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${dict[i].key}`,
      {
        headers: {
          'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      }
      ).then(res=> res.json())
      .then(data =>{
        console.log(data)
        lstItems.innerHTML += `
        <div class="blockAnime" id="${dict[i].key}">
          <button onclick="delItem(${dict[i].key})">X</button>
          <img src="${data.image}" alt="">
          <div class="txtTitle">${data.title}</div>
          <div>${data.ranking * 100}тг</div>
          <div class="number">
            <div id="${data.ranking}">${dict[i].count}</div>
            <div>
              <button onclick="minusCount(${dict[i].key})">-</button>
              <button onclick="plusCount(${dict[i].key})">+</button>
            </div>
          </div>
        </div>
          `
          let obj = {
            key: dict[i].key,
            count: dict[i].count,
            sale: data.ranking * 100,
            inputId: data.ranking,
          }
          sales.push(obj)
          updateSale()
        })
      }, 3000 + (1200 * i))
  }
  if(flag == true){
    i++
    flag = false
  }
}

function updateSale(){
  let sum = 0
  for(let k = 0; k < sales.length; k++){
    sum += sales[k].sale *  sales[k].count
  }
  sale.innerHTML = `
  <h2>Price: ${sum}тг</h2>
  <button onclick="Pay()">Pay</button>
  `
}

function Pay(){
  localStorage.removeItem("Items")
  document.location.href = "Thanks2.html";
}

function plusCount(key){
  console.log("Start1")
  //LocalStorage
  let Items = JSON.parse(localStorage.getItem("Items"))
  Items.push(key)
  localStorage.setItem("Items",JSON.stringify(Items))
  console.log(sales)
  //Array sales
  for(let k = 0; k < sales.length; k++){
    if(sales[k].key == key){
      sales[k].count += 1
      let txt = document.getElementById(sales[k].inputId)
      txt.textContent = sales[k].count
    }
  }
  //Обновление общей цены
  updateSale()
}

function minusCount(key){
  console.log("Start2")
  for(let k = 0; k < sales.length; k++){
    if(sales[k].count - 1 > 0 && sales[k].key == key){    
      //Array sales
      sales[k].count -= 1
      let txt = document.getElementById(sales[k].inputId)
      txt.textContent = sales[k].count
      //LocalStorage
      let Items = JSON.parse(localStorage.getItem("Items"))
      Items = Items.filter(el => el != key)
      console.log(sales[k].count)
      for(let i = 0; i < sales[k].count; i++){
        console.log(i)
        Items.push(key)
      }
      localStorage.setItem("Items",JSON.stringify(Items))
      //Обновление общей цены
      updateSale()
      break
    }
  }
}

function delItem(key){
  document.getElementById(key).remove()
  let Items = JSON.parse(localStorage.getItem("Items"))
  sales = sales.filter(el => el.key != key)
  Items = Items.filter(el => el != key)
  localStorage.setItem("Items",JSON.stringify(Items))
  updateSale()
}

function btnUser(){
  let user = JSON.parse(localStorage.getItem("User"))
  if(user == null){
    document.location.href = "Login.html";
  }
  else{
    if(user.login == true){
      document.location.href = "profile.html";
    }
    else{
      document.location.href = "Login.html";
    }
  }
}