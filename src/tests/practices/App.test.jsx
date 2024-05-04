import { App } from '../../App'
import { render, screen, fireEvent } from '@testing-library/react'


describe('Render Counter <App />', () => {

    const value = 10
    test('Iqual snapshot', () => {
        const { container } = render(<App value={value} />)
        expect(container).toMatchSnapshot()
    })

    test('Value is 100 in h2', () => {
        render(<App value={100} />)
        expect(screen.getAllByRole('heading')[1].textContent).toContain('100') //toContain solo verifica que exista el texto
    })

    test('increment with +1', () => {
        render(<App value={100} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getAllByRole('heading')[1].textContent).toContain('101')
    })

    test('decrement with -1', () => {
        render(<App value={100} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getAllByRole('heading')[1].textContent).toContain('99')
    })

    test('reset with value', () => {
        render(<App value={value} />)
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getAllByRole('heading')[1].textContent).toContain('10')
    })

})