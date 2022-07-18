function solve(steps, footPrint, speed) {

    let distanceMeters = steps * footPrint
    let speedMetersSec = speed / 3.6;
    let time = distanceMeters / speedMetersSec
    let rest = Math.floor(distanceMeters / 500)

    let timeMin = Math.floor(time / 60)
    let timeSec = Math.round(time - (timeMin * 60))
    let timeHour = Math.floor(time / 3600)
    console.log((timeHour < 10 ? '0' : "") + timeHour + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" +
        (timeSec < 10 ? '0' : "") + timeSec);
}
solve(4000, 0.6, 5)