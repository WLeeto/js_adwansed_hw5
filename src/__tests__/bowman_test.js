import Bowman from '../js/bowman';

describe('Bowman', () => {
    describe('create bowman', () => {
        it('should create bowman', () => {
            const newChar = new Bowman('Robin');
            const correct = {attack: 25, defence: 25, level: 1, health: 100, type: 'Bowman', name: 'Robin'}
            expect(newChar).toEqual(correct);
        });
    });
});