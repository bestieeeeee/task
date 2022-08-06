1.

const request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload = function()
{
if(request.status==200)
{
    let country = JSON.parse(request.responseText)
    const asia=country.filter((element)=>{
        if(element.region==="Asia"){
            return element.name;}
     })
     console.log(asia);
}
else{
    request.onerror=function(){
        console.log("error")
    }}
}

2.

const request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload = function()
{
if(request.status==200)
{
    var Data = JSON.parse(request.responseText)
    const pop=Data.filter((element)=>{
        return element.population<200000;
    })
    console.log(pop);}
else{
    request.onerror=function(){
        console.log("error") }}
}

3.
const request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload = function()
{
if(request.status==200)
{
    var countryData=JSON.parse(request.responseText);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}}


    4.
    const request3=new XMLHttpRequest()
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send()

request3.onload=function()
{
    if(request3.status==200)
    {
        let c3=JSON.parse( request3.responseText)
         let totalPopulation = c3.reduce((tot,country)=>tot+country.population,0);
         console.log(totalPopulation);
    }
else{
request3.onerror=function(){
    console.log("error")
}
}}

5.
const request4=new XMLHttpRequest()
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send()

request4.onload=function()
{
    if(request4.status==200)
    {
        let c4=JSON.parse( request4.responseText)
        c4.filter((e)=> e.currencies)
        .filter((e)=> e.currencies.USD)
        .map((e)=>{    
        console.log(e.name.official)
          
         })
    
    }
else{
request4.onerror=function(){
    console.log("error")
}
}}