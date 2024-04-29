import { retornaArreglo } from '../../practices/07-deses-arr';

describe('07 Pruebas en desestructuración', () => {
    test('Debe de retornar un string y un número', () => {

        const [letras, numeros] = retornaArreglo();

        expect(typeof letras).toBe('string'); //primer forma de comprobar el tipo de dato
        expect(numeros).toEqual( expect.any(Number) ); //segunda forma de comprobar el tipo de dato y mas recomendada
    });
})