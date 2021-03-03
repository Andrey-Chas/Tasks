setInterval(time1, 1000);

function time1() {
    var d = new Date();
    var clock = "The current time is: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById("time").innerHTML = clock;
}
