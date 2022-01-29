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

const ninja1 = new Ninja("Hyabusa", 50);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
