function changetabcorona(str) {

    if (str == "conmap") {
        if (document.getElementById("conmap").src != "https://edata.ndtv.com/test/coronavirus/statesgraphmap.html?for_tabdesk=1") {
            document.getElementById("conmap").src = "https://edata.ndtv.com/test/coronavirus/statesgraphmap.html?for_tabdesk=1";
        }

    } else if (str == "testgarph") {
        if (document.getElementById("testgarph").src != "https://edata.ndtv.com/coronavirus/graphGrowth.html?day=day&height=300") {
            document.getElementById("testgarph").src = "https://edata.ndtv.com/coronavirus/graphGrowth.html?day=day&height=300";

        }
    } else if (str == "districts") {
        if (document.getElementById("districts").src != "https://edata.ndtv.com/test/coronavirus/tracker/tracker-web.html?type=india&device=web") {
            document.getElementById("districts").src = "https://edata.ndtv.com/test/coronavirus/tracker/tracker-web.html?type=india&device=web";
        }

    } else if (str == "vaccine") {
        document.getElementById("vaccine").src = "https://edata.ndtv.com/test/coronavirus/vaccination.html?tabs=1&type=daily";
    } else if (str == "corall") {
        if (document.getElementById("corall").src != "https://edata.ndtv.com/coronavirus/graph.html?tabs=1&type=daily") {
            document.getElementById("corall").src = "https://edata.ndtv.com/coronavirus/graph.html?tabs=1&type=daily";
        }

    } else {
        if (document.getElementById("coronaworld").src != "https://edata.ndtv.com/coronavirus/table/world_table.html") {
            document.getElementById("coronaworld").src = "https://edata.ndtv.com/coronavirus/table/world_table.html";
        }

    }
}