import { render, screen } from '@testing-library/react'

import Game from '.'

describe('<Game />', () => {
  it('shoud render the heading', () => {
    const { container } = render(<Game />)

    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
