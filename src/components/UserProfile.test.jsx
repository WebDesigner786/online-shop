// src/components/UserProfile.test.jsx
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import UserProfile from './UserProfile';

test('renders user profile with default state', () => {
  renderWithProviders(<UserProfile />);
  expect(screen.getByPlaceholderText(/name/i)).toHaveValue('');
  expect(screen.getByPlaceholderText(/email/i)).toHaveValue('');
});

test('updates name and email on input change', () => {
  renderWithProviders(<UserProfile />);
  
  fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'john@example.com' } });

  expect(screen.getByPlaceholderText(/name/i)).toHaveValue('John Doe');
  expect(screen.getByPlaceholderText(/email/i)).toHaveValue('john@example.com');
});
