function timeToWalk (steps, footprintLength, speed) {

    let speedInMPerS = speed/3.6; 
    let metersWalked = footprintLength*steps;
    let secondsPassed = metersWalked / speedInMPerS;


    let numOfRests = Math.floor(metersWalked/500);
    secondsPassed += numOfRests*60;

    let seconds = 0;
    let minutes = 0;
    let hours = 0;


    while (secondsPassed > 59) {
         minutes++;

         secondsPassed-=60;
    }

    while (minutes > 59) {
        hours++;

        minutes-=60;
    }

    seconds = Math.ceil(secondsPassed);

    //printing
    
    let result = '';

    if (String(hours).length == 1) {
        result += '0';
    }
    result+=String(hours) + ':';

    if (String(minutes).length == 1) {
        result += '0';
    }
    result+=String(minutes) + ':';

    if (String(seconds).length == 1) {
        result += '0';
    }
    result+=String(seconds);


    console.log(result);

}