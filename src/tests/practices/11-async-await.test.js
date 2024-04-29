import { getImagen } from '../../practices/11-async-await';

describe('Test 11-async-await', () => {
    test('return image async ', async() => {
        const data = await getImagen('ditto');
        const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';
        expect(data).toBe(url);
        expect(typeof data).toBe('string');
    });

    test('return error ', async() => {
        const data = await getImagen('ditto2');
        expect(data).toBe(undefined);
    });
})