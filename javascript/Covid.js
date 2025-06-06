console.log("Project-3")
    // Intialize The news api parameters 




let apiKey = '278ad56635644b7bad653eb4657f98bd'

let language = 'en';
let country = 'in';
let category = 'health';


//Grab the news container
newsAccordion = document.getElementById('newsAccordion');

// Create a AJAX get request 
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?category=${category}&language=${language}&country=${country}&apiKey=${apiKey}`, true);



// What to do when response is ready
xhr.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";


        articles.forEach((element, index) => {

            if (element.urlToImage == null) {
                console.log(index);

            } else {

                let news = `<div class="accordion-item">
        
        <div id="collapse${index}" class="accordion-collapse  collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
            
            <div class="accordion-body">
                <img id="image" src="${element['urlToImage']}" />
                ${element["publishedAt"]}
                <h3> ${element["title"]}</h3>
                ${element["description"]}.<a href="${element['url']}" target="_blank" >Read More Here</a>
                </div>
                
                </div>
                </div>`
                newsHtml += news;
            }
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured");
    }

}

// document.getElementById("coronaupdate").url('https://edata.ndtv.com/coronavirus/table/india_table.html?shgraph=1');

xhr.send();

// Buttons
// Home Button
function Home() {
    window.location.assign("http://127.0.0.1:5501/html/home.html");
}

// ENTERTAINMENT Button
function ENTERTAINMENT() {
    window.location.assign("http://127.0.0.1:5501/html/Entertainment.html");

}

// Sports Button
function Sports() {
    window.location.assign("http://127.0.0.1:5501/html/Sports.html");

}
// Technology Button
function Technology() {
    window.location.assign("http://127.0.0.1:5501/html/technology.html");

}

// World Button
function World() {
    window.location.assign("http://127.0.0.1:5501/html/World.html");

}

// Covid Button
function covid() {
    window.location.assign("http://127.0.0.1:5501/html/covid.html");

}