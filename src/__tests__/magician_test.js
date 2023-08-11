import Magician from "../js/magician";

describe('Magician', () => {
    describe('create Magician', () => {
        it('should create Magician', () => {
            const newChar = new Magician('Jaina');
            const correct = {attack: 10, defence: 40, level: 1, health: 100, type: 'Magician', name: 'Jaina'}
            expect(newChar).toEqual(correct);
        });
    });
});
