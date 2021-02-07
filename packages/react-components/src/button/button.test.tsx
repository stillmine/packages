import { render, screen } from '@testing-library/react';

import { Button } from './Button';

it('Button should render', () => {
  const textContent = 'Hello button';

  render(<Button>{textContent}</Button>);

  const button = screen.getByRole('button');

  expect(button).toHaveTextContent(textContent);
});
