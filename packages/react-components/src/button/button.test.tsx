import { render, screen } from '@testing-library/react';
import { Button } from 'src/Button/mod';

it('Button should render', () => {
  const textContent = 'Hello button';

  render(<Button>{textContent}</Button>);
  const button = screen.getByRole('button');

  expect(button).toHaveTextContent(textContent);
});
