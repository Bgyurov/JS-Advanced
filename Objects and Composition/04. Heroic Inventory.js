function solve(input){
    let heroRegister = [];

    for (const hero of input) {
        let heroObj = {};
        let [heroName, heroLevel, heroItems] = hero.split(' / ');
        heroLevel = Number(heroLevel);
        heroItems = heroItems ? heroItems.split(', ') : [];

        heroObj.name = heroName;
        heroObj.level = heroLevel;
        heroObj.items = heroItems;

        heroRegister.push(heroObj);
    }

    let JSONregister = JSON.stringify(heroRegister);

    return JSONregister;
    // console.log(JSONregister);
}