import Swordsman from "../js/swordsman";

describe('Swordsman', () => {
    describe('create Swordsman', () => {
        it('should create Swordsman', () => {
            const newChar = new Swordsman('Arthur');
            const correct = {attack: 40, defence: 10, level: 1, health: 100, type: 'Swordsman', name: 'Arthur'}
            expect(newChar).toEqual(correct);
        });
    });
});
