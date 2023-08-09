import Daemon from "../js/Daemon";

describe('Daemon', () => {
    describe('create Daemon', () => {
        it('should create Daemon', () => {
            const newChar = new Daemon('Lust');
            const correct = {attack: 10, defence: 40, level: 1, health: 100, type: 'Daemon', name: 'Lust'}
            expect(newChar).toEqual(correct);
        });
    });
});
