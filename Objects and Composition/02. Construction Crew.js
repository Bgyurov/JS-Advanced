function solve(worker){

    if(worker.dizziness == true){
        let waterToAdd = (0.1 * worker.weight) * worker.experience ;
        worker.levelOfHydrated += waterToAdd;
        worker.dizziness = false;
    }


    return worker;
}
