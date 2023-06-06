"use strict";

const myQuote = document.getElementById("myQuote");

//Event Listener
const myButton = document.getElementById("quoteBTN");
myButton.addEventListener("click", DisplayQuote);


//Create a f(x) to fecth api data and display image
function DisplayQuote() {

    // alert('This button works.'); //Testing the button - it works!

    //Fetch the data
    const baseURL = "https://programming-quotesapi.vercel.app/api/random";
    //You can declare the url and CHANGE IT later on, rather than replacing every URL 

    fetch(baseURL)
    .then(response => response.json())
    .then(quote => {
        //Write a conditional that checks API, and outputs that its busy 
        myQuote.innerHTML = `"${quote.quote}"\n - ${quote.author}`
    })

    DisplayMeme();
    DisplayCatFact();
}

function DisplayMeme() {
    const base_URL = "https://api.imgflip.com/get_memes";
    const myImage = document.getElementById("myImage")

    fetch(base_URL)
    .then(response => response.json())
    .then(memes => {
        //Write a conditional that checks API, and outputs that its busy 
        myImage.src = memes.data.memes[Math.floor(Math.random()*100)].url;
    })
}

function DisplayCatFact() {
    const catFact = document.getElementById("catFact")

    fetch("https://meowfacts.herokuapp.com/")
    .then(response => response.json())
    .then(fact => {
        //Write a conditional that checks API, and outputs that its busy 
        catFact.innerHTML = "Cat Fact: " + fact.data[0];
    })
}