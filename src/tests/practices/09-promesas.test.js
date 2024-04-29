import { getHeroeByIdAsync } from '../../practices/09-promesas';

describe('Test 09-promesas', () => {
  test('return hero by id async ', (done) => {
    
    const id = 1;
    const heroData = {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      }
    getHeroeByIdAsync(id).then(heroe => {
      expect(heroe).toEqual(heroData);
      done();
    });
  });

  test('return error ', (done) => {
    
    const id = 100;
    getHeroeByIdAsync(id).catch(error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
    });
  });
});