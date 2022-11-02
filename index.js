// targeting div element with id = quotes
const my_quotes = document.getElementById("quotes");

// targeting div element with id = author
const Quotes_author = document.getElementById('author');

let actualQuotes = "";
// defining getNewQuotes() funct. which will add data from actualQuotes JSON (line 21)
const getNewQuotes = () => {
    let rand_num = Math.floor(Math.random()*1643); // generating random no. which will be passed as an index
    my_quotes.innerHTML = `${actualQuotes[rand_num].text}`; // adding quotes to quotes sec
    Quotes_author.innerText = `By ${actualQuotes[rand_num].author}`; // adding the author of that quotes
};

// Asynchronous getQuotes() function to fetch the quotes API 
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes"; // getting the API in api variable
    try {
        let storedData = await fetch(api); // fetching API into storedData variable

        actualQuotes = await storedData.json(); // converting storedData into JSON 

        getNewQuotes();  // after fetching API, calling getNewQuotes() function
                         // which will actually add data dynamically in HTML page.
        
    }catch (error) {
    }
};        
getQuotes();