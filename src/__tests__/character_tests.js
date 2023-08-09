import Character from '../js/сharacter';
import Swordsman from '../js/swordsman';


describe('Character', () => {
    describe('constructor', () => {
        it('should create a character with the given properties', () => {
            const character = new Character('Alice', 'Swordsman', 30, 15);
            const correct = {attack: undefined, defence: undefined, level: 1, health: 100, type: 'Swordsman', name: 'Alice'}
            expect(character).toEqual(correct);
        });

        it('should throw an error for invalid name', () => {
            expect(() => new Character('A', 'Magician', 30, 10)).toThrow("Name should be a string with length between 2 and 10 characters.");
            expect(() => new Character('VeryLongName', 'Magician', 30, 10)).toThrow("Name should be a string with length between 2 and 10 characters.");
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
            const character = new Swordsman('Bob');
            character.levelUp();
            expect(character.attack).toBe(48); // 25 + 20% = 30
            expect(character.defence).toBe(12); // 25 + 20% = 30
        });

        it('should set health to 100', () => {
            const character = new Swordsman('Charlie');
            character.health = 50;
            character.levelUp();
            expect(character.health).toBe(100);
        });

        it('should throw an error if health is 0', () => {
            const character = new Swordsman('David');
            character.damage(200);
            expect(() => character.levelUp()).toThrow("Cant raise lvl of dead character");
        });
    });

    describe('damage', () => {
        it('should decrease health correctly', () => {
            const character = new Swordsman('Eve');
            character.damage(20);
            expect(character.health).toBe(82);
        });

        it('should not allow damaging a dead character', () => {
            const character = new Swordsman('Zara');
            character.damage(200);
            expect(() => character.damage(10)).toThrow("Cant damage character witch is already dead");
        });
    });
});
