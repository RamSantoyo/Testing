import { render } from '@testing-library/react';
import {FirstApp} from '../../practices/FirsAPP'; 

describe('Pruebas en <FirstApp />', () => {
  test('debe renderizarse sin errores', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';
    const name = 'Goku';

    render(<FirstApp title={title} subTitle={subTitle} name={name} />);
  });
});
