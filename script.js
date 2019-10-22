var day;
var time;
var locs = [];

function genWheel() {
    getTimeData();
    getOpenLocs();
    locs.sort();
    var url = "https://wheeldecide.com/index.php?";
    for (var i = 0; i < locs.length; i++) {
        url += "c" + (i + 1) + "=" + locs[i] + "&"
    }
    url += "time=5";
    window.location.replace(url);
}

function getTimeData() {
    var d = new Date();
    day = (d.getDay() + 5) % 6;
    time = d.getHours() * 100 + d.getMinutes();
}

function getOpenLocs() {
    for (var i = 0; i < dining.locations.length; i++) {
        if (dining.locations[i].Hours[day][0] < time && dining.locations[i].Hours[day][1] > time)
            locs.push(dining.locations[i].name);
    }

    for (i = 0; i < diningOppHours.locations.length; i++) {
        console.log(time);
        if (diningOppHours.locations[i].Hours[day][0] > time || diningOppHours.locations[i].Hours[day][1] < time)
            locs.push(diningOppHours.locations[i].name);
    }
}