import { render } from '@testing-library/react';
import {FirstApp} from '../../practices/FirsAPP'; 

describe('Renderizar el componente <FirstApp />', () => {
  test('debe renderizarse sin errores', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';
    const name = 'Goku';
    //render(<FirstApp title={title} subTitle={subTitle} name={name} />); renderiza el componente

    const  { container } = render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect(container).toMatchSnapshot(); //cre una copia de la estructura del componente y la compara con la estructura actual
  });

  test('Mostrar el titulo enviado por props', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';
    const name = 'Goku';
    const { container } = render(<FirstApp title={title} subTitle={subTitle} name={name}/>);
    expect( container ).toMatchSnapshot();
  });

  test('Debebe mostra el texto en el h1', () => {
    const title = "Soy titulo" 
    const subTitle = "soy Subtitle" 
    const name = "Mi nombre es Ram"

    const { container, getByText } = render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect( getByText(title) ).toBeTruthy();

    const h1 = document.querySelector('h1');
    expect( h1.textContent ).toBe(title);
  })


});


//npm run file -- -u  (actualiza el snapshot)