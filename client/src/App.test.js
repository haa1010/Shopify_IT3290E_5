import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {CookiesProvider} from 'react-cookie'
test('renders learn react link', () => {
  const { getByText } = render(
    <CookiesProvider>
  
  
  <App />
  
  </CookiesProvider>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
