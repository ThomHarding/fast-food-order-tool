import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the top img with the right initial source', () => {
  render(<App />);
  const imgElement = screen.getAllByRole('img');
  expect(imgElement[0]).toBeInTheDocument();
  expect(imgElement[0]).toHaveAttribute('src', 'food-1.png');
});
