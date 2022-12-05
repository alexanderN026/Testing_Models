import { MythicalWeaponStore } from '../mythical_weapon';

const store = new MythicalWeaponStore();

describe('Mythical Weapon Model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a create method', () => {
        expect(store.index).toBeDefined();
    });

    it('should have a delete method', () => {
        expect(store.index).toBeDefined();
    });

    it('create method should add a weapon', async () => {
        const result = await store.create({
            id: 1,
            name: 'excalibur',
            type: 'sword',
            weight: 10
        });
        expect(result).toEqual({
            id: 1,
            name: 'excalibur',
            type: 'sword',
            weight: 10
        });
    });

    it('index method should return a list of weapons', async () => {
        const result = await store.index();
        expect(result).toEqual([{
            id: 1,
            name: 'excalibur',
            type: 'sword',
            weight: 10
        }]);
    });

    it('show method should return the correct weapon', async () => {
        const result = await store.show('1');
        expect(result).toEqual({
            id: 1,
            name: 'excalibur',
            type: 'sword',
            weight: 10
        });
    });

    it('delete method should remove the weapons', async () => {
        void store.delete('1');
        const result = await store.index();
        expect(result).toEqual([]);
    });
});
