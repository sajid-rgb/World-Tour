const mainSection = document.getElementById("mainSection")
fetch("https://restcountries.eu/rest/v2/all")
.then(res=>res.json())
.then(data=>countryTour(data))
const countryTour=country=>{    
for (let i = 0; i < country.length; i++) {
    const firstCountry = country[i].name;
    const mainDiv = document.createElement("div")
    mainDiv.className="mainDiv"
    const countryName = country[i];
    const newDiv=`<img src="${countryName.flag}"<br>
    <h3>${countryName.name}</h3>
    <p>Capital: ${countryName.capital}</p>
    <button onclick="newFunction('${firstCountry}')">Show More</button>
    `
    mainDiv.innerHTML = newDiv
    mainSection.appendChild(mainDiv);
}

}
const secondSection=document.getElementById("secondSection")
function newFunction(anotherCountry){
    
    fetch(`https://restcountries.eu/rest/v2/name/${anotherCountry}?fullText=true`)
    .then(res=>res.json())
    .then(file=>{
        const anyDiv = document.createElement("div")
        mainSection.style.display = "none";
        secondSection.style.display="block"
        const x = `<img src="${file[0].flag}">
        <h3>Languages: ${file[0].languages[0].name}
        <p>Native name:${file[0].nativeName}<br>
        Area: ${file[0].area}<br>
        Region: ${file[0].region}<br>
        Sub Region: ${file[0].subregion}<br>
        Population: ${file[0].population}<br>
        currencies: ${file[0].currencies[0].name} (${file[0].currencies[0].symbol}) <br>
        Borders: ${file[0].borders.map(x=>x)}<br>
        Regional blocks: ${file[0].regionalBlocs[0].name} (${file[0].regionalBlocs[0].acronym})
        <p>
        `
        anyDiv.innerHTML=x
        secondSection.appendChild(anyDiv)
        
    })
}
// function backClick(){
//     document.getElementById("mainSection").style.display="block"
// }
