import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should renders without crash', () => {
  render(<App />);
});
