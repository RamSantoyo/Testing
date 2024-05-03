import { render, screen } from '@testing-library/react';
import {FirstApp} from '../../practices/FirsAPP'; 

describe('Component <FirstApp />', () => {

  const title = 'Titulo principal';
  const subTitle = 'Titulo secundario';
  const name = 'Ramsess';

  test('Render component', () => {
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);
  });

  test('Render match with snapshot', () => {
    const {container} = render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect(container).toMatchSnapshot(); //comparar el snapshot
  });

  test('View Name Ramsess', () => {
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect(screen.getByText(name)).toBeTruthy();
  })

  test('Watching title', () => { 
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect(screen.getAllByText(title)).toBeTruthy();// si existe el texto
  })

  test('Watching one h1 % 2 p', () => { 
    render(<FirstApp title={title} subTitle={subTitle} name={name} />);
    expect(screen.getAllByRole('heading').length).toBe(1);
    expect(screen.getAllByRole('paragraph').length).toBe(2);
  })
 
});


//npm run file -- -u  (actualiza el snapshot)