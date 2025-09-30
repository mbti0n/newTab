// Clock
function timeLoop() {
    let time = document.getElementById('time')
    let date = document.getElementById('date')

    setInterval(() => {
        let d = new Date();
        const options = {
            weekday: "short",
            month: "short",
            day: "numeric",
        };

        let unix_timestamp = Math.round(d.getTime() / 1000);
        var dateS = new Date(unix_timestamp * 1000);
        var hours = dateS.getHours() % 12;
        if (hours == 0) {
            hours = "12"
        }
        var minutes = "0" + dateS.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2)
    
        time.textContent = formattedTime
        date.textContent = d.toLocaleDateString("en-US", options)
    }, 1)
}

// Website color mode (Light | Dark)
function lightTheme() {
    // Body
    document.getElementById("main").style.backgroundColor = "#ffffff"

    // Date & time
    document.getElementById("time").style.color = "#4c4f69"
    document.getElementById("date").style.color = "#4c4f69"

    // Action bar
    document.getElementById("actions").style.color = "#4c4f69"

    // Light/dark mode toggle button
    document.getElementById("modeToggle1").style.display = "none"
    document.getElementById("modeToggle2").style.display = "inline-block"

    // Search button
    document.getElementById("searchButton").style.color = "#0858D0"
    let searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("mouseover", () => {
        searchButton.style.color = "#0858D0"
        searchButton.style.backgroundColor = "#90D7E3"
    })

    searchButton.addEventListener("mouseout", () => {
        searchButton.style.color = "#0858D0"
        searchButton.style.backgroundColor = "#00000000"
    })
    
    // Search bar
    document.getElementById("searchBar").style.backgroundColor = "#acb0be";
    document.getElementById("searchBar").style.color = "#4c4f69";
    document.getElementById("submit").style.backgroundColor = "#acb0be";
    document.getElementById("cancel").style.backgroundColor = "#acb0be";
    document.getElementById("submit").style.color = "#0858D0";
    document.getElementById("cancel").style.color = "#0858D0";

    let links = document.getElementsByTagName("a")
    // Group 1
    document.getElementById("group1").style.borderColor = "#0858D0"
    document.getElementsByTagName("h2")[0].style.color = "#0858D0" // Header
    for (let i = 3; i < 16; i++) {
        links[i].style.color = "#0858D0"

        links[i].addEventListener("mouseover", () => {
            links[i].style.color = "#0858D0"
            links[i].style.backgroundColor = "#90D7E3"
        })

        links[i].addEventListener("mouseout", () => {
            links[i].style.color = "#0858D0"
            links[i].style.backgroundColor = "#00000000"
        })
    }

    // Group 2
    document.getElementById("group2").style.borderColor = "#e64553";
    for (let i = 16; i < 27; i++) { // with Header (as it's also a hyperlink)
        links[i].style.color = "#e64553"

        links[i].addEventListener("mouseover", () => {
            links[i].style.color = "#e64553"
            links[i].style.backgroundColor = "#EE99A0"
        })

        links[i].addEventListener("mouseout", () => {
            links[i].style.color = "#e64553"
            links[i].style.backgroundColor = "#00000000"
        })
    }

    // Group 3
    document.getElementById("group3").style.borderColor = "#8839ef";
    document.getElementsByTagName("h2")[2].style.color = "#8839ef" // Header
    for (let i = 27; i < links.length; i++) {
        links[i].style.color = "#8839ef"

        links[i].addEventListener("mouseover", () => {
            links[i].style.color = "#8839ef"
            links[i].style.backgroundColor = "#C6A0F6"
        })

        links[i].addEventListener("mouseout", () => {
            links[i].style.color = "#8839ef"
            links[i].style.backgroundColor = "#00000000"
        })
    }

    document.getElementById('main').className = "fade"
}

function darkTheme() {
    // Body
    document.getElementById("main").style.backgroundColor = "#141414";
    
    // Date & time
    document.getElementById("time").style.color = "white"
    document.getElementById("date").style.color = "white"
    
    // Action bar
    document.getElementById("actions").style.color = "white";

    // Light/dark mode toggle button
    document.getElementById("modeToggle2").style.display = "none";
    document.getElementById("modeToggle1").style.display = "inline-block";

    // Calendar button
    document.getElementById("searchButton").style.color = "#90D7E3";
    let searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("mouseover", () => {
            searchButton.style.color = "#181825"
            searchButton.style.backgroundColor = "#90D7E3"
        })

    searchButton.addEventListener("mouseout", () => {
        searchButton.style.color = "#90D7E3"
        searchButton.style.backgroundColor = "#00000000"
    })

    // Search bar
    document.getElementById("searchBar").style.backgroundColor = "#494d64";
    document.getElementById("searchBar").style.color = "white";
    document.getElementById("submit").style.backgroundColor = "#494d64";
    document.getElementById("cancel").style.backgroundColor = "#494d64";
    document.getElementById("submit").style.color = "#90D7E3";
    document.getElementById("cancel").style.color = "#90D7E3";

    let links = document.getElementsByTagName("a")
    // Group 1
    document.getElementById("group1").style.borderColor = "#90D7E3";
    document.getElementsByTagName("h2")[0].style.color = "#90D7E3" // Header
    for (let i = 3; i < 16; i++) {
        links[i].style.color = "#90D7E3"

        links[i].addEventListener("mouseover", () => {
            links[i].style.color = "#181825"
            links[i].style.backgroundColor = "#90D7E3"
        })

        links[i].addEventListener("mouseout", () => {
            links[i].style.color = "#90D7E3"
            links[i].style.backgroundColor = "#00000000"
        })
    }

    // Group 2
    document.getElementById("group2").style.borderColor = "#EE99A0";
    for (let i = 16; i < 26; i++) { // with Header (as it's also a hyperlink)
        links[i].style.color = "#EE99A0"

        links[i].addEventListener("mouseover", () => {
            links[i].style.color = "#181825"
            links[i].style.backgroundColor = "#EE99A0"
        })

        links[i].addEventListener("mouseout", () => {
            links[i].style.color = "#EE99A0"
            links[i].style.backgroundColor = "#00000000"
        })
    }

    // Group 3
    document.getElementById("group3").style.borderColor = "#C6A0F6";
    document.getElementsByTagName("h2")[2].style.color = "#C6A0F6" // Header
    for (let i = 26; i < links.length; i++) {
        links[i].style.color = "#C6A0F6"

        links[i].addEventListener("mouseover", () => {
            links[i].style.color = "#181825"
            links[i].style.backgroundColor = "#C6A0F6"
        })

        links[i].addEventListener("mouseout", () => {
            links[i].style.color = "#C6A0F6"
            links[i].style.backgroundColor = "#00000000"
        })
    }
}
