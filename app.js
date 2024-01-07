//dark mode toggle
const toggleMode  = ()=>{
    //get the body
    const myBody = document.getElementById('myBody')
    const myHeader = document.getElementById('myHeader')
    const countries = document.querySelectorAll('.countryCard')
    const modeIcon = document.getElementById('modeIcon')
    const modeBtn = document.getElementById('iconBtn')
    if(!myBody.classList.contains('dark')){
        myBody.classList.add('dark')
        myHeader.classList.add('dark')
        modeIcon.classList.replace('fa-moon','fa-sun')
        countries.forEach(country => {
            country.classList.add('dark')
        });
    }else{
        myBody.classList.remove('dark')
        myHeader.classList.remove('dark')
        modeIcon.classList.replace('fa-sun','fa-moon')
        countries.forEach(country => {
            country.classList.remove('dark')
        });
    }
    console.log(myBody.classList)
    }

//pagination 
let currentPage = 0
let postsPerPage = 20
let currentPosts = currentPage * postsPerPage
//change page
function changePage(e){
    console.log(e.currentTarget)
}

//get dom elements
let itemList = document.getElementById('itemList')
//get data
const getData = async()=>{
    const res = await fetch('data.json')
    const countries = await res.json()
    //populate pages in html
    let pagesCount = Math.round(countries.length / postsPerPage)
    let slicedCont
    const pagination = document.querySelector('.pagesList')
    for (let i = 0; i <= pagesCount; i++) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.setAttribute('onClick','changePage()')
        a.setAttribute('href','#')
        a.innerHTML = i
        li.appendChild(a)
        pagination.appendChild(li)
    }
    countries.forEach(c =>{
        slicedCont = countries.slice(currentPosts,currentPosts + postsPerPage)
    })
    
    //display data (populate html elements)
    Object.values(countries).forEach(country=>{
        const dataHolder = document.getElementById('dataHolder')
        const countryCard = document.createElement('div')
        countryCard.classList.add('countryCard')
        countryCard.innerHTML = `
        <div class='imgContainer'><img class="flag" src="${country.flags.svg}" alt=""></div>
        <div class="cardContent">
            <h2 class="countryName">${country.name}</h2>
            <ul class="details">
                <li><span class="text-bold">Population : </span>#${country.population}</li>
                <li><span class="text-bold">Region : </span>${country.region}</li>
                <li><span class="text-bold">Capital : </span>${country.capital}</li>
            </ul>
        </div>`
        dataHolder.appendChild(countryCard)
    })
}
getData()
//search form handling

//filter by continent

//dark mode switch

//deatails page