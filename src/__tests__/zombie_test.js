import Zombie from "../js/Zombie";

describe('Zombie', () => {
    describe('create Zombie', () => {
        it('should create Zombie', () => {
            const newChar = new Zombie('Undead');
            const correct = {attack: 40, defence: 10, level: 1, health: 100, type: 'Zombie', name: 'Undead'}
            expect(newChar).toEqual(correct);
        });
    });
});
