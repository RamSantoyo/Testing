import { getUser, getUsuarioActivo } from '../../practices/05-funciones';

describe('Tests in 05-funciones.js', () => {
    test('getUser user return an object', () => {
        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toStrictEqual(testUser); // para comparar objetos
    });

    test('getUsuarioActivo return an object with the name', () => {
        const user = 'Ramsess';

        const userActive = getUsuarioActivo(user);

        const objectUser = {
            uid: 'ABC567',
            username: user
        }

        expect(userActive).toStrictEqual(objectUser);
    })
})