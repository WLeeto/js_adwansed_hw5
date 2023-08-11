import Undead from "../js/undead";

describe('Undead', () => {
    describe('create Undead', () => {
        it('should create Undead', () => {
            const newChar = new Undead('Silvana');
            const correct = {attack: 25, defence: 25, level: 1, health: 100, type: 'Undead', name: 'Silvana'}
            expect(newChar).toEqual(correct);
        });
    });
});
