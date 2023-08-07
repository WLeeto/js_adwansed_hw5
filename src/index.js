

export class Character {
    constructor(name, type, attack, defence) {

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name should be a string with length between 2 and 10 characters.');
        }
        
        const validTypes = ['Bowman', 'Swordsman', 'Mage', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Invalid character type.');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
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

export class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman', 25, 25);
    }
}

export class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman', 40, 10);
    }
}

export class Mage extends Character {
    constructor(name) {
        super(name, 'Mage', 40, 10);  // Думаю у мага должно быть много атаки и мало защиты (в задаче наоборот)
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon', 10, 40);
    }
}

export class Undead extends Character {
    constructor(name) {
        super(name, 'Undead', 25, 25);
    }
}

export class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie', 40, 10);
    }
}
