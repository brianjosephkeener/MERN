// parent Ninja class
class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`The ninja's name is ${this.name}`);
    }
    // simple method in the parent class
    showStats(){
        console.log(`The ninja's name is ${this.name}, strength: ${this.strength}, speed: ${this.speed}, and health: ${this.health}.`);
    }
    drinkSake(){
        this.health+=10;
        console.log(`The ninja's health increased by 10 by drinking sake!`);
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10)
    {
        super(name, 100, 3, 6)
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake;
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
