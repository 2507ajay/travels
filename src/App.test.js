import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Sri Balaji Guide brand name', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Check if your brand name is visible on the screen
  const brandElement = screen.getByText(/Sri Balaji Guide/i);
const ratingElement = screen.getByText(/Trusted by/i);
  expect(ratingElement).toBeVisible(); 
  expect(ratingElement).toBeInTheDocument();
  expect(brandElement).toBeInTheDocument();
});
