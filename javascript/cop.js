console.log("Project-3")

// Intialize The news api parameters 

let apiKey = '278ad56635644b7bad653eb4657f98bd'
let language = 'en';
let pagesize = '100';
let country = 'in';

//Grab the news container
newsAccordion = document.getElementById('newsAccordion');
// bn_news = document.getElementById('bn_news');


// Create a AJAX get request 
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?language=${language}&country=${country}&Pagesize=${pagesize}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        let liveHtml = "";

        articles.forEach((element, index) => {

            if (element.urlToImage == null) {
                console.log(index);
            } else {
                let live = `<ul style="width: 3000px; margin-left: -320px;">
                
                <li class=" ${index}">
                    <a href="${element["url"]}">${element["title"]}</a>
                     
                 </li>

             </ul>`

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
                liveHtml += live;
                newsHtml += news;
            }
        });
        bn_news.innerHTML = liveHtml
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured")
    }

}

xhr.send();

document.getElementById('bn_news').animate([
    { transform: 'translate(50%)' }
], {
    iterations: Infinity,

    direction: 'reverse',
    duration: 10000
});

// Buttons

// Home Button
function Home() {
    window.location.assign("http://127.0.0.1:5501/html/home.html");
    console.log("helo ");
}


// ENTERTAINMENT Button
function ENTERTAINMENT() {
    window.location.assign("http://127.0.0.1:5501/html/Entertainment.html");

}

// Sports Button
function Sports() {
    window.location.assign("http://127.0.0.1:5501/html/Sports.html");

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