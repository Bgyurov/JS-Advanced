function radar(driverSpeed, area){
    let limit = 0;

    switch(area){
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit  = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    if (driverSpeed <= limit) {
        console.log(`Driving ${driverSpeed} km/h in a ${limit} zone`);
    } else {
        let speedDiff = driverSpeed - limit;
        let status = '';

        if(speedDiff <= 20) {
            status = 'speeding';
        } else if (speedDiff <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        
        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }

}