import {render, fireEvent, screen} from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter/>);
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const welcomeMessage = screen.getByText(/0/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  fireEvent.click(screen.getByText('+'))
  const welcomeMessage = screen.getByText(/1/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'))
  const welcomeMessage = screen.getByText(/-1/i);
  expect(welcomeMessage).toBeInTheDocument();
});
