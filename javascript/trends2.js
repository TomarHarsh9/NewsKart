// grap the container
newsCard = document.getElementById('newsAccordion');

// create api request thorugh fetch 
fetch("https://free-news.p.rapidapi.com/v1/search?q=trend&lang=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-news.p.rapidapi.com",
            "x-rapidapi-key": "32f8d8f8fbmsh9989c4b4906722bp14b172jsn4bd308a68244"
        }
    })
    .then((response) => {
        if (response.status == 200) {
            console.log(response);
            return response.json();
        } else {
            throw `error with status ${response.status}`
        }
    })
    .then((data) => {

        console.log(data);
        let news = data.articles;
        console.log(news);


        let xHtml = "";
        for (let x in news) {
            news.forEach(element => {
                let x = `<div class="accordion-item">                 
                    <div class="accordion-body">
                    <img id="image" src="${element['media']}" />
                    ${element["published_date"]}
                    <h3> ${element["title"]}</h3>
                    ${element["summary"]}.<a href="${element['link']}" target="_blank" >Read More Here</a>
                    </div>  
                    </div>
                    </div>`
                xHtml += x;
            });
        }
        newsCard.innerHTML = xHtml
    })
    .catch((err) => console.log(err));
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