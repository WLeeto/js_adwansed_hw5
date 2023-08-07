import { Character, Bowman, Swordsman, Mage, Daemon, Undead, Zombie } from '../index'; 


describe('Character', () => {
    describe('constructor', () => {
        it('should create a character with the given properties', () => {
            const character = new Character('Alice', 'Swordsman', 30, 15);
            expect(character.name).toBe('Alice');
            expect(character.type).toBe('Swordsman');
            expect(character.health).toBe(100);
            expect(character.level).toBe(1);
            expect(character.attack).toBe(30);
            expect(character.defence).toBe(15);
        });

        it('should throw an error for invalid name', () => {
            expect(() => new Character('', 'Mage', 30, 10)).toThrow("Name should be a string with length between 2 and 10 characters.");
            expect(() => new Character('A', 'Mage', 30, 10)).toThrow("Name should be a string with length between 2 and 10 characters.");
            expect(() => new Character('VeryLongName', 'Mage', 30, 10)).toThrow("Name should be a string with length between 2 and 10 characters.");
        });

        it('should throw an error for invalid type', () => {
            expect(() => new Character('Alice', 'InvalidType', 30, 10)).toThrow("Invalid character type.");
        });
    });

    describe('levelUp', () => {
        it('should increase level by 1', () => {
            const character = new Character('Alice', 'Swordsman', 30, 15);
            character.levelUp();
            expect(character.level).toBe(2);
        });

        it('should increase attack and defence by 20%', () => {
            const character = new Character('Bob', 'Bowman', 25, 25);
            character.levelUp();
            expect(character.attack).toBe(30); // 25 + 20% = 30
            expect(character.defence).toBe(30); // 25 + 20% = 30
        });

        it('should set health to 100', () => {
            const character = new Character('Charlie', 'Mage', 20, 10);
            character.health = 50;
            character.levelUp();
            expect(character.health).toBe(100);
        });

        it('should throw an error if health is 0', () => {
            const character = new Character('David', 'Daemon', 10, 40);
            character.damage(200);
            expect(() => character.levelUp()).toThrow("Cant raise lvl of dead character");
        });
    });

    describe('damage', () => {
        it('should decrease health correctly', () => {
            const character = new Character('Eve', 'Undead', 25, 25);
            character.damage(20);
            expect(character.health).toBe(85);
        });

        it('should not allow damaging a dead character', () => {
            const character = new Character('Zara', 'Daemon', 10, 40);
            character.damage(200);
            expect(() => character.damage(10)).toThrow("Cant damage character witch is already dead");
        });
    });
});

describe('Bowman', () => {
    describe('create bowman', () => {
        it('should create bowman', () => {
            const newChar = new Bowman('Robin');
            expect(newChar.name).toBe('Robin');
            expect(newChar.type).toBe('Bowman');
            expect(newChar.health).toBe(100);
            expect(newChar.level).toBe(1);
            expect(newChar.attack).toBe(25);
            expect(newChar.defence).toBe(25);
        });
    });
    
    // надо ли тестировать все методы для каждого из наследников ?
});

describe('Swordsman', () => {
    describe('create Swordsman', () => {
        it('should create Swordsman', () => {
            const newChar = new Swordsman('Arthur');
            expect(newChar.name).toBe('Arthur');
            expect(newChar.type).toBe('Swordsman');
            expect(newChar.health).toBe(100);
            expect(newChar.level).toBe(1);
            expect(newChar.attack).toBe(40);
            expect(newChar.defence).toBe(10);
        });
    });
});

describe('Mage', () => {
    describe('create Mage', () => {
        it('should create Mage', () => {
            const newChar = new Mage('Jaina');
            expect(newChar.name).toBe('Jaina');
            expect(newChar.type).toBe('Mage');
            expect(newChar.health).toBe(100);
            expect(newChar.level).toBe(1);
            expect(newChar.attack).toBe(40);
            expect(newChar.defence).toBe(10);
        });
    });
});

describe('Daemon', () => {
    describe('create Daemon', () => {
        it('should create Daemon', () => {
            const newChar = new Daemon('Lust');
            expect(newChar.name).toBe('Lust');
            expect(newChar.type).toBe('Daemon');
            expect(newChar.health).toBe(100);
            expect(newChar.level).toBe(1);
            expect(newChar.attack).toBe(10);
            expect(newChar.defence).toBe(40);
        });
    });
});

describe('Undead', () => {
    describe('create Undead', () => {
        it('should create Undead', () => {
            const newChar = new Undead('Silvana');
            expect(newChar.name).toBe('Silvana');
            expect(newChar.type).toBe('Undead');
            expect(newChar.health).toBe(100);
            expect(newChar.level).toBe(1);
            expect(newChar.attack).toBe(25);
            expect(newChar.defence).toBe(25);
        });
    });
});


describe('Zombie', () => {
    describe('create Zombie', () => {
        it('should create Zombie', () => {
            const newChar = new Zombie('Undead');
            expect(newChar.name).toBe('Undead');
            expect(newChar.type).toBe('Zombie');
            expect(newChar.health).toBe(100);
            expect(newChar.level).toBe(1);
            expect(newChar.attack).toBe(40);
            expect(newChar.defence).toBe(10);
        });
    });
});
