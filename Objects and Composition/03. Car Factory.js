function solve(order) {
    let carObj = {
        model: order.model,
        engine: {},
        carriage: {
            type: order.carriage,
            color: order.color
        },
        wheels: new Array(4)
    };

    //set engine
    if(order.power <= 90){
        carObj.engine['power'] = 90;
        carObj.engine['volume'] = 1800;
    } else if (order.power > 90 && order.power <= 120){
        carObj.engine['power'] = 120;
        carObj.engine['volume'] = 2400;
    } else if (order.power > 120 && order.power <= 200){
        carObj.engine['power'] = 200;
        carObj.engine['volume'] = 3500;
    }
    
    //set wheels
    if(order.wheelsize%2==0){
        wheelNumber = Math.floor(order.wheelsize -1);
    } else {
        wheelNumber = order.wheelsize;
    }
    carObj.wheels.fill(wheelNumber);



    return carObj;
}