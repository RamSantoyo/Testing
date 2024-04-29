import { getSaludo, getSuma } from '../../practices/02-template-string';


describe('Template String', () => {
    test('Saludo con nombre de usuario "Hola Ramsess"', () => {
        const name = 'Ramsess';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });

    test('Suma de dos numeros, resultado 10"', () => {
        const num1 = 5;
        const num2 = 15;

        const result = getSuma(num1, num2);

        expect(result).toBe(20);
    });
});
