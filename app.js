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
    }


    

//get dom elements
let itemList = document.getElementById('itemList')
//get data
const getData = async()=>{
    const res = await fetch('data.json')
    let countries = await res.json()
    //get input
    let searchInput = document.getElementById('searchInput')
    let timer
    searchInput.addEventListener('input',e=>{
        clearTimeout(timer)
        timer = setTimeout(() => {
            let searchResults = []
            const Countries = document.querySelectorAll('.countryName')
            //intially hide all countries
            Countries.forEach(c =>{
                c.parentElement.parentElement.style.display = 'none'
            })
            //add countries to search results to display it in our js
            Countries.forEach(c =>{
                searchResults.push(c)
            })
            //filter countries by search query
            searchResults.filter(i => {
                if(i.innerHTML.toLowerCase().includes(e.target.value) ||i.innerHTML.toLowerCase().charAt(0) == e.target.value ){
                    return i.innerHTML
                }
            })
            .forEach(i=>{
                //show only searched for countries
                i.parentElement.parentElement.style.display = 'block'
            })
        }, 1000);
    })
    //filter object
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