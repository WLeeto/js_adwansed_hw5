export default class Character {
    constructor(name, type) {

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name should be a string with length between 2 and 10 characters.');
        }
        
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Invalid character type.');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }
        
    levelUp() {
        if (this.health <= 0) {
            throw new Error('Cant raise lvl of dead character');
        }

        this.level += 1;
        this.attack += Math.floor(this.attack * 0.2);
        this.defence += Math.floor(this.defence * 0.2);
        this.health = 100;
    }
    
    damage(points) {
        if (this.health <= 0) {
            throw new Error('Cant damage character witch is already dead')
        }
        this.health -= points * (1 - this.defence / 100);
    }
}
