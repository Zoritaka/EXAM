const lstAnime = document.querySelector(".ListAnime")
const btnSearch1 = document.querySelector(".btnSearch1")
const txtSearch1 = document.querySelector(".txtSearch1")

const btnSearch2 = document.querySelector(".btnSearch2")
const txtSearch2 = document.querySelector(".txtSearch2")
const GenreSelector = document.querySelector(".Genre")
const SortOrder = document.querySelector(".SortOrder")
const SortBy = document.querySelector(".SortBy")
const btnUser = document.querySelector(".User")

const v1 = document.querySelector(".v1")
const v2 = document.querySelector(".v2")
const v3 = document.querySelector(".v3")
btnSearch1.addEventListener("click",()=>{
  if(txtSearch1.value != ''){
    fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=100&search=${txtSearch1.value}`,
    {
      headers: {
        'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    }
    ).then(res=> res.json())
    .then(data =>{
      console.log(data)
      let tmp = data.data
      lstAnime.innerHTML = ''
      let cnt = 0
      tmp.forEach(element => {
        cnt++
        let size = element.genres.length
        let genre = ''
        let temp = element.synopsis.split(' ') 
        let option = ''
        if(cnt == 1){
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(40 <= temp.length){
            for(let i = 0; i < 40; i++){
              option += `${temp[i]}`
              if(i != 40){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."
          v1.innerHTML = ''
          v1.innerHTML = `
          <div class="ImgAnime">
            <img src="${element.image}" alt="">
          </div>
          <div class="AnimeBlock_Txt">
            <h1>${element.title}</h1>
            <p>${option}</p>
            <p>Genres: ${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
          </div>
          `
        }
        else if(cnt == 2){
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(40 <= temp.length){
            for(let i = 0; i < 40; i++){
              option += `${temp[i]}`
              if(i != 40){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."       
          v2.innerHTML = ''
          v2.innerHTML = `
          <div class="ImgAnime">
            <img src="${element.image}" alt="">
          </div>
          <div class="AnimeBlock_Txt">
            <h1>${element.title}</h1>
            <p>${option}</p>
            <p>Genres: ${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
          </div>
          `
        }
        else if(cnt == 3){
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(40 <= temp.length){
            for(let i = 0; i < 40; i++){
              option += `${temp[i]}`
              if(i != 40){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."       
          v3.innerHTML = ''
          v3.innerHTML = `
          <div class="ImgAnime">
            <img src="${element.image}" alt="">
          </div>
          <div class="AnimeBlock_Txt">
            <h1>${element.title}</h1>
            <p>${option}</p>
            <p>Genres: ${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
          </div>
          `
        }
        else{
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(30 <= temp.length){
            for(let i = 0; i < 30; i++){
              option += `${temp[i]}`
              if(i != 30){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."   
          lstAnime.innerHTML += `
          <div class="lstAnimeBlock">
            <div class="lstblock">
              <img src="${element.image}" alt="">
              <div>
                <h2>${element.title}</h2>
                <p>${option}</p>
                <p>${genre}</p>
                <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
              </div>
            </div>
          </div>
          `
        }
      });
    })
  }
})
btnSearch2.addEventListener("click",()=>{
  if(txtSearch2.value != ''){
    fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=100&genres=${GenreSelector.value}&sortOrder=${SortOrder.value}&search=${txtSearch2.value}`,
    {
      headers: {
        'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    }
    ).then(res=> res.json())
    .then(data =>{
      console.log(data)
      let tmp = data.data
      lstAnime.innerHTML = ''
      let cnt = 0
      tmp.forEach(element => {
        cnt++
        let size = element.genres.length
        let genre = ''
        let temp = element.synopsis.split(' ') 
        let option = ''
        if(cnt == 1){
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(40 <= temp.length){
            for(let i = 0; i < 40; i++){
              option += `${temp[i]}`
              if(i != 40){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."
          v1.innerHTML = ''
          v1.innerHTML = `
          <div class="ImgAnime">
            <img src="${element.image}" alt="">
          </div>
          <div class="AnimeBlock_Txt">
            <h1>${element.title}</h1>
            <p>${option}</p>
            <p>Genres: ${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
          </div>
          `
        }
        else if(cnt == 2){
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(40 <= temp.length){
            for(let i = 0; i < 40; i++){
              option += `${temp[i]}`
              if(i != 40){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."       
          v2.innerHTML = ''
          v2.innerHTML = `
          <div class="ImgAnime">
            <img src="${element.image}" alt="">
          </div>
          <div class="AnimeBlock_Txt">
            <h1>${element.title}</h1>
            <p>${option}</p>
            <p>Genres: ${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
          </div>
          `
        }
        else if(cnt == 3){
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(40 <= temp.length){
            for(let i = 0; i < 40; i++){
              option += `${temp[i]}`
              if(i != 40){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."       
          v3.innerHTML = ''
          v3.innerHTML = `
          <div class="ImgAnime">
            <img src="${element.image}" alt="">
          </div>
          <div class="AnimeBlock_Txt">
            <h1>${element.title}</h1>
            <p>${option}</p>
            <p>Genres: ${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
          </div>
          `
        }
        else{
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(30 <= temp.length){
            for(let i = 0; i < 30; i++){
              option += `${temp[i]}`
              if(i != 30){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."   
          lstAnime.innerHTML += `
          <div class="lstAnimeBlock">
            <div class="lstblock">
              <img src="${element.image}" alt="">
              <div>
                <h2>${element.title}</h2>
                <p>${option}</p>
                <p>${genre}</p>
                <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
              </div>
            </div>
          </div>
          `
        }
      });
    })
  }
  else{
    fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=400&genres=${GenreSelector.value}&sortOrder=${SortOrder.value}&sortBy=${SortBy.value}`,
    {
      headers: {
        'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    }
    ).then(res=> res.json())
    .then(data =>{
      console.log(data)
      let tmp = data.data
      lstAnime.innerHTML = ''
      let cnt = 0
      tmp.forEach(element => {
        cnt++
        let size = element.genres.length
        let genre = ''
        let temp = element.synopsis.split(' ') 
        let option = ''
        if(cnt == 1){
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(40 <= temp.length){
            for(let i = 0; i < 40; i++){
              option += `${temp[i]}`
              if(i != 40){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."
          v1.innerHTML = ''
          v1.innerHTML = `
          <div class="ImgAnime">
            <img src="${element.image}" alt="">
          </div>
          <div class="AnimeBlock_Txt">
            <h1>${element.title}</h1>
            <p>${option}</p>
            <p>Genres: ${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
          </div>
          `
        }
        else if(cnt == 2){
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(40 <= temp.length){
            for(let i = 0; i < 40; i++){
              option += `${temp[i]}`
              if(i != 40){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."       
          v2.innerHTML = ''
          v2.innerHTML = `
          <div class="ImgAnime">
            <img src="${element.image}" alt="">
          </div>
          <div class="AnimeBlock_Txt">
            <h1>${element.title}</h1>
            <p>${option}</p>
            <p>Genres: ${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
          </div>
          `
        }
        else if(cnt == 3){
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(40 <= temp.length){
            for(let i = 0; i < 40; i++){
              option += `${temp[i]}`
              if(i != 40){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."       
          v3.innerHTML = ''
          v3.innerHTML = `
          <div class="ImgAnime">
            <img src="${element.image}" alt="">
          </div>
          <div class="AnimeBlock_Txt">
            <h1>${element.title}</h1>
            <p>${option}</p>
            <p>Genres: ${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
          </div>
          `
        }
        else{
          for(let i = 0; i < size; i++){
            genre += `${element.genres[i]}, ` 
          }          
          if(30 <= temp.length){
            for(let i = 0; i < 30; i++){
              option += `${temp[i]}`
              if(i != 30){
                option += " "
              } 
            }
          }else{
            for(let i = 0; i < temp.length; i++){
              option += `${temp[i]}`
              if(i != temp.length - 1){
                option += " "
              } 
            }
          }
          option += "..."   
          lstAnime.innerHTML += `
          <div class="lstAnimeBlock">
            <div class="lstblock">
              <img src="${element.image}" alt="">
              <div>
                <h2>${element.title}</h2>
                <p>${option}</p>
                <p>${genre}</p>
                <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
              </div>
            </div>
          </div>
          `
        }
      });
    })
  }
})

{/* <button class="btnAction">Action</button>
<button class="btnFantasy">Fantasy</button>
<button class="btnComedy">Comedy</button>
<button class="btnAdventure">Adventure</button>
<button class="btnHorror">Horror</button>
<button class="btnSports">Sports</button> */}
const btnAction = document.querySelector(".btnAction")
const btnFantasy = document.querySelector(".btnFantasy")
const btnComedy = document.querySelector(".btnComedy")
const btnAdventure = document.querySelector(".btnAdventure")
const btnHorror = document.querySelector(".btnHorror")
const btnSports = document.querySelector(".btnSports")

btnAction.addEventListener("click", ()=>{
  fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=400&genres=Action`,
  {
    headers: {
      'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  }
  ).then(res=> res.json())
  .then(data =>{
    console.log(data)
    let tmp = data.data
    lstAnime.innerHTML = ''
    let cnt = 0
    tmp.forEach(element => {
      cnt++
      let size = element.genres.length
      let genre = ''
      let temp = element.synopsis.split(' ') 
      let option = ''
      if(cnt == 1){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."
        v1.innerHTML = ''
        v1.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 2){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v2.innerHTML = ''
        v2.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 3){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v3.innerHTML = ''
        v3.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else{
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(30 <= temp.length){
          for(let i = 0; i < 30; i++){
            option += `${temp[i]}`
            if(i != 30){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."   
        lstAnime.innerHTML += `
        <div class="lstAnimeBlock">
          <div class="lstblock">
            <img src="${element.image}" alt="">
            <div>
              <h2>${element.title}</h2>
              <p>${option}</p>
              <p>${genre}</p>
              <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
            </div>
          </div>
        </div>
        `
      }
    });
  })
})

btnFantasy.addEventListener("click", ()=>{
  fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=400&genres=Fantasy`,
  {
    headers: {
      'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  }
  ).then(res=> res.json())
  .then(data =>{
    console.log(data)
    let tmp = data.data
    lstAnime.innerHTML = ''
    let cnt = 0
    tmp.forEach(element => {
      cnt++
      let size = element.genres.length
      let genre = ''
      let temp = element.synopsis.split(' ') 
      let option = ''
      if(cnt == 1){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."
        v1.innerHTML = ''
        v1.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 2){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v2.innerHTML = ''
        v2.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 3){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v3.innerHTML = ''
        v3.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else{
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(30 <= temp.length){
          for(let i = 0; i < 30; i++){
            option += `${temp[i]}`
            if(i != 30){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."   
        lstAnime.innerHTML += `
        <div class="lstAnimeBlock">
          <div class="lstblock">
            <img src="${element.image}" alt="">
            <div>
              <h2>${element.title}</h2>
              <p>${option}</p>
              <p>${genre}</p>
              <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
            </div>
          </div>
        </div>
        `
      }
    });
  })
})

btnComedy.addEventListener("click", ()=>{
  fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=400&genres=Comedy`,
  {
    headers: {
      'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  }
  ).then(res=> res.json())
  .then(data =>{
    console.log(data)
    let tmp = data.data
    lstAnime.innerHTML = ''
    let cnt = 0
    tmp.forEach(element => {
      cnt++
      let size = element.genres.length
      let genre = ''
      let temp = element.synopsis.split(' ') 
      let option = ''
      if(cnt == 1){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."
        v1.innerHTML = ''
        v1.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 2){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v2.innerHTML = ''
        v2.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 3){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v3.innerHTML = ''
        v3.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else{
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(30 <= temp.length){
          for(let i = 0; i < 30; i++){
            option += `${temp[i]}`
            if(i != 30){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."   
        lstAnime.innerHTML += `
        <div class="lstAnimeBlock">
          <div class="lstblock">
            <img src="${element.image}" alt="">
            <div>
              <h2>${element.title}</h2>
              <p>${option}</p>
              <p>${genre}</p>
              <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
            </div>
          </div>
        </div>
        `
      }
    });
  })
})

btnAdventure.addEventListener("click", ()=>{
  fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=400&genres=Adventure`,
  {
    headers: {
      'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  }
  ).then(res=> res.json())
  .then(data =>{
    console.log(data)
    let tmp = data.data
    lstAnime.innerHTML = ''
    let cnt = 0
    tmp.forEach(element => {
      cnt++
      let size = element.genres.length
      let genre = ''
      let temp = element.synopsis.split(' ') 
      let option = ''
      if(cnt == 1){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."
        v1.innerHTML = ''
        v1.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 2){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v2.innerHTML = ''
        v2.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 3){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v3.innerHTML = ''
        v3.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else{
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(30 <= temp.length){
          for(let i = 0; i < 30; i++){
            option += `${temp[i]}`
            if(i != 30){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."   
        lstAnime.innerHTML += `
        <div class="lstAnimeBlock">
          <div class="lstblock">
            <img src="${element.image}" alt="">
            <div>
              <h2>${element.title}</h2>
              <p>${option}</p>
              <p>${genre}</p>
              <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
            </div>
          </div>
        </div>
        `
      }
    });
  })
})

btnHorror.addEventListener("click", ()=>{
  fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=400&genres=Horror`,
  {
    headers: {
      'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  }
  ).then(res=> res.json())
  .then(data =>{
    console.log(data)
    let tmp = data.data
    lstAnime.innerHTML = ''
    let cnt = 0
    tmp.forEach(element => {
      cnt++
      let size = element.genres.length
      let genre = ''
      let temp = element.synopsis.split(' ') 
      let option = ''
      if(cnt == 1){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."
        v1.innerHTML = ''
        v1.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 2){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v2.innerHTML = ''
        v2.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 3){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v3.innerHTML = ''
        v3.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else{
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(30 <= temp.length){
          for(let i = 0; i < 30; i++){
            option += `${temp[i]}`
            if(i != 30){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."   
        lstAnime.innerHTML += `
        <div class="lstAnimeBlock">
          <div class="lstblock">
            <img src="${element.image}" alt="">
            <div>
              <h2>${element.title}</h2>
              <p>${option}</p>
              <p>${genre}</p>
              <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
            </div>
          </div>
        </div>
        `
      }
    });
  })
})

btnSports.addEventListener("click", ()=>{
  fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=400&genres=Sports`,
  {
    headers: {
      'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  }
  ).then(res=> res.json())
  .then(data =>{
    console.log(data)
    let tmp = data.data
    lstAnime.innerHTML = ''
    let cnt = 0
    tmp.forEach(element => {
      cnt++
      let size = element.genres.length
      let genre = ''
      let temp = element.synopsis.split(' ') 
      let option = ''
      if(cnt == 1){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."
        v1.innerHTML = ''
        v1.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 2){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v2.innerHTML = ''
        v2.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else if(cnt == 3){
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(40 <= temp.length){
          for(let i = 0; i < 40; i++){
            option += `${temp[i]}`
            if(i != 40){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."       
        v3.innerHTML = ''
        v3.innerHTML = `
        <div class="ImgAnime">
          <img src="${element.image}" alt="">
        </div>
        <div class="AnimeBlock_Txt">
          <h1>${element.title}</h1>
          <p>${option}</p>
          <p>Genres: ${genre}</p>
          <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
        </div>
        `
      }
      else{
        for(let i = 0; i < size; i++){
          genre += `${element.genres[i]}, ` 
        }          
        if(30 <= temp.length){
          for(let i = 0; i < 30; i++){
            option += `${temp[i]}`
            if(i != 30){
              option += " "
            } 
          }
        }else{
          for(let i = 0; i < temp.length; i++){
            option += `${temp[i]}`
            if(i != temp.length - 1){
              option += " "
            } 
          }
        }
        option += "..."   
        lstAnime.innerHTML += `
        <div class="lstAnimeBlock">
          <div class="lstblock">
            <img src="${element.image}" alt="">
            <div>
              <h2>${element.title}</h2>
              <p>${option}</p>
              <p>${genre}</p>
              <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
            </div>
          </div>
        </div>
        `
      }
    });
  })
})

function addToCart(id){
  // localStorage.removeItem("Items")
  let items = JSON.parse(localStorage.getItem("Items")) || []
  items.push(id)
  localStorage.setItem("Items", JSON.stringify(items))
}


// onclick="test(${element._id})"
btnUser.addEventListener("click", (e)=>{
  e.preventDefault()
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
})




window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=100&genres=Award Winning`,
{
  headers: {
    'X-RapidAPI-Key': 'e3f732e20fmshe25536b1b98d53dp1a14cajsnd5c2c39181aa',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
}
).then(res=> res.json())
.then(data =>{
  console.log(data)
  let tmp = data.data
  lstAnime.innerHTML = ''
  let cnt = 0
  tmp.forEach(element => {
    cnt++
    let size = element.genres.length
    let genre = ''
    let temp = element.synopsis.split(' ') 
    let option = ''
    if(cnt == 1){
      for(let i = 0; i < size; i++){
        genre += `${element.genres[i]}, ` 
      }          
      if(40 <= temp.length){
        for(let i = 0; i < 40; i++){
          option += `${temp[i]}`
          if(i != 40){
            option += " "
          } 
        }
      }else{
        for(let i = 0; i < temp.length; i++){
          option += `${temp[i]}`
          if(i != temp.length - 1){
            option += " "
          } 
        }
      }
      option += "..."
      v1.innerHTML = ''
      v1.innerHTML = `
      <div class="ImgAnime">
        <img src="${element.image}" alt="">
      </div>
      <div class="AnimeBlock_Txt">
        <h1>${element.title}</h1>
        <p>${option}</p>
        <p>Genres: ${genre}</p>
        <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
      </div>
      `
    }
    else if(cnt == 2){
      for(let i = 0; i < size; i++){
        genre += `${element.genres[i]}, ` 
      }          
      if(40 <= temp.length){
        for(let i = 0; i < 40; i++){
          option += `${temp[i]}`
          if(i != 40){
            option += " "
          } 
        }
      }else{
        for(let i = 0; i < temp.length; i++){
          option += `${temp[i]}`
          if(i != temp.length - 1){
            option += " "
          } 
        }
      }
      option += "..."       
      v2.innerHTML = ''
      v2.innerHTML = `
      <div class="ImgAnime">
        <img src="${element.image}" alt="">
      </div>
      <div class="AnimeBlock_Txt">
        <h1>${element.title}</h1>
        <p>${option}</p>
        <p>Genres: ${genre}</p>
        <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
      </div>
      `
    }
    else if(cnt == 3){
      for(let i = 0; i < size; i++){
        genre += `${element.genres[i]}, ` 
      }          
      if(40 <= temp.length){
        for(let i = 0; i < 40; i++){
          option += `${temp[i]}`
          if(i != 40){
            option += " "
          } 
        }
      }else{
        for(let i = 0; i < temp.length; i++){
          option += `${temp[i]}`
          if(i != temp.length - 1){
            option += " "
          } 
        }
      }
      option += "..."       
      v3.innerHTML = ''
      v3.innerHTML = `
      <div class="ImgAnime">
        <img src="${element.image}" alt="">
      </div>
      <div class="AnimeBlock_Txt">
        <h1>${element.title}</h1>
        <p>${option}</p>
        <p>Genres: ${genre}</p>
        <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>
      </div>
      `
    }
    else{
      for(let i = 0; i < size; i++){
        genre += `${element.genres[i]}, ` 
      }          
      if(30 <= temp.length){
        for(let i = 0; i < 30; i++){
          option += `${temp[i]}`
          if(i != 30){
            option += " "
          } 
        }
      }else{
        for(let i = 0; i < temp.length; i++){
          option += `${temp[i]}`
          if(i != temp.length - 1){
            option += " "
          } 
        }
      }
      option += "..."   
      lstAnime.innerHTML += `
      <div class="lstAnimeBlock">
        <div class="lstblock">
          <img src="${element.image}" alt="">
          <div>
            <h2>${element.title}</h2>
            <p>${option}</p>
            <p>${genre}</p>
            <button onclick="addToCart(${element._id})" class="btnBuy" title="${element._id}">Buy now!</button>   
          </div>
        </div>
      </div>
      `
    }
  });
})