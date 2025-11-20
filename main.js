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
