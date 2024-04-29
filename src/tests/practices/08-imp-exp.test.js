import { getHeroeById, getHeroesByOwner } from '../../practices/08-imp-exp';

describe('Tests in 08 Heroes Id and Owner', () => {

    test('should return a hero by id', () => {
        const id = 1;
        const hero = getHeroeById(id);
        const heroData = 
        { 
            id: 1,
            name: 'Batman',
            owner: 'DC' 
        };

        expect(hero).toEqual(heroData);
    });

    test('return By Id Undefined', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBe(undefined);
    });


    test('return hero by Owner', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        expect(hero.length).toBe(2);  
    })

    test('return Undefined Owner', () => {
        const owner = 'Disney';
        const hero = getHeroesByOwner(owner);
        expect(hero).toEqual([]);  
    })

});