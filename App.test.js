import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app with a button, a text and a image', () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  const textEl = screen.getByRole('p');
  const imgEl = screen.getByRole('img');

  expect(buttonEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
  expect(imgEl).toBeInTheDocument();
});
