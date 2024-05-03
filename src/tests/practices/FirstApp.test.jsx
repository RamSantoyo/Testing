import { render } from '@testing-library/react';
import {FirstApp} from '../../practices/FirsAPP'; 

describe('Renderizar el componente <FirstApp />', () => {
  test('Render component', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';
    const name = 'Goku';
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);
  });

  test('Render match with snapshot', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo';
    const name = 'Goku';
    const {container} = render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    //expect(container).toMatchSnapshot(); comparar el snapshot
  });

  test('Default props render', () => {
    const subTitle = 'Soy un subtitulo';
    const name = 'Goku';
    const {container} = render(<FirstApp subTitle={subTitle} name={name} />);
    expect(container).toMatchSnapshot();
  })

  test('Watching H1 title', () => {
    const title = 'Hola, soy Ramsess';
    const subTitle = 'Soy un subtitulo';
    const name = 'Ramsess';    
    const {container, getByText} = render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect(getByText(title)).toBeTruthy();// si existe el texto

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toBe(title);

    const titles = container.querySelectorAll('h1');
    expect(titles.length).toBe(1);
  })
 
});


//npm run file -- -u  (actualiza el snapshot)